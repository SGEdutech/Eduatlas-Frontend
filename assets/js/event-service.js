PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
});

PubSub.subscribeOnce('address.ready', (msg, address) => {
    map.render(address, 'map')
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
    getEvent.render(queryObject);
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo);
});

loginModal.init();
rspvModal.init();

queryString.loadQueryString();