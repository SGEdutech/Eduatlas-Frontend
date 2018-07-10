let url_string = location.href; //window.location.href
let url = new URL(url_string);
let itemsPerPage = url.searchParams.get("items");
let pageNum = parseInt(url.searchParams.get("page"));
let pageP1 = pageNum + 1;
let pageM1 = pageNum === 0 ? pageNum : pageNum - 1;
let skip = (pageNum - 1) * itemsPerPage;

console.log(itemsPerPage + '-' + pageNum);

const AllTuitionJSON = $.ajax({
    url: '/tuition/all',
    data: {
        demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category',
        limit: itemsPerPage,
        skip: skip
    }
});

/*let source = $("#entry-template2").html();
let template = Handlebars.compile(source);*/
let context = {
    Name: "Tuition Name",
    rating: "2.5",
    ifAd: "",
    Address: "test address",
    Phone: "",
    Email: "heloo@gmail.com",
    coverPic: "",
    Category: "category",
    id: ""
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
            context.coverPic = data[keys].img_coverPic;
            context.Category = data[keys].category;
            result += Handlebars.templates.tuitionCardCol4(context);
        }
    }
    $("#content-placeholder").append(result);
});

/*let sourcePagination = $("#entry-template3").html();
let templatePagination = Handlebars.compile(sourcePagination);*/
let contextPagination = {
    page: pageNum,
    pageM1: pageM1,
    pageP1: pageP1,
    items: itemsPerPage
};

let result = Handlebars.templates.paginationT(contextPagination);
$("#paginationContainer").append(result);

let suggestionBox = $('#suggestions');

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
            toAdd += `<a href="/app/TuitionDetails2.0.html?_id=${obj._id}" class="color-white">${obj.name}</a><br>`
        });
        suggestionBox.append(toAdd)

    }).catch(err => {
        console.log(err);
    })

}

function getSearchResultsComplex() {
    let state = $('#stateSearch').val();
    let city = $('#citySearch').val();
    let sortBy = $('#sortByInput').val();
    let name = $('#searchBox').val();
    console.log(sortBy);
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
        let container = $("#content-placeholder");
        let result = '';

        suggestionBox.empty();
        container.empty();

        for (keys in data) {
            if (data.hasOwnProperty(keys)) {
                context.rating = data[keys].rating ? data[keys].rating : "2.5";
                context.id = data[keys]._id;
                context.Name = data[keys].name;
                context.Address = `${data[keys].addressLine1},${data[keys].addressLine2},${data[keys].city},${data[keys].state}`;
                context.Phone = data[keys].primaryNumber;
                context.Email = data[keys].email;
                context.coverPic = data[keys].img_coverPic;
                context.Category = data[keys].category;
                result += Handlebars.templates.tuitionCardCol4(context);
            }
        }
        container.append(result);

       /* let toAdd = '';
        data.forEach(obj => {
            toAdd += `<a href="/TuitionDetails2.0.html?_id=${obj._id}" class="color-white">${obj.name}</a><br>`
        });
        suggestionBox.append(toAdd)*/

    }).catch(err => {
        console.log(err);
    })

}








