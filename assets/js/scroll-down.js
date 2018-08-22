const scrollToCaetegories = (() => {
	const $downArrowIcon = $('#scroll_down_btn');
	const $categoryHeader = $('#category_header');
	const $pageHeader = $('.page-header');
	const $htmlBody = $('html, body');

	function bindEvents() {
		$downArrowIcon.click(scrollBelowPageHeader);
	}

	function scrollBelowPageHeader() {
		const pageHeaderHeight = $pageHeader.height();
		$htmlBody.animate({scrollTop: pageHeaderHeight}, 1000);
	}

	function init() {
		bindEvents();
	}

	return { init };

})()