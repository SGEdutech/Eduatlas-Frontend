PubSub.subscribe('user', (msg, userInfo) => {
	navigationBar.render(userInfo);
	bookmark.updateUserInfo(userInfo);
	searchModule.updateUser(userInfo);
});

PubSub.subscribe('user.login', (msg, userInfo) => {
	searchModule.updateUser(userInfo);
	bookmark.updateUserInfo(userInfo);
});

const queryObject = queryString.loadQueryString();
user.getInfo().then(userInfo => {
	navigationBar.init(userInfo, {
		colorOnScroll: false,
		activeElementId: 'tuition_nav'
	});
	searchModule.updateUser(userInfo);
	bookmark.updateUserInfo(userInfo);
	searchModule.init(queryObject);
});

PubSub.subscribe('searchCards.load', () => {
	bookmark.init();
});

loginModal.init();