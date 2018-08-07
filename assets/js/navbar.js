const navigationBar = (() => {
    let $navContainer;
    let $logOutBtn;
    let $addTuitionBtn;
    let $dynamicUserBtn;
    let $document;
    let user;
    let $navbar;
    let isTransperent;

    function cacheDom() {
        $document = $(document);
        $navContainer = $('#nav_container');
    }

    // TODO: Further Optimise
    function cacheDynamicDom() {
        $navbar = $('#navigation_bar');
        $logOutBtn = $navContainer.find('#log_out_btn');
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

    function checkAndChangeNavColor() {
        if ($document.scrollTop() < 100) {
            if (isTransperent === false) {
                $navbar.addClass('navbar-transparent');
                isTransperent = true;
            }
        } else {
            if (isTransperent === true) {
                $navbar.removeClass('navbar-transparent');
                isTransperent = false;
            }
        }
    }

    function getHtml() {
        const url = 'nav.html';
        const dataType = 'html';
        return $.get({url, dataType}); // Returns Promise
    }

    function bindEvents() {
        if (user) $logOutBtn.click(helperScripts.logout);
        $document.scroll(checkAndChangeNavColor);
    }

    function render(userInfo) {
        user = userInfo;
        getHtml().then(navHtml => {
            $navContainer.html(navHtml);
            cacheDynamicDom();
            updateUserStatus();
            cacheDynamicDom();
            isTransperent = $navbar.hasClass('navbar-transparent');
            bindEvents();
            updateAddTuitionLink();
        }).catch(err => reject(err));
    }

    function init(userInfo) {
        cacheDom();
        render(userInfo);
    }

    return {init, render};
})();