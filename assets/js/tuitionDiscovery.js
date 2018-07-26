let suggestionBox = $('#suggestions');
let url_string = location.href; //window.location.href
let url = new URL(url_string);
let itemsPerPage = url.searchParams.get("items");
let pageNum = parseInt(url.searchParams.get("page"));
let city = url.searchParams.get("city");
let sortBy = url.searchParams.get("sortBy");
let state = url.searchParams.get("state");
let name = url.searchParams.get("name");
// c means complex (there are two search- normal and complex)
let complexSearch = url.searchParams.get("c");
// converting boolean from string
complexSearch = (complexSearch === 'true');

let pageP1 = pageNum + 1;
let pageM1 = pageNum === 1 ? pageNum : pageNum - 1;
let skip = (pageNum - 1) * itemsPerPage;

if (!complexSearch) {
    //if search type is not complex
    const AllTuitionJSON = $.ajax({
        url: '/tuition/all',
        data: {
            demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation',
            limit: itemsPerPage,
            skip: skip
        }
    });

    AllTuitionJSON.then((data) => {
            let result = '';
            data.forEach(obj => {
                openNowInit(obj);
                result += `<div class="col-md-4">${template.listgoCard(obj)}</div>`
            });

            $("#content-placeholder").append(result);

            //updating the pagination links
            let contextPagination = {
                page: pageNum,
                pageM1: pageM1,
                pageP1: pageP1,
                items: itemsPerPage,
                c: complexSearch,
            };
            let resultPagi = template.paginationT(contextPagination);
            $("#paginationContainer").append(resultPagi);
            //updating pagination done

        }
    );
} else {
    // if search type is complex
    let container = $("#content-placeholder");
    suggestionBox.empty();
    container.empty();

    let queryEntered = '';
    let cityEntered = '';
    if (name) {
        queryEntered = `<span class="badge badge-info">${name}</span>`;
    }
    if (city) {
        cityEntered = `<span class="badge badge-info"> City = ${city}</span>`;
    }
    $('#showingResultsContainer').html('Showing results : ' + queryEntered + ' ' + cityEntered);

    $.ajax({
        url: '/tuition/search',
        data: {
            name: JSON.stringify({
                search: name,
                fullText: false
            }),
            /*state: JSON.stringify({
                search: state,
                fullText: true
            }),*/
            city: JSON.stringify({
                search: city,
                fullText: true
            }),
            demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation',
            limit: itemsPerPage,
            skip: skip,
            sortBy: sortBy
        }
    }).then(data => {
        let result = '';
        data.forEach(obj => {
            openNowInit(obj);
            result += `<div class="col-md-4">${template.listgoCard(obj)}</div>`
        });
        container.append(result);

        //updating the pagination-links
        let contextPagination = {
            page: pageNum,
            pageM1: pageM1,
            pageP1: pageP1,
            items: itemsPerPage,
            c: complexSearch,
            name: name,
            state: state,
            city: city,
            sortBy: sortBy
        };
        let resultPagi = template.paginationT(contextPagination);
        $("#paginationContainer").append(resultPagi);
        //pagination updating done

    }).catch(err => {
        console.log(err);
    })
}

//for showing immediate results as you start typing name
function getSearchResultsImmediate(event, value) {
    if (event.keyCode === 13) {
        getSearchResultsComplex();
    }
    $.ajax({
        url: '/tuition/search',
        data: {
            name: JSON.stringify({
                search: value,
                fullTextSearch: false,
            }),
            limit: 1,
        }
    }).then(data => {
        suggestionBox.empty();
        let toAdd = '';
        data.forEach(obj => {
            toAdd += `<a href="/TuitionDetails2.0.html?_id=${obj._id}" class="color-white">${obj.name}</a><br>`
        });
        suggestionBox.append(toAdd)

    }).catch(err => {
        console.log(err);
    })

}

