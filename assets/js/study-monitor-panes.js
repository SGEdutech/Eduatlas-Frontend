const pillsAndPanes = (() => {
	let batchesArr
	let $navPillsList;
	// let $panesContainer;
	let $tabContainer;

	function cache() {
		$navPillsList = $('#nav-pills-list');
		// $panesContainer = $('#batches_panes_container');
		$tabContainer = $('#tab-container');
	}

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

	function _convertToInstituteArr(batchesArr) {
		const uniqueTuitionIdsArr = [...new Set(batchesArr.map(item => item.tuitionId))];
		return uniqueTuitionIdsArr;
	}

	function render() {
		const uniqueInstitutesArr = getUniqueInstitutes(batchesArr);
		uniqueInstitutesArr.forEach((obj, index) => {
			const tabNumber = (index + 1) * 10;
			obj.tabNumber = tabNumber
			let shortName = obj.name;
			if (obj.name.length > 20) {
				shortName = obj.name.substr(0, 18) + '..';
			}
			$navPillsList.append(`<li class="nav-item">
			<a class="nav-link rounded-0 text-left dashboard-nav-pills" href="#tab${tabNumber}" data-toggle="tab">${shortName}</a>
			</li>`);

		})
		// const pillsHTML = template.institutePills({ tuitions: uniqueInstitutesArr });
		// $navPillsList.append(pillsHTML);

		const panesHTML = template.institutePanes({ tuitions: uniqueInstitutesArr });
		$tabContainer.append(panesHTML);
	}

	function init(batches) {
		batchesArr = JSON.parse(JSON.stringify(batches));
		cache();
		render();
		// cacheDynamic();
		// bindEvents();
	}

	return { init };
})();