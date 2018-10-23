const superAdmin = (() => {
	let listingDataArr = [];
	let $signedByInp;
	let $fromDateInp;
	let $toDateInp;
	let $submitBtn;
	let $listingContainer;
	let $listingDeleteBtn;
	let $selectedListing;

	const editPage = {
		tuition: 'user-edit-tuition.html',
		school: 'user-edit-school.html',
		event: 'user-edit-event.html'
	};

	const viewPage = {
		tuition: 'TuitionDetails2.0.html',
		school: 'SchoolDetails2.0.html',
		event: 'EventDetails2.0.html'
	};

	// These only ougth to be cached when user submits a request
	function cacheCheckedListing() {
		$selectedListing = $('input[name="listingCategory"]:checked');
	}

	function clearAllListings() {
		$listingContainer.html('');
	}

	function submitRequest(queryObj) {
		clearAllListings();
		cacheCheckedListing();
		// FIXME: Not Working
		if ($selectedListing.length === 0) {
			alert('Select listing category stupid!!');
			return new Promise((__, reject) => reject('No listing category selected!'));
		}
		const listingCategory = $selectedListing.val();
		const url = `/${listingCategory}/super-admin`;
		return $.get({ url, data: queryObj });
	}

	function adjustDate() {
		listingDataArr.forEach(listingObj => {
			// Events and tuition has field updatedOn and schools have updated
			listingObj.updated = listingObj.updated || listingObj.updatedOn;
			const dateObj = new Date(Date.parse(listingObj.updated));
			listingObj.updated = dateObj.toDateString()
		});
	}

	function injectEditAndViewPage() {
		const listingCategory = $selectedListing.val();
		listingDataArr.forEach(listingObj => {
			listingObj.editPage = editPage[listingCategory];
			listingObj.viewPage = viewPage[listingCategory];
		});
	}

	function render() {
		adjustDate();
		injectEditAndViewPage();
		const html = template.superAdminTableColoum({ listings: listingDataArr });
		$listingContainer.html(html);
	}

	function queryForm() {
		const signedBy = $signedByInp.val();
		const fromDate = new Date($fromDateInp.val());
		const toDate = new Date($toDateInp.val());
		return submitRequest({ signedBy, fromDate, toDate });
	}

	function queryFormAndRenderListings() {
		queryForm().then(listings => {
			listingDataArr = listings;
			refresh();
		}).catch(err => console.error(err))
	}

	function submitDeleteRequest(listingId, listingCategory) {
		const url = `/${listingCategory}/${listingId}`;
		console.log(url);
		return $.ajax({ url, type: 'DELETE' });
	}

	function deleteListing(event) {
		const $deleteBtn = $(event.target);
		const listingCategory = $selectedListing.val();
		const listingId = $deleteBtn.attr('data-listing-id')

		submitDeleteRequest(listingId, listingCategory).then(() => {
			listingDataArr = listingDataArr.filter(listingObj => listingObj._id !== listingId);
			refresh();
		}).catch(err => console.error(err));
	}

	function cache() {
		$signedByInp = $('#signed_by_inp');
		$fromDateInp = $('#from_date_inp');
		$toDateInp = $('#to_date_inp');
		$submitBtn = $('#search_btn');
		$listingContainer = $('#listing_container');
	}

	function bindEvents() {
		$submitBtn.click(queryFormAndRenderListings);
	}

	function cacheDynamic() {
		$listingDeleteBtn = $('.listing-delete-btn');
	}

	function bindDynamic() {
		$listingDeleteBtn.click(deleteListing);
	}

	function refresh() {
		adjustDate();
		render();
		cacheDynamic();
		bindDynamic();
	}

	function init() {
		cache();
		bindEvents();
	}

	return { init };
})();

superAdmin.init();