// this function will be called when someone hit search button and this function will initialize Global variables for easy pagination
function getSearchResultsComplex() {
    complexSearch = true;
    pageNum = 1;
    pageM1 = 1;
    pageP1 = 2;
    skip = (pageNum - 1) * itemsPerPage;
    /*state = $('#stateSearch').val();*/
    city = $('#citySearch').val();
    sortBy = $('#sortByInput').val();
    name = $('#searchBox').val();
    let container = $("#content-placeholder");

    suggestionBox.empty();
    container.empty();

    let queryEntered = '';
    let cityEntered = '';
    if (name) {
        queryEntered = `<span class="badge badge-info">${name}</span>`;
    }
    if (city) {
        cityEntered = `<span class="badge badge-info"> City = ${city}</span>`;
    }
    $('#showingResultsContainer').html('Showing results : ' + queryEntered + ' ' + cityEntered);


    $.ajax({
        url: '/tuition/search',
        data: {
            name: JSON.stringify({
                search: name,
                fullText: false
            }),
            /*state: JSON.stringify({
                search: state,
                fullText: true
            }),*/
            city: JSON.stringify({
                search: city,
                fullText: true
            }),
            demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation',
            limit: itemsPerPage,
            skip: skip,
            sortBy: sortBy
        }
    }).then(data => {
        let result = '';
        data.forEach(obj => {
            openNowInit(obj);
            result += `<div class="col-md-4">${template.listgoCard(obj)}</div>`
        });
        container.append(result);

        //updating the pagination for the first time according to complex search
        let pagiContainer = $("#paginationContainer");
        pagiContainer.empty();
        let contextPagination = {
            page: pageNum,
            pageM1: pageM1,
            pageP1: pageP1,
            items: itemsPerPage,
            c: complexSearch,
            name: name,
            state: state,
            city: city,
            sortBy: sortBy
        };
        let resultPagi = template.paginationT(contextPagination);
        pagiContainer.append(resultPagi);
        //pagination updating done

    }).catch(err => {
        console.log(err);
    })

}

function removeSuggestions(suggestionBoxId) {
    setTimeout(function () {
        $('#' + suggestionBoxId).empty();
    }, 250)
}

function pressEnter(event) {
    if (event.keyCode === 13) {
        getSearchResultsComplex();
    }
}

function sanatiseData(tuition) {
    if (tuition.description && tuition.description.length > 70) {
        tuition.description = tuition.description.slice(0, 67) + '...';
    }
}

function bookmark(queryId) {

    $.ajax({
        url: '/user/check',
    }).then((userdata) => {
        if (userdata == 'LogIn') {
            $('#loginModal').modal('show');
        } else {
            let AlreadyBookmarked = false;
            userdata.bookmarkTuitions.forEach(tuitionID => {
                if (tuitionID == queryId) {
                    AlreadyBookmarked = true;
                }
            });
            if (AlreadyBookmarked) {
                //already bookmarked do nothing
                alert('already bookmarked')
            } else {
                //bookmark now
                $.ajax({
                    url: '/user/add/bookmarkTuitions/' + userdata._id,
                    method: 'POST',
                    data: {
                        string: queryId
                    }
                }).then(data => {
                    alert('bookmarked successfully')
                })
            }

        }
    }).catch(err => {
        console.log(err);
    })
}

function openNowInit(data) {
    if (data === undefined || data === []) {
        return
    }
    let d = new Date(); // current date and time

    //lets assume institute is closed right now
    data.openedNow = false;

    const weekday = new Array(7);
    weekday[0] = "sunday";
    weekday[1] = "monday";
    weekday[2] = "tuesday";
    weekday[3] = "wednesday";
    weekday[4] = "thursday";
    weekday[5] = "friday";
    weekday[6] = "saturday";
    let day = weekday[d.getDay()];

    let dayNTimeOfOperation = data.dayAndTimeOfOperation;
    let todaysHours;
    dayNTimeOfOperation.forEach(obj => {
        if (obj.day == day) {
            todaysHours = obj;
        }
    });
    if (todaysHours) {
        let toTime = convertTo24Hours(todaysHours.toTime);
        let fromTime = convertTo24Hours(todaysHours.fromTime);
        let currentHours = d.getHours();
        if (currentHours <= toTime.hours && currentHours >= fromTime.hours) {
            data.openedNow = true;
        }
    }

    //get current hours and minutes

    // console.log(dayNTimeOfOperation);
}

//for converting a
function convertTo24Hours(timeToConvert) {
    let time = timeToConvert;
    let hours = Number(time.match(/^(\d+)/)[1]);
    let minutes = Number(time.match(/:(\d+)/)[1]);
    let AMPM = time.match(/\s(.*)$/)[1];
    if (AMPM == "PM" && hours < 12) hours = hours + 12;
    if (AMPM == "AM" && hours == 12) hours = hours - 12;
    /*let sHours = hours.toString();
    let sMinutes = minutes.toString();
    if (hours < 10) sHours = "0" + sHours;
    if (minutes < 10) sMinutes = "0" + sMinutes;*/
    return {hours: hours, minutes: minutes}
}

//auto pick location
let requestUrl = "http://ip-api.com/json";
$.ajax({
    url: requestUrl,
    type: 'GET',
    success: function (json) {
        $('#citySearch').val(json.city);
        // console.log("My city is: " + json.city);
    },
    error: function (err) {
        console.log("Auto pick location failed, error= " + err);
    }
});






