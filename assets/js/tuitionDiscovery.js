const AllTuitionJSON = $.ajax({
    url: 'http://eduatlas.com/tuition/all',
});

let source = $("#entry-template2").html();
let template = Handlebars.compile(source);
// let contextArray = [];
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








