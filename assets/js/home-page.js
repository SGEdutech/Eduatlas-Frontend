$(function () {

    const promise = $.ajax({
        url: '/tuition/all',
        data: {
            items: 6,
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
        $('.responsive').slick({
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }).catch(err => {
        console.log(err);
    });

});

let suggestionBox = $('#suggestions');

function getSearchResults(value) {
    $.ajax({
        url: '/tuition/search',
        data: {
            search: value
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

/*
function removeSuggestions() {
    suggestionBox.empty();
}*/