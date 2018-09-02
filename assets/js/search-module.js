const searchModule = (() => {
    let queryObj;
    let user;
    let skip;
    let page = 1;
    let items = 18;

    let $contentPlaceholder;
    let $paginationContainer;
    let $citySearch;
    let $sortByInput;
    let $searchBox;
    let $searchButton;
    let $suggestionBox;
    let $showingResultsContainer;
    let $typeOfInfoRadio;
    let $typeOfInfoInput;
    let $typeOfInfoSchoolButton, $typeOfInfoTuitionButton, $typeOfInfoEventButton;
    let $prevPageButtons, $nextPageButtons;
    let $searchQueryStringDisplay, $cityQueryStringDisplay;
    let $body;
    let $tuitionCategoryContainer, $schoolCategoryContainer, $eventCategoryContainer;
    let $subCategoryTuition, $subCategorySchool, $subCategoryEvent;


    function cache() {
        $contentPlaceholder = $('#content-placeholder');
        $paginationContainer = $('#paginationContainer');
        $citySearch = $('#citySearch');
        $sortByInput = $('#sortByInput');
        $searchBox = $('#searchBox');
        $searchButton = $('#search-button');
        $suggestionBox = $('#suggestions');
        $showingResultsContainer = $('#showingResultsContainer');
        $typeOfInfoTuitionButton = $("input[name='typeOfInfo'][value='tuition']");
        $typeOfInfoSchoolButton = $("input[name='typeOfInfo'][value='school']");
        $typeOfInfoEventButton = $("input[name='typeOfInfo'][value='event']");
        $searchQueryStringDisplay = $('#search_query_display');
        $cityQueryStringDisplay = $('#city_query_display');
        $body = $('body');
        $tuitionCategoryContainer = $('#tuition_category_container');
        $schoolCategoryContainer = $('#school_category_container');
        $eventCategoryContainer = $('#event_category_container');
        $typeOfInfoInput = $("input[name='typeOfInfo']");
        $subCategoryTuition = $("#category");
        $subCategorySchool = $("#categorySchool");
        $subCategoryEvent = $("#categoryEvent");
    }

    function cacheDynamic() {
        $typeOfInfoRadio = $("input[name='typeOfInfo']:checked");
        $prevPageButtons = $('li > a.prev-page');
        $nextPageButtons = $('li > a.next-page');
    }

    function bindEvents() {
        $searchButton.click(initComplexSearch);
        $citySearch.keyup(event => {
            if (event.keyCode === 13) {
                initComplexSearch();
            }
        });

        $searchBox.keyup(event => {
            if (event.keyCode === 13) {
                initComplexSearch();
            }
            getSuggestions($searchBox.val());
        });

        $searchBox.blur(() => setTimeout(function () {
            $suggestionBox.empty()
        }, 150));

        subCategoryBind();
    }

    function subCategoryBind() {
        $typeOfInfoInput.click(function () {
            var value = $(this).val();
            if (value === "tuition") {
                $tuitionCategoryContainer.css("display", "block");
            } else {
                $tuitionCategoryContainer.css("display", "none");
            }
            if (value === "school") {
                $schoolCategoryContainer.css("display", "block");
            } else {
                $schoolCategoryContainer.css("display", "none");
            }
            if (value === "event") {
                $eventCategoryContainer.css("display", "block");
            } else {
                $eventCategoryContainer.css("display", "none");
            }
        });
    }

    function bindDynamicEvents() {
        $prevPageButtons.click(showPrevResults);
        $nextPageButtons.click(showNextResults);
    }

    function showPrevResults() {
        $contentPlaceholder.empty();
        helperScripts.scrollToElement($body, 100);
        page--;
        render();
    }

    function showNextResults() {
        $contentPlaceholder.empty();
        helperScripts.scrollToElement($body, 100);
        page++;
        render();
    }

    function getSuggestions(value) {
        $.ajax({
            url: `/${queryObj.typeOfInfo}/search`,
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
            let capitalTypeOfInfo = queryObj.typeOfInfo.charAt(0).toUpperCase() + queryObj.typeOfInfo.slice(1);
            data.forEach(obj => {
                toAdd += `<a class="text-info" href='/${capitalTypeOfInfo}Details2.0.html?_id=${obj._id}' class='color-white'>${obj.name}</a><br>`
            });
            $suggestionBox.append(toAdd)
        }).catch(err => console.error(err))
    }

    function renderTypeOfInfoRadio() {
        if (queryObj.typeOfInfo === 'tuition') {
            $typeOfInfoTuitionButton.prop("checked", true);
            $tuitionCategoryContainer.css("display", "block");
            console.log(queryObj.category);
            $subCategoryTuition.val(queryObj.category)
        } else if (queryObj.typeOfInfo === 'school') {
            $typeOfInfoSchoolButton.prop("checked", true);
            $schoolCategoryContainer.css("display", "block");
            $subCategorySchool.val(queryObj.category);
        } else if (queryObj.typeOfInfo === 'event') {
            $typeOfInfoEventButton.prop("checked", true);
            $eventCategoryContainer.css("display", "block");
            $subCategoryEvent.val(queryObj.category);
        }
    }

    function initComplexSearch() {
        queryObj.c = true;
        page = 1;
        skip = 0;

        queryObj.city = $citySearch.val();
        queryObj.sortBy = $sortByInput.val();
        queryObj.name = $searchBox.val();
        // queryObj.category = $subCategory.find(":selected").val();

        // cache dynamic will get the updated value of radio object
        cacheDynamic();
        queryObj.typeOfInfo = $typeOfInfoRadio.val();

        if (queryObj.typeOfInfo === "tuition") {
            queryObj.category = $subCategoryTuition.find(":selected").text();
            if (queryObj.category === "tuition subcategory") {
                delete queryObj.category;
            }
        } else if (queryObj.typeOfInfo === "school") {
            queryObj.category = $subCategorySchool.find(":selected").text();
            if (queryObj.category === "school subcategory") {
                delete queryObj.category;
            }
        } else if (queryObj.typeOfInfo === "event") {
            queryObj.category = $subCategoryEvent.find(":selected").text();
            if (queryObj.category === "event subcategory") {
                delete queryObj.category;
            }
        }

        console.log(queryObj.category);

        getSearchResults().then(showSearchResults);
        updatePaginationStuff();
        cacheDynamic();
        bindDynamicEvents();
    }

    function showSearchResults(data) {
        let result = '';
        data.forEach(obj => {
            let avgRating = helperScripts.calcAverageRating(obj.reviews);
            obj.averageRating = avgRating === -1 ? 2.5 : avgRating;
            helperScripts.openNowInit(obj);
            obj.typeOfInfo = queryObj.typeOfInfo;
            obj.col4 = true;

            //check if already bookmarked
            // start
            let isBookmarked = false;
            if (user) {
                user.bookmarkTuitions.forEach(id => {
                    if (id === obj._id) {
                        isBookmarked = true;
                    }
                });
                user.bookmarkSchools.forEach(id => {
                    if (id === obj._id) {
                        isBookmarked = true;
                    }
                });
                user.bookmarkEvents.forEach(id => {
                    if (id === obj._id) {
                        isBookmarked = true;
                    }
                });
            }
            if (isBookmarked) {
                obj.bookmarked = true;
            }
            // end
            if (queryObj.typeOfInfo === "event") {
                console.log(obj);
                if (obj.fromDate) {
                    obj.fromDate = helperScripts.getDateObj(obj.fromDate)
                    obj.fromDate = obj.fromDate.date + " " + obj.fromDate.monthName;
                }
                if (obj.lastDateRegistration) {
                    obj.lastDateRegistration = helperScripts.getDateObj(obj.lastDateRegistration)
                    obj.lastDateRegistration = obj.lastDateRegistration.date + " " + obj.lastDateRegistration.monthName;
                }
                obj.averageRating = null;
                obj.claimedBy = false;
                obj.event = true;
                result += template.smoothCardHomePage(obj);
            } else {
                result += template.smoothCardHomePage(obj);
            }
        });

        $contentPlaceholder.html(result);

        console.log('cards ready');
        PubSub.publish('searchCards.load', null);
    }

    function updatePaginationStuff() {
        const paginationInfo = {};
        paginationInfo.page = page;
        paginationInfo.pageM1 = page - 1;
        paginationInfo.pageP1 = page + 1;
        paginationInfo.isPrevZero = paginationInfo.pageM1 === 0;
        let resultPagi = template.paginationT(paginationInfo);
        $paginationContainer.html(resultPagi);
    }

    function showResultsHelper() {
        queryObj.name ? $searchQueryStringDisplay.html(queryObj.name) : $searchQueryStringDisplay.empty();

        queryObj.city ? $cityQueryStringDisplay.html(queryObj.city) : $cityQueryStringDisplay.empty();
    }

    function getSearchResults() {
        const skip = (page - 1) * items;

        if (queryObj.c) {
            //means search type is complex
            showResultsHelper();

            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `/${queryObj.typeOfInfo}/search`,
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
                        category: JSON.stringify({
                            search: queryObj.category,
                            fullText: true
                        }),
                        demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews organiserPhone organiserEmail fromTime toTime fromDate toDate lastDateRegistration',
                        limit: items,
                        skip,
                        sortBy: queryObj.sortBy
                    }
                }).then(resolve).catch(reject);
            })
        } else {
            //means search type is simple
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: `/${queryObj.typeOfInfo}/all`,
                    data: {
                        demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews organiserPhone organiserEmail fromTime toTime fromDate toDate lastDateRegistration',
                        limit: items,
                        skip,
                    }
                }).then(resolve).catch(reject);
            })
        }
    }

    function updateUser(userInfo) {
        user = userInfo;
        if (queryObj) {
            getSearchResults().then(showSearchResults)
        }

    }

    function render() {
        renderTypeOfInfoRadio();
        getSearchResults().then(showSearchResults);
        updatePaginationStuff();
        cacheDynamic();
        bindDynamicEvents();
    }

    function init(queryObject) {
        queryObj = queryObject;
        cache();
        bindEvents();
        render();
    }

    return {
        init,
        updateUser
    }
})();