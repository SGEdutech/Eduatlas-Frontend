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
            demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy',
            limit: itemsPerPage,
            skip: skip
        }
    });

    AllTuitionJSON.then((data) => {
            let result = '';
            data.forEach(obj => {
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
            let resultPagi = Handlebars.templates.paginationT(contextPagination);
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
            demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category description',
            limit: itemsPerPage,
            skip: skip,
            sortBy: sortBy
        }
    }).then(data => {
        let result = '';
        let context = {
            name: "Tuition Name",
            state: '',
            description: '',
            primaryNumber: "",
            // rating: "2.5",
            // ifAd: "",
            // coverPic: "",
            _id: "",
        };

        for (keys in data) {
            if (data.hasOwnProperty(keys)) {
                sanatiseData(data[keys]);
                // context.rating = data[keys].rating ? data[keys].rating : "2.5";
                context._id = data[keys]._id;
                context.name = data[keys].name;
                context.description = data[keys].description;
                context.state = data[keys].state;
                context.primaryNumber = data[keys].primaryNumber;
                // context.coverPic = data[keys].img_tuitionCoverPic ? 'images/' + data[keys].img_tuitionCoverPic : 'assets/img/tuition2.jpg';
                // context.Category = data[keys].category;
                result += `<div class="col-md-4">${template.listgoCard(context)}</div>`
            }
        }
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
        let resultPagi = Handlebars.templates.paginationT(contextPagination);
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
            demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category description',
            limit: itemsPerPage,
            skip: skip,
            sortBy: sortBy
        }
    }).then(data => {
        let result = '';
        let context = {
            name: "Tuition Name",
            state: '',
            description: '',
            primaryNumber: "",
            // rating: "2.5",
            // ifAd: "",
            // coverPic: "",
            _id: "",
        };

        for (keys in data) {
            if (data.hasOwnProperty(keys)) {
                sanatiseData(data[keys]);
                // context.rating = data[keys].rating ? data[keys].rating : "2.5";
                context._id = data[keys]._id;
                context.name = data[keys].name;
                context.description = data[keys].description;
                context.state = data[keys].state;
                context.primaryNumber = data[keys].primaryNumber;
                // context.coverPic = data[keys].img_tuitionCoverPic ? 'images/' + data[keys].img_tuitionCoverPic : 'assets/img/tuition2.jpg';
                // context.Category = data[keys].category;
                result += `<div class="col-md-4">${template.listgoCard(context)}</div>`
            }
        }
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
        let resultPagi = Handlebars.templates.paginationT(contextPagination);
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






