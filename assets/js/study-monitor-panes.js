const pillsAndPanes = (() => {
	let batchesArr
	let $pillsContainer;
	let $panesContainer;

	function cache() {
		$pillsContainer = $('#batches_pills_container');
		$panesContainer = $('#batches_panes_container');
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

	function render(tuitionsArr) {
		const uniqueInstitutesArr = getUniqueInstitutes(batchesArr);
		const pillsHTML = template.institutePills({ tuitions: uniqueInstitutesArr });
		$pillsContainer.html(pillsHTML);

		const panesHTML = template.institutePanes({ tuitions: uniqueInstitutesArr });
		$panesContainer.html(panesHTML);
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
