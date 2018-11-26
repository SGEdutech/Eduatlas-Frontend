const leadEmail = (() => {
	let currentPageInfo;
	let $leadMailForm;
	let $leadMailModal;

	function sendLeadMail(e) {
		e.preventDefault();
		const $form = $(event.currentTarget);
		tuitionApiCalls.sendLeadMail(currentPageInfo._id, $form.serialize());
		$leadMailModal.modal('hide');
		$form.trigger('reset');
		alert('Your message have been successfully sent.');
	}

	function cache() {
		$leadMailForm = $('#lead_mail_form');
		$leadMailModal = $('#lead_mail_modal');
	}

	function bindEvents() {
		$leadMailForm.submit(sendLeadMail);
	}

	function init(queryObj) {
		if (queryObj === undefined) throw new Error('queryObj array not defined');
		currentPageInfo = JSON.parse(JSON.stringify(queryObj));
		cache();
		bindEvents()
	}
	return { init };
})();