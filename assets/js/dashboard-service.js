PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
    redirectOnLogout.init(userInfo);
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
    redirectTabs.init(queryObject);
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo, {
        colorOnScroll: false
    });
    userImgAndName.init(userInfo);
    dashboardBookmarks.init(userInfo);
    dashboardReviews.init(userInfo);
    dashboardEditProfile.init(userInfo);
});
queryString.loadQueryString();