const studyMonitor = (() => {
	let $batchesPillsContainer;
	let $batchesPanesContainer;

	function cache() {
        $batchesPillsContainer = $('#batches_pills_container');
        $batchesPanesContainer = $('#batches_panes_container');
	}

	function init() {
		cache();
		render();
		cacheDynamic();
		bindEvents();
	}

	return { init };
})();