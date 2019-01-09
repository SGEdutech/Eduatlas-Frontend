let searchBtn = (() => {
    let $searchBtn;
    let $searchInput;
    let $searchState;
    let $searchCity;
    let $searchWhereInp;

    function cacheDom() {
        $searchBtn = $('#search_btn');
        $searchInput = $('#search_input');
        $searchState = $('#state_inp');
        $searchCity = $('#city_inp');
        $searchWhereInp = $('#where_input');
    }

    function directToSearchPage() {
        const whereValue = $searchWhereInp.val() ? $searchWhereInp.val() : "";
        const directLink =
            `searchdetails.html?typeOfInfo=tuition&items=18&page=1&c=true&location=${whereValue}&search=${$searchInput.val()}`;
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