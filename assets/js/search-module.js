const searchModule = (() => {
    let queryObj;
    let user;
    let pagePlusOne;
    let pageMinusOne;
    let skip;

    let $contentPlaceholder;
    let $paginationContainer;
    let $citySearch;
    let $sortByInput;
    let $searchBox;
    let $searchButton;
    let $suggestionBox;
    let $showingResultsContainer;


    function cache() {
        $contentPlaceholder = $('#content-placeholder');
        $paginationContainer = $('#paginationContainer');
        $citySearch = $('#citySearch');
        $sortByInput = $('#sortByInput');
        $searchBox = $('#searchBox');
        $searchButton = $('#search-button');
        $suggestionBox = $('#suggestions');
        $showingResultsContainer = $('#showingResultsContainer');
    }

    function bindEvents() {
        $searchButton.click(initComplexSearch);

        $citySearch.keyup(event => {
            if (event.keyCode === 13) {
                initComplexSearch();
            }
        });

        $searchBox.keyup((event) => {
            if (event.keyCode === 13) {
                initComplexSearch();
            }
            getSuggestions($searchBox.val());
        });

        $searchBox.blur(() => setTimeout(function () {
            $suggestionBox.empty()
        }, 100));
    }

    function getSuggestions(value) {
        $.ajax({
            url: '/tuition/search',
            data: {
                name: JSON.stringify({
                    search: value,
                    fullTextSearch: false,
                }),
                limit: 1,
            }
        }).then(data => {
            $suggestionBox.empty();
            let toAdd = '';
            data.forEach(obj => {
                toAdd += `<a href='/TuitionDetails2.0.html?_id=${obj._id}' class='color-white'>${obj.name}</a><br>`
            });
            $suggestionBox.append(toAdd)
        }).catch(err => {
            console.log(err);
        })
    }

    function doMinorCalculations() {
        pagePlusOne = queryObj.page + 1;
        pageMinusOne = queryObj.page === 1 ? queryObj.page : queryObj.page - 1;
        skip = (queryObj.page - 1) * queryObj.items;
    }

    function initComplexSearch() {
        queryObj.c = true;
        queryObj.page = 1;
        pageMinusOne = 1;
        pagePlusOne = 2;
        skip = 0;
        /*state = $('#stateSearch').val();*/
        queryObj.city = $citySearch.val();
        queryObj.sortBy = $sortByInput.val();
        queryObj.name = $searchBox.val();

        $contentPlaceholder.empty();
        $paginationContainer.empty();
        showSearchResults(getSearchResults());
    }

    function showSearchResults(resultsPromise) {
        resultsPromise.then((data) => {
                let result = '';
                data.forEach(obj => {
                    let avgRating = helperScripts.calcAverageRating(obj.reviews);
                    obj.rating = avgRating === -1 ? 2.5 : avgRating;
                    helperScripts.openNowInit(obj);
                    result += template.smoothCard(obj);
                });

                $contentPlaceholder.append(result);

                //updating the pagination links
                let contextPagination = {
                    page: queryObj.page,
                    pageM1: pageMinusOne,
                    pageP1: pagePlusOne,
                    items: queryObj.items,
                    c: queryObj.c,
                };
                let resultPagi = template.paginationT(contextPagination);
                $paginationContainer.append(resultPagi);
                //updating pagination done

                PubSub.publish('searchCards.load', null);
            }
        );
    }

    function showResultsHelper() {
        $showingResultsContainer.empty();
        let queryEntered = '';
        let cityEntered = '';
        if (queryObj.name) {
            queryEntered = `<span class='badge badge-info'>${queryObj.name}</span>`;
        }
        if (queryObj.city) {
            cityEntered = `<span class='badge badge-info'> City = ${queryObj.city}</span>`;
        }
        $showingResultsContainer.html('Showing results : ' + queryEntered + ' ' + cityEntered);

    }

    function getSearchResults() {
        if (queryObj.c) {
            //means search type is complex
            showResultsHelper();

            return $.ajax({
                url: '/tuition/search',
                data: {
                    name: JSON.stringify({
                        search: queryObj.name,
                        fullText: false
                    }),
                    /*state: JSON.stringify({
                        search: state,
                        fullText: true
                    }),*/
                    city: JSON.stringify({
                        search: queryObj.city,
                        fullText: true
                    }),
                    demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews',
                    limit: queryObj.items,
                    skip: skip,
                    sortBy: queryObj.sortBy
                }
            });
        } else {
            //means search type is simple
            return $.ajax({
                url: '/tuition/all',
                data: {
                    demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews',
                    limit: queryObj.items,
                    skip: skip
                }
            });
        }
    }

    function updateUser(userInfo) {
        user = userInfo;
    }

    function render(queryObject) {
        queryObj = queryObject;
        cache();
        bindEvents();
        doMinorCalculations();
        let results = getSearchResults();
        showSearchResults(results)
    }

    return {render, updateUser}
})();