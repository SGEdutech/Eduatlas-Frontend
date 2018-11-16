PubSub.subscribe('user', (msg, userInfo) => {
	navigationBar.render(userInfo);
	rspvModal.updateUser(userInfo);
});

PubSub.subscribeOnce('address.ready', (msg, address) => {
	map.render(address, 'map')
});

const queryObject = queryString.loadQueryString();
getEvent.render(queryObject);
rspvModal.init(queryObject);

user.getInfo().then(userInfo => {
	navigationBar.init(userInfo);
	rspvModal.updateUser(userInfo);
});

loginModal.init();