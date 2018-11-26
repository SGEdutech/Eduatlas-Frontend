const userNotification = (() => {
	let distinctInstitutesArr;
	let distinctNotificationsArr;
	let $notificationContainer;
	let $notificationNumber;
	let $notificationUpdateForm;
	let $notificationReadTrigger;

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
			// notifications to show 
			distinctNotificationsArr.forEach(item => {
				const dateObj = helperScripts.getDateObj(item.createdAt);
				item.createdAt = dateObj.date + " " + dateObj.monthName;
				item.instituteName = distinctInstitutesArr.find(instituteObj => item.senderId === instituteObj._id).name;
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

	function init(batches, notifications) {
		if (batches === undefined) throw new Error('Batches not provided');
		if (notifications === undefined) throw new Error('Notifications not provided');
		const batchesArr = JSON.parse(JSON.stringify(batches));
		distinctNotificationsArr = JSON.parse(JSON.stringify(notifications));
		distinctInstitutesArr = getUniqueInstitutes(batchesArr);

		cache();
		render();
		bindEvents();
	}

	return { init };
})();