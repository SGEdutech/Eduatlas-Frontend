//FIXME: Variables name
const attendance = (() => {
	let schedulesArr;
	let $attendanceContainer;

	function cache() {
		$attendanceContainer = $('.attendace-container');
	}

	function appendIsAbsent() {
		schedulesArr.forEach(scheduleObj => scheduleObj.isAbsent = scheduleObj.studentsAbsent.indexOf(scheduleObj.studentId) !== -1);
	}

	function splitVariousArray(arr, prop) {
		// splits array of objects on basis of a KEY of object
		const grouped = {};
		for (let i = 0; i < arr.length; i++) {
			const p = arr[i][prop];
			if (!grouped[p]) { grouped[p] = []; }
			grouped[p].push(arr[i]);
		}
		return grouped;
	}

	function sortByDate(arr) {
		arr.sort((a, b) => {
			if (moment(a.date) > moment(b.date)) {
				return -1;
			} else if (moment(a.date) < moment(b.date)) {
				return 1;
			} else {
				// date same , now campare with start time
				if (a.fromTime > b.fromTime) {
					return -1;
				} else {
					return 1;
				}
			}
		})
	}

	function getHTML(splitObj, keysArrOfSplitObj) {
		// FIXME: decrease complexity
		// returns html arranged in objects on basis of groupID

		let htmlObj = {};
		// let attendaceCardsHTML = '';

		keysArrOfSplitObj.forEach(key => {
			sortByDate(splitObj[key]);
			let numberOfPresents = 0;
			let numberOfScheduled = 0;
			splitObj[key].forEach(scheduleObj => {
				const scheduleIsOld = moment(scheduleObj.date).isBefore(moment(Date.now()));
				if (scheduleIsOld) {
					if (scheduleObj.isAbsent === false) numberOfPresents++;
				} else {
					numberOfScheduled++;
					scheduleObj.yetToCome = true;
				}
			});
			let attendencePercentage = (numberOfPresents / (splitObj[key].length - numberOfScheduled)) * 100;
			attendencePercentage = attendencePercentage.toFixed(2);
			splitObj[key].forEach(scheduleObj => {
				if (scheduleObj.date) {
					scheduleObj.date = moment(scheduleObj.date).format('MMM Do');
				}
			})
			htmlObj[key] = template.attendanceCards({ schedules: splitObj[key], attendencePercentage });
		});
		return htmlObj;
	}

	function render() {
		const splitObj = splitVariousArray(schedulesArr, 'batchId');
		const keysArrOfSplitObj = Object.keys(splitObj);
		let attendaceCardsHTMLObj = getHTML(splitObj, keysArrOfSplitObj);

		$attendanceContainer.each((__, container) => {
			let attendanceCardsHTML = '';
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
			keysArrOfSplitObj.forEach(batchKey => {
				if (splitObj[batchKey][0].tuitionId === tuitionId) {
					attendanceCardsHTML += attendaceCardsHTMLObj[batchKey];
				}
			});
			$container.html(attendanceCardsHTML)
		});
	}

	function init(schedules) {
		if (schedules === undefined) throw new Error('Forums not provided');
		schedulesArr = JSON.parse(JSON.stringify(schedules));
		appendIsAbsent();
		cache();
		render();
	}

	return { init };
})();