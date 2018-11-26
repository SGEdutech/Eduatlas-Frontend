PubSub.subscribe('user', (msg, userInfo) => {
	navigationBar.render(userInfo);
	redirectOnLogout.init(userInfo);
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
	redirectTabs.init(queryObject);
});

Handlebars.registerHelper('inc', function(value, options) {
	return parseInt(value) + 1;
});

user.getInfo().then(userInfo => {
	navigationBar.init(userInfo, {
		colorOnScroll: false
	});
	userImgAndName.init(userInfo);
	dashboardBookmarks.init(userInfo);
	// dashboardReviews.init(userInfo);
	dashboardEditProfile.init(userInfo);
});

async function initModules() {
	try {
		const promiseArr = [];
		// promiseArr.push(userApiCalls.getAllSMBatches());
		promiseArr.push(userApiCalls.getAllSMForums());
		promiseArr.push(userApiCalls.getAllSMSchedules());
		promiseArr.push(userApiCalls.getAllSMPayments());
		promiseArr.push(userApiCalls.getAllSMRegistrationInfo());
		promiseArr.push(notificationApiCalls.getUserNotifications());

		const [forums, schedules, payments, registrationInfo, notificationsArr] =
		await Promise.all(promiseArr);


		userNotification.init(registrationInfo, notificationsArr);

		pillsAndPanes.init(registrationInfo);
		forum.init(forums);
		attendance.init(schedules);
		triggerPills.init();
		fee.init(payments);
		notifications.init(registrationInfo, notificationsArr);
		enrollmentDetails.init(registrationInfo);
	} catch (err) { console.error(err); }
}

initModules();

queryString.loadQueryString();