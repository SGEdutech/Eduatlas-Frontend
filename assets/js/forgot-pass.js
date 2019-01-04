const resetPass = (() => {
	let $landingContainer;
	let $form;
	let $successTextContainer;
	let $emailInp;

	async function requestEmail() {
		return $.post({ url: '/forgot/request-email', data: { email: $emailInp.val() } });
	}

	async function requestEmailAndRenderSuccess(event) {
		try {
			event.preventDefault();
			await requestEmail();
			$successTextContainer.removeClass('d-none');
			// FIXME: Problem in rendering
			// $landingContainer.addClass('d-none');
		} catch (error) {
			console.error(error);
		}
	}

	function cache() {
		$landingContainer = $('#landing_container');
		$form = $('#reset_pass_form');
		$successTextContainer = $('#success_text_container');
		$emailInp = $('#email_inp');
	}

	function bindEvents() {
		$form.submit(requestEmailAndRenderSuccess);
	}

	function init() {
		cache();
		bindEvents();
	}

	return { init };
})();

resetPass.init();
