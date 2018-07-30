const scripts = {
    logout() {
        $.get({url: '/auth/local/logout'})
            .then(data => {
                if (data.done) window.location.assign('/');
            });
    },

    executeAllFunctions(...funtionArray) {
        funtionArray.forEach(fn => fn());
    }
};

const loginModal = (() => {
    const $loginModalContainer = $('#login_modal_container');
    let $form;
    let $submitBtn;

    function cacheDynamicDom() {
        $form = $('#login_form');
        $submitBtn = $form.find('#submit_btn')
    }

    function getHtml() {
        const url = 'login-modal.html';
        const dataType = 'html';
        return $.get({url, dataType}); // Returns Promise
    }

    function bindEvents() {
        $form.submit(submitForm);
    }

    function submitForm(event) {
        event.preventDefault();
        let formData = $form.serialize();
        $.post({
            url: $form.attr('action'),
            data: formData,
        }).then(() => window.location.reload())
            .catch(err => {
                const errorResponse = err.responseText;
                if (errorResponse === 'Bad Request') {
                    alert('please fill both username and password')
                } else {
                    let messageToDisplay = errorResponse.match(new RegExp('<pre>' + "(.*)" + '</pre>'))[1];
                    alert(messageToDisplay)
                }
            });
    }

    function render() {
        return new Promise((resolve, reject) => {
            getHtml().then(html => {
                $loginModalContainer.html(html);
                resolve();
            }).catch(err => reject(err));
        })
    }

    render().then(() => {
        cacheDynamicDom();
        bindEvents();
    });
})();

const navigationBar = (() => {
    const $navContainer = $('#nav_container');
    const navHtml = getHtml();
    let $logOutBtn;
    let $addTuitionBtn;
    let $dynamicUserBtn;
    let user;

    // TODO: Further Optimise
    function cacheDynamicDom() {
        $logOutBtn = $navContainer.find('#log_out_btn')
        $addTuitionBtn = $navContainer.find('#add_tuition_btn');
        $dynamicUserBtn = $navContainer.find('#dynamic_user_btn');
    }

    function updateUserStatus() {
        user.loggedIn = Boolean(user);
        const dynamicButtonHtml = template.userStatus(user);
        $dynamicUserBtn.html(dynamicButtonHtml);
    }

    function updateAddTuitionLink() {
        if (user) {
            $addTuitionBtn.attr('href', './User-dashboard.html?tab=addTuition');
        } else {
            $addTuitionBtn.attr('data-toggle', 'modal');
            $addTuitionBtn.attr('data-target', '#loginModal');
        }
    }

    function getHtml() {
        const url = 'nav.html';
        const dataType = 'html';
        return $.get({url, dataType}); // Returns Promise
    }

    function bindEvents() {
        if (user) $logOutBtn.click(scripts.logout);
    }

    function render() {
        return new Promise((resolve, reject) => {
            navHtml.then(navHtml => {
                $navContainer.html(navHtml);
                PubSub.publish('nav.load');
                resolve();
            }).catch(err => reject(err));
        })
    }

    PubSub.subscribeOnce('user.load', (msg, userInfo) => {
        user = userInfo;
        render().then(() => scripts.executeAllFunctions(cacheDynamicDom, updateUserStatus, cacheDynamicDom, bindEvents, updateAddTuitionLink));
    });
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

    function render() {
        getTuitionInfo()
            .then(tuitionInfoArray => {
                const cardsHtml = getCardsHtml(tuitionInfoArray);
                $cardsContainer.html(cardsHtml);
                PubSub.publish('cards.load', $cardsContainer);
            })
            .catch(err => console.error(err));

    }

    render();
})();

const user = (() => {
    function getInfo() {
        const url = '/user/info';
        return $.get({url}); // Returns a promise
    }

    getInfo().then(user => PubSub.publish('user.load', user));
})();

const searchSuggestion = (() => {
    const $suggestionContainer = $('#autocomplete_container');
    const $searchInput = $('#search_input');
    let query;

    function bindEvents() {
        $searchInput.keyup(checkKey);
        $searchInput.blur()
    }

    function removeSuggestion() {
        setTimeout(function () {
            $suggestionContainer.empty();
        }, 1);
    }

    function checkKey(event) {
        if (event.keyCode === 13) {
            redirectToSearchPage();
        } else {
            getSuggestion().then(render);
        }
    }
    
    function redirectToSearchPage() {
        query = $searchInput.val();
        window.location.assign('TuitionDiscovery.html?items=18&page=1&c=true&name=' + query);
    }

    function getSuggestion() {
        query = $searchInput.val();
        const url = '/tuition/search';
        const data = {
            name: JSON.stringify({
                search: query,
                fullTextSearch: false,
            }),
            limit: 5,
            demands: 'name'
        };
        return $.ajax({url, data}); //Returns a promise
    }

    function render(suggestionArray) {
        const context = {suggestionArray};
        const suggestionHtml = template.searchResult(context);
        $suggestionContainer.html(suggestionHtml);
    }

    bindEvents();
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

    PubSub.subscribeOnce('cards.load', (msg, container) => container.slick(config));
})();