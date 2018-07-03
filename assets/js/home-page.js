$(function () {
    const promise = $.ajax({
        url: 'http://localhost:6868/tuition/all',
        data: {
            items: 3,
            page: 1
        }
    });

    let source = $("#entry-template2").html();
    let template = Handlebars.compile(source);
    let context = {
        Name: "Tuition Name",
        rating: "",
        ifAd: "",
        Address: "address",
        Phone: "phone",
        Email: "email",
        coverPic: "",
        Category: "category",
        id: "#"
    };

    promise.then((data) => {
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
                $("#tuitionContainer").append(template(context));
            }
        }
    }).catch(err => {
        console.log(err);
    });


});