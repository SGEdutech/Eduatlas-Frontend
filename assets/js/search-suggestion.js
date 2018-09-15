const searchSuggestion = (() => {
    let $suggestionContainer = $('#autocomplete_container');
    let $searchInput = $('#search_input');
    let $searchState = $('#state_inp');
    let $searchCity = $('#city_inp');
    let query;

    function cacheDom() {
        $suggestionContainer = $('#autocomplete_container');
        $searchInput = $('#search_input');
    }

    function bindEvents() {
        $searchInput.keyup(checkKey);
        $searchInput.blur(removeSuggestion);
    }

    function removeSuggestion() {
        setTimeout(function () {
            $suggestionContainer.empty();
        }, 150);
    }

    function checkKey(event) {
        if (event.keyCode === 13) {
            redirectToSearchPage();
        } else {
            getSuggestion().then(render);
        }
    }

    function redirectToSearchPage() {
        let query = $searchInput.val() ? $searchInput.val() : "";
        let state = $searchState.val() ? $searchState.val() : "";
        let city = $searchCity.val() ? $searchCity.val() : "";
        window.location.assign(`searchdetails.html?typeOfInfo=tuition&items=18&page=1&c=true&city=${city}&state=${state}&category=&sortBy=default&name=${query}`);
    }

    function getSuggestion() {
        query = $searchInput.val();
        return tuitionApiCalls.searchTuitions(0, 5, "Default", "name", {
            name: JSON.stringify({
                search: query,
                fullTextSearch: false,
            })
        })
    }

    function render(suggestionArray) {
        const context = {
            suggestionArray
        };
        const suggestionHtml = template.searchResult(context);
        $suggestionContainer.html(suggestionHtml);
    }

    function init() {
        cacheDom();
        bindEvents();
    }

    return {
        init
    };
})();