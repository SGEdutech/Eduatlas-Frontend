PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
    bookmark.updateUserInfo(userInfo);
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
    searchModule.render(queryObject);
});

PubSub.subscribe('searchCards.load', (msg, nothing) => {
    bookmark.init();
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo, {
        colorOnScroll: false,
        activeElementId: 'tuition_nav'
    });
    bookmark.updateUserInfo(userInfo);
});

loginModal.init();

queryString.returnQueryString();

