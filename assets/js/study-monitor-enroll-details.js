const enrollmentDetails = (() => {
	let distinctEnrollmentsArr;
	let $enrollmentDetailsContainer;

	function cache() {
		$enrollmentDetailsContainer = $('.enrollment-details-container')
	}

	function render() {
		$enrollmentDetailsContainer.each((__, container) => {
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
            const enrollDetailsOfThisInstitute = distinctEnrollmentsArr.find(enrollInfoObj => enrollInfoObj.tuitionId === tuitionId);
            console.log(enrollDetailsOfThisInstitute);
			const enrollmentDetailsHTML = template.enrollmentDetails(enrollDetailsOfThisInstitute);
			$container.html(enrollmentDetailsHTML);
		});
	}

	function init(enrollmentDetails) {
		if (enrollmentDetails === undefined) throw new Error('EnrollmentDetails not provided');
		distinctEnrollmentsArr = JSON.parse(JSON.stringify(enrollmentDetails));
		console.log(distinctEnrollmentsArr);

		cache();
		render();
	}
	return { init };
})();