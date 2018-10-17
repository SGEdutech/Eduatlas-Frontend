const superAdmin = (() => {
	let $signedByInp;
	let $fromDateInp;
	let $toDateInp;
	let $submitBtn;
	let $listingContainer;

	function submitRequest(queryObj) {
		// FIXME: Url
		const url = '/school/super-admin';
		return $.get({ url, data: queryObj });
	}

	function renderListing(listingDataArr) {
		let name;
		let signedBy;
		let updated;
		let _id;
		let html = '';
		listingDataArr.forEach(data => {
			name = data.name;
			signedBy = data.signedBy;
			const dateObj = new Date(Date.parse(data.updated));
			updated = dateObj.toDateString();
			_id = data._id;
			const template = `
			<tr>
				<td class="text-center">1</td>
				<td>${name}</td>
				<td>${signedBy}</td>
				<td>${updated}</td>
				<td class="td-actions text-right">
					<a href="https://eduatlas.com/SchoolDetails2.0.html?_id=${_id}" type="button" rel="tooltip" class="btn btn-info">
						<i class="material-icons">person</i>
					</a>
					<a type="button" rel="tooltip" class="btn btn-success">
						<i class="material-icons">edit</i>
					</a>
					<a type="button" rel="tooltip" class="btn btn-danger">
						<i class="material-icons">close</i>
					</a>
				</td>
			</tr>
		`;
			html += template;
		});
		$listingContainer.html(html);
	}

	function queryForm() {
		const signedBy = $signedByInp.val();
		const fromDate = new Date($fromDateInp.val());
		const toDate = new Date($toDateInp.val());
		return submitRequest({ signedBy, fromDate, toDate });
	}

	function queryFormAndRenderListings() {
		queryForm().then(data => renderListing(data)).catch(err => console.error(err))
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

	function init() {
		cache();
		bindEvents();
		render();
		cacheDynamic();
		bindDynamic();
	}

	return { init };
})();

superAdmin.init();
