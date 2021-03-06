const notificationApiCalls = (() => {
	const validArrayNames = {
		receivers: true,
	};
	const checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");

	function getUserNotifications() {
		return $.ajax({
			type: "GET",
			url: `/notification/user-notification`,
		});
	}

	function putNewNotification(idOfSender, message, receiversArr, batchId = null, instituteId = null) {
		if (!checkForHexRegExp.test(idOfSender)) {
			console.error("Not a valid idOfSender");
		}
		if (receiversArr) {
			if (receiversArr.length === 0) {
				console.error("receiversArr empty");
			}
		}
		return $.ajax({
			type: "POST",
			url: `/notification`,
			data: {
				senderId: idOfSender,
				message: message,
				receivers: receiversArr,
				batchId: batchId,
				instituteId : instituteId,
			},
		});
	}

	function markNotificationsAsRead(idsArr) {
		if (idsArr) {
			if (idsArr.length === 0) {
				console.error("idsArr empty");
			}
		}
		return $.ajax({
			type: "PUT",
			url: `/notification/user-read`,
			data: {
				ids: idsArr,
			},
		});
	}


	return {
		getUserNotifications,
		putNewNotification,
		markNotificationsAsRead
	};
})();