const navigationBar = (() => {
    let $navContainer;
    let $logOutBtn;
    let $addTuitionBtn;
    let $dynamicUserBtn;
    let user;

    function cacheDom() {
        $navContainer = $('#nav_container');
    }

    // TODO: Further Optimise
    function cacheDynamicDom() {
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

    function getHtml() {
        const url = 'nav.html';
        const dataType = 'html';
        return $.get({url, dataType}); // Returns Promise
    }

    function bindEvents() {
        if (user) $logOutBtn.click(helperScripts.logout);
    }

    function render(userInfo) {
        user = userInfo;
        getHtml().then(navHtml => {
            $navContainer.html(navHtml);
            cacheDynamicDom();
            updateUserStatus();
            cacheDynamicDom();
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