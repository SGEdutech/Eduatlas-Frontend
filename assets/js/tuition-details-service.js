PubSub.subscribe('user', (msg, userInfo) => {
	navigationBar.render(userInfo);
	getInfo.updateUser(userInfo);
	claimModal.updateUserInfo(userInfo);
	reviews.updateUserInfo(userInfo);
	bookmark.updateUserInfo(userInfo);
});

async function initModules() {
	try {
        const queryObject = queryString.loadQueryString();
		const promiseArr = [];
		promiseArr.push(tuitionApiCalls.getSpecificTuition({ _id: queryObject._id }));

		const [tuitionInfo] =
		await Promise.all(promiseArr);

		getInfo.init(tuitionInfo, 'tuition');
		reportModal.updateTuitionInfo(queryObject);
		reviews.updateInstituteInfo(tuitionInfo);
		claimModal.updateQueryObj(queryObject);
		leadEmail.init(queryObject);
		leads.init(tuitionInfo);
	} catch (error) { console.error(error) }
}

initModules();

PubSub.subscribeOnce('address.ready', (msg, address) => {
	map.render(address, 'map')
});

PubSub.subscribeOnce('loginModal.load', (msg, nothing) => {
	reviews.init('tuition');
});

user.getInfo().then(userInfo => {
	navigationBar.init(userInfo);
	claimModal.updateUserInfo(userInfo);
	getInfo.updateUser(userInfo);
	reviews.updateUserInfo(userInfo);
	bookmark.updateUserInfo(userInfo);
});

loginModal.init();
claimModal.init('tuition');
reportModal.init();