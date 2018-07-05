$(function () {
    const promise = $.ajax({
        url: 'http://localhost:6868/tuition/all',
        data: {
            items: 3,
            page: 1,
            demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category'
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

let suggestionBox = $('#suggestions');

function getSearchResults(value) {
    $.ajax({
        url: 'http://localhost:6868/tuition/search',
        data: {
            search: value
        }
    }).then(data => {
        suggestionBox.empty();
        let toAdd = '';
        data.forEach(obj => {
            toAdd += `<a href="http://localhost:6868/app/TuitionDetails2.0.html?_id=${obj._id}" class="color-white">${obj.name}</a><br>`
        });
        suggestionBox.append(toAdd)

    }).catch(err => {
        console.log(err);
    })

}

function removeSuggestions() {
    suggestionBox.empty();
}