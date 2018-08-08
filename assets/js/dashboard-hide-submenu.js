const dashboardHideSubMenu = (() => {
    let $addTuitionSubMenu;
    let $trigger;

    function cache() {
        $addTuitionSubMenu = $('#addTuitionSubMenu');
        $trigger = $('a[href="#tab3"]');
    }

    function bindEvents() {
        $trigger.on('show.bs.tab', function (e) {
            $addTuitionSubMenu.show();
        });

        $trigger.on('hide.bs.tab', function (e) {
            $addTuitionSubMenu.hide();
        });
    }

    function init() {
        cache();
        $addTuitionSubMenu.hide();
        bindEvents();
    }

    return {init};
})();