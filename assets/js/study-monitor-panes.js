const pillsAndPanes = (() => {
	let distinctInstituteArr;
	let $navPillsList;
	// let $panesContainer;
	let $tabContainer;

	function cache() {
		$navPillsList = $('#nav-pills-list');
		// $panesContainer = $('#batches_panes_container');
		$tabContainer = $('#tab-container');
	}

	function _convertToInstituteArr(batchesArr) {
		const uniqueTuitionIdsArr = [...new Set(batchesArr.map(item => item.tuitionId))];
		return uniqueTuitionIdsArr;
	}

	function render() {
		distinctInstituteArr.forEach((obj, index) => {
			const tabNumber = (index + 1) * 10;
			obj.tabNumber = tabNumber
			let shortName = obj.tuitionName;
			if (obj.tuitionName.length > 20) {
				shortName = obj.tuitionName.substr(0, 18) + '..';
			}
			$navPillsList.append(`<li class="nav-item">
			<a class="nav-link rounded-0 text-left dashboard-nav-pills" href="#tab${tabNumber}" data-toggle="tab">${shortName}</a>
			</li>`);

		})
		// const pillsHTML = template.institutePills({ tuitions: uniqueInstitutesArr });
		// $navPillsList.append(pillsHTML);

		const panesHTML = template.institutePanes({ tuitions: distinctInstituteArr });
		$tabContainer.append(panesHTML);
	}

	function init(enrollInfo) {
		if (enrollInfo === undefined) throw new Error('enrollInfo not provided');
		distinctInstituteArr = JSON.parse(JSON.stringify(enrollInfo));
		cache();
		render();
		// cacheDynamic();
		// bindEvents();
	}

	return { init };
})();