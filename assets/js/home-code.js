const loginModal = {
    cacheDom: function () {
        this.$loginModalContainer = $('#login_modal_container');
    },
    submitData: function () {
        let formData = $(form).serialize();

        $.get({
            url: form.attr('action'),
            data: formData,
        }).then(() => window.location.reload())
            .catch(err => {
                let errorResponse = err.responseText;
                if (errorResponse === 'Bad Request') {
                    alert('please fill both username and password')
                } else {
                    let messageToDisplay = errorResponse.match(new RegExp('<pre>' + "(.*)" + '</pre>'))[1];
                    alert(messageToDisplay)
                }
            });
    },
    render: function () {
        this.$loginModalContainer.load('login-modal.html');

    },
    init: function () {
        this.cacheDom();
        this.render();
    }
};

const navigationBar = (() => {
    const $navContainer = $('#nav_container');

    function updateUserStatus(user) {
        const dynamicButtonHtml = template.userStatus(user);
        $('#dynamic_user_btn').html(dynamicButtonHtml);
    }

    function getHtml() {
        const url = 'nav.html';
        const dataType = 'html';
        return $.get({url, dataType}); // Returns Promise
    }

    function render() {
        getHtml().then(navHtml => $navContainer.html(navHtml));
    }

    render();
})();

const tuitionCards = (() => {
    const $cardsContainer = $('#cards_container');

    function getTuitionInfo() {
        const url = '/tuition/all';
        const data = {limit: 15};
        return $.get(url, data); // Returns a promise
    }

    function calcAverageRating(reviewArray) {
        if (reviewArray === undefined || reviewArray.length === 0) return -1;
        const totalReviews = reviewArray.length;
        let totalStars = 0;
        reviewArray.forEach(review => totalStars += review.rating);
        return totalStars / totalReviews;
    }

    function insertAverageRating(tuitionInfoArray = []) {
        tuitionInfoArray.forEach(tuitionInfo => {
            const averageRating = calcAverageRating(tuitionInfo.reviews);
            tuitionInfo.averageRating = averageRating === -1 ? 2.5 : averageRating;
        });
    }

    function getCardsHtml(tuitionInfoArray = []) {
        insertAverageRating(tuitionInfoArray);
        let cardsHtml = '';
        tuitionInfoArray.forEach(tuitionInfo => cardsHtml += template.smoothCardHomePage(tuitionInfo));
        return cardsHtml;
    }

    function render(tuitionInfoArray) {
        const cardsHtml = getCardsHtml(tuitionInfoArray);
        $cardsContainer.html(cardsHtml);
    }

    getTuitionInfo().then(render).catch(err => console.error(err));
})();

const user = (() => {
    function getInfo() {
        const url = '/user/info';
        return $.get({url}); // Returns a promise
    }

    return {
        getInfo
    }
})();

const carousel = (() => {
    const config = {
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
    };
})();