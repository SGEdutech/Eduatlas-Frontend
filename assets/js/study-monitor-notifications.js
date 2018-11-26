const notifications = (() => {
	let distinctInstitutesArr;
	let distinctNotificationsArr;
	let $instituteNotificationContainer;

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
				notificationsObj.instituteName = distinctInstitutesArr.find(instituteObj => notificationsObj.senderId === instituteObj.tuitionId).tuitionName;
			});
			notificationsOfThisInstitute.reverse();
			const notificationCardsHTML = template.userNotification({ notifications: notificationsOfThisInstitute });
			$container.html(notificationCardsHTML);
		});
	}

	function init(enrollmentDetails, notifications) {
		if (enrollmentDetails === undefined) throw new Error('enrollmentDetails not provided');
		if (notifications === undefined) throw new Error('Notifications not provided');
		distinctInstitutesArr = JSON.parse(JSON.stringify(enrollmentDetails));
		distinctNotificationsArr = JSON.parse(JSON.stringify(notifications));

		cache();
		render();
	}
	return { init };
})();