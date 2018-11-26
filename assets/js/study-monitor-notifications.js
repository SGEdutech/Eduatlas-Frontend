const notifications = (() => {
	let distinctInstitutesArr;
	let distinctNotificationsArr;
	let $instituteNotificationContainer;

	function getUniqueInstitutes(batchArr) {
		if (Array.isArray(batchArr) === false) throw new Error('batchArr provided is not an array');
		const uniqueInstituteIds = {};
		const uniqueInstituteArr = [];
		for (const i in batchArr) {
			if (uniqueInstituteIds[batchArr[i].tuitionId] !== true) {
				uniqueInstituteArr.push({ name: batchArr[i].tuitionName, _id: batchArr[i].tuitionId });
				uniqueInstituteIds[batchArr[i].tuitionId] = true;
			}
		}
		return uniqueInstituteArr;
	}

	function cache() {
		$instituteNotificationContainer = $('.institute-notification-container');
	}

	function render() {
		$instituteNotificationContainer.each((__, container) => {
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
			const notificationsOfThisInstitute = distinctNotificationsArr.filter(notificationObj => notificationObj.senderId === tuitionId);
			notificationsOfThisInstitute.forEach(notificationsObj => {
				const dateObj = helperScripts.getDateObj(notificationsObj.createdAt);
				notificationsObj.createdAt = dateObj.date + " " + dateObj.monthName;
				notificationsObj.instituteName = distinctInstitutesArr.find(instituteObj => notificationsObj.senderId === instituteObj._id).name;
			});
			const forumCardsHTML = template.userNotification({ notifications: notificationsOfThisInstitute });
			$container.html(forumCardsHTML);
		});
	}

	function init(batches, notifications) {
		if (batches === undefined) throw new Error('Batches not provided');
		if (notifications === undefined) throw new Error('Notifications not provided');
		const batchesArr = JSON.parse(JSON.stringify(batches));
		distinctNotificationsArr = JSON.parse(JSON.stringify(notifications));
		distinctInstitutesArr = getUniqueInstitutes(batchesArr);

		cache();
		render();
	}
	return { init };
})();