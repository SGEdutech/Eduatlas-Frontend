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

	async function getInstituteNames(uniqueUnknownSenderIdsObj) {
		try {
			let promiseArr = []
			const keysArr = Object.keys(uniqueUnknownSenderIdsObj);
			keysArr.forEach(senderId => {
				promiseArr.push(tuitionApiCalls.getSpecificTuition({ _id: senderId }));
			});

			const nameObjArr = await Promise.all(promiseArr);
			nameObjArr.forEach((nameObj, index) => {
				const key = keysArr[index];
				uniqueUnknownSenderIdsObj[key] = nameObj.name;
			})
			return uniqueUnknownSenderIdsObj;
		} catch (e) {
			console.error(e);
		}
	}

	async function putDateAndInstituteNameInNotifications() {
		try {
			let uniqueUnknownSenderIdsObj = {};
			distinctNotificationsArr.forEach(item => {
				const dateObj = helperScripts.getDateObj(item.createdAt);
				item.createdAt = dateObj.date + " " + dateObj.monthName;
				const tuitionInfo = distinctInstitutesArr.find(instituteObj => item.senderId === instituteObj.tuitionId)
				if (tuitionInfo) {
					item.instituteName = tuitionInfo.tuitionName
				} else {
					if (uniqueUnknownSenderIdsObj.senderId) {
						// senderId already added to obj hence do nothing
					} else {
						uniqueUnknownSenderIdsObj[item.senderId] = ''
					}
				}
			});
			uniqueUnknownSenderIdsObj = await getInstituteNames(uniqueUnknownSenderIdsObj);
			distinctNotificationsArr.forEach(notificationObj => {
				if (!notificationObj.instituteName) {
					notificationObj.instituteName = uniqueUnknownSenderIdsObj[notificationObj.senderId];
				}
			})
		} catch (e) {
			console.error(e);
		}
	}

	async function render() {
		try {
			if (distinctNotificationsArr.length === 0) {
				// nothing to show
				const context = { col4: false, title: "No Notifications" };
				$notificationContainer.html(template.noDataCard(context));
			} else {
				await putDateAndInstituteNameInNotifications();
				// FIXME: change order on backend
				distinctNotificationsArr.reverse();
				const notificationCardHTML = template.userNotification({ notifications: distinctNotificationsArr });
				$notificationContainer.html(notificationCardHTML);
				// update notifiaction number pill
				$notificationNumber.html(distinctNotificationsArr.length);
			}
		} catch (e) {
			console.error(e);
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