$(function () {

    const promise = $.ajax({
        url: '/tuition/all',
        data: {
            demands: 'name addressLine1 addressLine2 city state primaryNumber email category img_tuitionCoverPic',
            limit: 4,
        }
    });

    let context = {
        Name: "Tuition Name",
        rating: "2.5",
        ifAd: "",
        Address: "address",
        Phone: "phone",
        Email: "email",
        coverPic: "",
        Category: "category",
        id: "#",
    };


    promise.then((data) => {
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
                console.log(Handlebars.templates.newCard(context))
                result += Handlebars.templates.newCard(context);
            }
        }
        $("#tuitionContainer").append(result);

        $('.responsive').slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
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
            toAdd += `<a href="/TuitionDetails2.0.html?_id=${obj._id}" class="color">${obj.name}</a><br>`
        });
        suggestionBox.append(toAdd)

    }).catch(err => {
        console.log(err);
    })

}

// todo - decide when to clear suggestion box
function removeSuggestions() {
    setTimeout(function () {
        suggestionBox.empty();
    }, 250)

}

function redirectToDiscovery() {
    let typeOfInsitute = $('#typeOfInstitute').val();
    let searchName = $('#searchBox').val();
    switch (typeOfInsitute) {
        case 'tuition':
            window.location.assign('TuitionDiscovery.html?items=18&page=1&c=true&name=' + searchName);
            break;
        case 'school':
            break;
        default:

    }
}