$.ajax({
    url: 'http://eduatlas.com/tuition/all',
    method: 'GET',
    data: {limit: 15, skip: 1000}
}).then(appendCards)
    .catch(err => console.error(err));

function appendCards(tuitionsArray) {
    let cardHtml = '';
    tuitionsArray.forEach(tuition => {
        cardHtml += template.listgoCard(tuition)
    });
    $('#cards_container').html(cardHtml);
    initSlick();
}

function initSlick() {
    $('#cards_container').slick({
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
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
}