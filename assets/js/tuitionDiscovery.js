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
            demands: 'name addressLine1 addressLine2 city state primaryNumber email category',
            limit: itemsPerPage,
            skip: skip
        }
    });

    let context = {
        Name: "Tuition Name",
        rating: "2.5",
        ifAd: "",
        Address: "test address",
        Phone: "",
        Email: "heloo@gmail.com",
        coverPic: "",
        Category: "category",
        id: "",
    };


    AllTuitionJSON.then((data) => {
        console.log(data);
        let result = '';
        for (keys in data) {
            if (data.hasOwnProperty(keys)) {
                context.rating = data[keys].rating ? data[keys].rating : "2.5";
                context.id = data[keys]._id;
                context.Name = data[keys].name;
                context.Address = `${data[keys].addressLine1},${data[keys].addressLine2},${data[keys].city},${data[keys].state}`;
                context.Phone = data[keys].primaryNumber;
                context.Email = data[keys].email;
                context.coverPic = data[keys].img_tuitionCoverPic ? 'images/' + data[keys].img_tuitionCoverPic : 'assets/img/tuition2.jpg';
                context.Category = data[keys].category;
                result += Handlebars.templates.tuitionCardCol4(context);
            }
        }

        //updating the pagination links
        $("#content-placeholder").append(result);
        let contextPagination = {
            page: pageNum,
            pageM1: pageM1,
            pageP1: pageP1,
            items: itemsPerPage,
            c: complexSearch,
            /*name: "",
            state: "",
            city: "",
            sortBy: ""*/
        };
        let resultPagi = Handlebars.templates.paginationT(contextPagination);
        $("#paginationContainer").append(resultPagi);
        //updating pagination done

    });
} else {
    // if search type is complex
    let container = $("#content-placeholder");
    suggestionBox.empty();
    container.empty();

    let contextShowingResultsFor = {
        name: name,
        city: city,
        state: state
    };
    let ShowingResultsForHTML = Handlebars.templates.showSearchResult(contextShowingResultsFor);
    container.append(ShowingResultsForHTML);

    console.log(name + '-' + city + '-' + state);
    $.ajax({
        url: '/tuition/search',
        data: {
            name: JSON.stringify({
                search: name,
                fullText: false
            }),
            state: JSON.stringify({
                search: state,
                fullText: true
            }),
            city: JSON.stringify({
                search: city,
                fullText: true
            }),
            demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category',
            limit: itemsPerPage,
            skip: skip,
            sortBy: sortBy
        }
    }).then(data => {
        console.log(data);
        let result = '';
        let context = {
            Name: "Tuition Name",
            rating: "2.5",
            ifAd: "",
            Address: "test address",
            Phone: "",
            Email: "heloo@gmail.com",
            coverPic: "",
            Category: "category",
            id: "",
        };

        for (keys in data) {
            if (data.hasOwnProperty(keys)) {
                context.rating = data[keys].rating ? data[keys].rating : "2.5";
                context.id = data[keys]._id;
                context.Name = data[keys].name;
                context.Address = `${data[keys].addressLine1},${data[keys].addressLine2},${data[keys].city},${data[keys].state}`;
                context.Phone = data[keys].primaryNumber;
                context.Email = data[keys].email;
                context.coverPic = data[keys].img_tuitionCoverPic ? 'images/' + data[keys].img_tuitionCoverPic : 'assets/img/tuition2.jpg';
                context.Category = data[keys].category;
                result += Handlebars.templates.tuitionCardCol4(context);
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
function getSearchResultsImmediate(value) {
    $.ajax({
        url: '/tuition/search',
        data: {
            name: JSON.stringify({
                search: value,
                fullTextSearch: false,
            }),
            limit: 5,
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
    state = $('#stateSearch').val();
    city = $('#citySearch').val();
    sortBy = $('#sortByInput').val();
    name = $('#searchBox').val();
    let container = $("#content-placeholder");

    suggestionBox.empty();
    container.empty();

    let contextShowingResultsFor = {
        name: name,
        city: city,
        state: state
    };
    let ShowingResultsForHTML = Handlebars.templates.showSearchResult(contextShowingResultsFor);
    container.append(ShowingResultsForHTML);


    $.ajax({
        url: '/tuition/search',
        data: {
            name: JSON.stringify({
                search: name,
                fullText: false
            }),
            state: JSON.stringify({
                search: state,
                fullText: true
            }),
            city: JSON.stringify({
                search: city,
                fullText: true
            }),
            demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category',
            limit: itemsPerPage,
            skip: skip,
            sortBy: sortBy
        }
    }).then(data => {
        let result = '';
        let context = {
            Name: "Tuition Name",
            rating: "2.5",
            ifAd: "",
            Address: "test address",
            Phone: "",
            Email: "heloo@gmail.com",
            coverPic: "",
            Category: "category",
            id: "",
        };

        for (keys in data) {
            if (data.hasOwnProperty(keys)) {
                context.rating = data[keys].rating ? data[keys].rating : "2.5";
                context.id = data[keys]._id;
                context.Name = data[keys].name;
                context.Address = `${data[keys].addressLine1},${data[keys].addressLine2},${data[keys].city},${data[keys].state}`;
                context.Phone = data[keys].primaryNumber;
                context.Email = data[keys].email;
                context.coverPic = data[keys].img_tuitionCoverPic ? 'images/' + data[keys].img_tuitionCoverPic : 'assets/img/tuition2.jpg';
                context.Category = data[keys].category;
                result += Handlebars.templates.tuitionCardCol4(context);
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








