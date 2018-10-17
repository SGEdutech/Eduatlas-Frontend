const pillsAndPanes = (() => {
	let batchesArr
	let $pillsContainer;
	let $panesContainer;

	function cache() {
		$pillsContainer = $('#batches_pills_container');
		$panesContainer = $('#batches_panes_container');
	}

	function render(tuitionsArr) {
		const pillsHTML = template.institutePills(tuitionsArr);
		$pillsContainer.html(pillsHTML);

		const panesHTML = template.institutePills(tuitionsArr);
		$panesContainer.html(panesHTML);
	}

	function init(batches) {
		batchesArr = batches;
		cache();
		render();
		cacheDynamic();
		bindEvents();
	}

	return { init };
})();
