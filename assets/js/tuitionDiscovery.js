let url_string = location.href; //window.location.href
let url = new URL(url_string);
let itemsPerPage = url.searchParams.get("items");
let pageNum = url.searchParams.get("page");
let pageP1 = parseInt(pageNum) + 1;
let pageM1 = parseInt(pageNum) === 0 ? parseInt(pageNum) : parseInt(pageNum) - 1;

const AllTuitionJSON = $.ajax({
    url: 'http://localhost:6868/tuition/all',
    data: {
        items: itemsPerPage,
        page: pageNum
    }
});

let source = $("#entry-template2").html();
let template = Handlebars.compile(source);
let context = {
    Name: "Tuition Name",
    rating: "",
    ifAd: "Ad",
    Address: "test address",
    Phone: "9812153423",
    Email: "heloo@gmail.com",
    coverPic: "",
    Category: "category",
    id: ""
};


AllTuitionJSON.then((data) => {
    console.log(data);
    for (keys in data) {
        if (data.hasOwnProperty(keys)) {
            context.id = data[keys]._id;
            context.Name = data[keys].name;
            context.Address = `${data[keys].addressLine1},${data[keys].addressLine2},${data[keys].city},${data[keys].state}`;
            context.Phone = data[keys].primaryNumber;
            context.Email = data[keys].email;
            context.coverPic = data[keys].img_coverPic;
            context.Category = data[keys].category;
            $("#content-placeholder").append(template(context));
        }
    }
});

let sourcePagination = $("#entry-template3").html();
let templatePagination = Handlebars.compile(sourcePagination);
let contextPagination = {
    page: pageNum,
    pageM1: pageM1,
    pageP1: pageP1,
    items: itemsPerPage
};
$("#paginationContainer").append(templatePagination(contextPagination));








