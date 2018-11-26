const userNotification = (() => {
	let distinctInstitutesArr;
	let distinctNotificationsArr;
	let $notificationContainer;
	let $notificationNumber;
	let $notificationUpdateForm;
	let $notificationReadTrigger;

	function cache() {
		$notificationContainer = $('#notification-container');
		$notificationNumber = $('#notification-number');
		$notificationUpdateForm = $('#notification-update-form');
		$notificationReadTrigger = $('#notification-read-trigger')
	}

	function bindEvents() {
		$notificationReadTrigger.click(function(e) {
			// e.preventDefault();
			markAsRead();
		});
	}

	function render() {
		if (distinctNotificationsArr.length === 0) {
			// nothing to show
			const context = { col4: false, title: "No Notifications" };
			$notificationContainer.html(template.noDataCard(context));
		} else {
			distinctNotificationsArr.forEach(item => {
				const dateObj = helperScripts.getDateObj(item.createdAt);
				item.createdAt = dateObj.date + " " + dateObj.monthName;
				item.instituteName = distinctInstitutesArr.find(instituteObj => item.senderId === instituteObj.tuitionId).tuitionName;
			})
			const notificationCardHTML = template.userNotification({ notifications: distinctNotificationsArr });
			$notificationContainer.html(notificationCardHTML);
			// update notifiaction number pill
			$notificationNumber.html(distinctNotificationsArr.length);
		}
	}

	function markAsRead() {
		const serializedArrayForm = $notificationUpdateForm.serializeArray();
		let idsArr = [];
		serializedArrayForm.forEach(obj => {
			if (obj.name === "ids") {
				idsArr.push(obj.value);
			}
		})
		notificationApiCalls.markNotificationsAsRead(idsArr).then(data => {
			// console.log("all notifiactions updated successfully");
		}).catch(err => console.error(err))
	}

	function init(enrollInfo, notifications) {
		if (enrollInfo === undefined) throw new Error('enrollInfo not provided');
		if (notifications === undefined) throw new Error('Notifications not provided');
		distinctInstitutesArr = JSON.parse(JSON.stringify(enrollInfo));
		distinctNotificationsArr = JSON.parse(JSON.stringify(notifications));

		cache();
		render();
		bindEvents();
	}

	return { init };
})();