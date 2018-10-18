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

	function render() {
		const splitObj = splitVariousArray(schedulesArr, 'batchId');
		const keysArrOfSplitObj = Object.keys(splitObj);
		let attendaceCardsHTML = '';

		keysArrOfSplitObj.forEach(key => {
			let numberOfPresents = 0;
			splitObj[key].forEach(scheduleObj => {
				if (scheduleObj.isAbsent === false) numberOfPresents++;
			});
			const attendencePercentage = (numberOfPresents / splitObj[key].length) * 100;
			attendaceCardsHTML += template.attendanceCards({ schedules: splitObj[key], attendencePercentage });
		});
		$attendanceContainer.html(attendaceCardsHTML);
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
