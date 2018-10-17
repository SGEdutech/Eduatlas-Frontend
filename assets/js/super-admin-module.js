const superAdmin = (() => {
	let listingDataArr;
	let $signedByInp;
	let $fromDateInp;
	let $toDateInp;
	let $submitBtn;
	let $listingContainer;
	let $listingDeleteBtn;

	function submitRequest(queryObj) {
		// FIXME: Url
		const url = '/school/super-admin';
		return $.get({ url, data: queryObj });
	}

	function renderListing() {
		const html = template.superAdminTableColoum({ listings: listingDataArr });
		$listingContainer.html(html);
		cacheDynamic();
		bindDynamic();
	}

	function queryForm() {
		const signedBy = $signedByInp.val();
		const fromDate = new Date($fromDateInp.val());
		const toDate = new Date($toDateInp.val());
		return submitRequest({ signedBy, fromDate, toDate });
	}

	function adjustDate() {
		listingDataArr.forEach(listingObj => {
			const dateObj = new Date(Date.parse(listingObj.updated));
			listingObj.updated = dateObj.toDateString()
		});
	}

	function queryFormAndRenderListings() {
		queryForm().then(listings => {
			listingDataArr = listings;
			adjustDate();
			renderListing();
		}).catch(err => console.error(err))
	}

	function submitDeleteRequest(listingId) {
		const url = `/school/${listingId}`;
		return $.ajax({ url, type: 'DELETE' });
	}

	function deleteListing(event) {
		const $deleteBtn = $(event.target);
		const listingId = $deleteBtn.attr('data-listing-id')
		
		submitDeleteRequest(listingId).then(() => {
			listingDataArr = listingDataArr.filter(listingObj => listingObj._id !== listingId);
			renderListing();
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

	function init() {
		cache();
		bindEvents();
		cacheDynamic();
		bindDynamic();
	}

	return { init };
})();

superAdmin.init();
