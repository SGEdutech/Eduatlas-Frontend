const resourses = (() => {
	let distinctResoursesArr;
	let $resoursesContainer;

	function cache() {
		$resoursesContainer = $('.resourses-container')
	}

	function render() {
		$resoursesContainer.each((__, container) => {
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
			const resoursesOfThisInstitute = distinctResoursesArr.filter(resourseObj => resourseObj.tuitionId === tuitionId);
			// console.log(resoursesOfThisInstitute);
			const resoursesHTML = template.resoursesCards({ resources: resoursesOfThisInstitute });
			// console.log(resoursesHTML);
			$container.html(resoursesHTML);
		});
	}

	function init(resourses) {
		if (resourses === undefined) throw new Error('Resourses not provided');
		distinctResoursesArr = JSON.parse(JSON.stringify(resourses));
		cache();
		render();
	}
	return { init };
})();