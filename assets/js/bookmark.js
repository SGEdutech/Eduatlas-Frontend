const bookmark = (() => {
	let userInfo;
	let $loginModal;
	let $bookmarkButtons;

	function bindEvents() {
		$bookmarkButtons.click(saveBookmark)
	}

	function cacheDynamicDom() {
		$loginModal = $('#loginModal');
		$bookmarkButtons = $('.bookmark-button')
	}

	function updateUserInfo(info) {
		userInfo = info;
	}

	function saveBookmark() {
		if (!userInfo) {
			$loginModal.modal('show');
		} else {
			let instituteId = $(this).attr('data-id');
			let typeOfInfo = $(this).attr('data-category');
			let ifBookmarked = $(this).attr('data-bookmarked');
			ifBookmarked = ifBookmarked == "true";

			if (ifBookmarked) {
				console.log("already bookmarked");
				//do nothing
				$(this).find('.material-icons').html('bookmark_border');
				$(this).attr('data-bookmarked', 'false');
				typeOfInfo = typeOfInfo.toLowerCase();

				if (typeOfInfo === "tuition") {
					userApiCalls.deleteInArrayInUser(userInfo._id, "bookmarkTuitions", {
						string: instituteId
					}).then(()=> alert("bookmark removed")).catch(err => console.error(err))
				} else if (typeOfInfo === "school") {
					userApiCalls.deleteInArrayInUser(userInfo._id, "bookmarkSchools", {
						string: instituteId
					}).then(()=> alert("bookmark removed")).catch(err => console.error(err))
				} else {
					userApiCalls.deleteInArrayInUser(userInfo._id, "bookmarkEvents", {
						string: instituteId
					}).then(()=> alert("bookmark removed")).catch(err => console.error(err))
				}
			} else {
				console.log("not bookmarked");
				$(this).find('.material-icons').html('bookmark');
				$(this).attr('data-bookmarked', 'true');
				// make first character Upper-Case
				typeOfInfo = typeOfInfo.toLowerCase();
				if (typeOfInfo === "tuition") {
					userApiCalls.putInArrayInUser(userInfo._id, "bookmarkTuitions", {
						string: instituteId
					}).then(()=> alert("bookmark added")).catch(err => console.error(err))
				} else if (typeOfInfo === "school") {
					userApiCalls.putInArrayInUser(userInfo._id, "bookmarkSchools", {
						string: instituteId
					}).then(()=> alert("bookmark added")).catch(err => console.error(err))
				} else if (typeOfInfo === "event") {
					userApiCalls.putInArrayInUser(userInfo._id, "bookmarkEvents", {
						string: instituteId
					}).then(()=> alert("bookmark added")).catch(err => console.error(err))
				}
			}
		}
	}

	function init() {
		cacheDynamicDom();
		bindEvents();
	}

	return {
		init,
		updateUserInfo
	};
})();