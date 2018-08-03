PubSub.subscribe('user', (msg, userInfo) => {
    console.log(userInfo);
    navigationBar.render(userInfo);
    tuitionInfo.updateUser(userInfo);
    claimModal.updateUserInfo(userInfo);
    reviews.updateUserInfo(userInfo);
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
    tuitionInfo.render(queryObject);
    reportModal.updateTuitionInfo(queryObject);
    reviews.updateTuitionInfo(queryObject);
});

PubSub.subscribeOnce('address.ready', (msg, address) => {
    map.render(address, 'map')
});

PubSub.subscribeOnce('loginModal.load', (msg, nothing) => {
    reviews.init();
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo);
    claimModal.updateUserInfo(userInfo);
    tuitionInfo.updateUser(userInfo);
    reviews.updateUserInfo(userInfo);
});

loginModal.init();
claimModal.init();
reportModal.init();

queryString.returnQueryString();

