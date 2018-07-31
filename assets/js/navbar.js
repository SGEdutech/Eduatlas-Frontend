const navigationBar = (() => {
    const $navContainer = $('#nav_container');
    let $logOutBtn;
    let $addTuitionBtn;
    let $dynamicUserBtn;
    let user;

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
        if (user) $logOutBtn.click(scripts.logout);
    }

    function render() {
        getHtml().then(navHtml => {
            $navContainer.html(navHtml);
            PubSub.publish('nav.load');
            cacheDynamicDom();
            updateUserStatus();
            cacheDynamicDom();
            bindEvents();
            updateAddTuitionLink();
        }).catch(err => reject(err));
    }

    PubSub.subscribeOnce('user.load', (msg, userInfo) => {
        user = userInfo; // Returns a empty string when not logged in
        render();
    });

    PubSub.subscribe('user.logout', () => {
        user = '';
        render();
    });

    PubSub.subscribe('user.login', (msg, userInfo) => {
        console.log('hi');
        user = userInfo;
        render();
    })
})();