PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
    tuitionInfo.updateClaimButtonModal(userInfo)
});

PubSub.subscribeOnce('query.load', (msg, obj) => {
    tuitionInfo.render(obj)
});

PubSub.subscribeOnce('address.ready', (msg, address) => {
    map.render(address, 'map')
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo);
    tuitionInfo.updateClaimButtonModal(userInfo)
});

loginModal.init();

queryString.returnQueryString();

