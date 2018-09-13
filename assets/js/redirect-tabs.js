const redirectTabs = (() => {
    let $addTuitionTab;

    function cache() {
        $addTuitionTab = $('.nav-item a[href="#tab3"]');
    }

    function showTab(queryObject) {
        if (queryObject.tab === 'addTuition') {
            $addTuitionTab.tab('show');
        }
    }

    function init(queryObject) {
        cache();
        showTab(queryObject);
    }

    return {
        init
    };
})();