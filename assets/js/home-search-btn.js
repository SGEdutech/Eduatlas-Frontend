let searchBtn = (() => {
    let $searchBtn;
    let $searchInput;
    let $searchState;
    let $searchCity;

    function cacheDom() {
        $searchBtn = $('#search_btn');
        $searchInput = $('#search_input');
        $searchState = $('#state_inp');
        $searchCity = $('#city_inp');
    }

    function directToSearchPage() {
        const cityValue = $searchCity.val() ? $searchCity.val() : "";
        const directLink =
            `searchdetails.html?typeOfInfo=tuition&items=18&page=1&c=true&city=${cityValue}&state=${$searchState.val()}&category=&sortBy=default&name=${$searchInput.val()}`;
        window.location.assign(directLink);
    }

    function bindEvents() {
        $searchBtn.click(directToSearchPage);
    }

    function init() {
        cacheDom();
        bindEvents();
    }

    return {
        init
    };
})();