const resetPassword = (() => {
	let token;
	let $landingContainer;
	let $successTextContainer;
	let $form;
	let $firstPasswordInp;
	let $secondPasswordInp;

	function sendNewPassword(password) {
		if (token === undefined) throw new Error('Module has not been initialized properly');
		if (password === undefined) throw new Error('Password must be provided');
		return $.post({ url: '/forgot/change-password', data: { token, password } })
	}

	function arePasswordsSame() {
		return $firstPasswordInp.val() === $secondPasswordInp.val();
	}

	async function sendNewPasswordAndShowMessage(event) {
		try {
			event.preventDefault();
			if (arePasswordsSame() === false) {
				alert('Passwords that you have entered does not match');
				return;
			}
			const res = await sendNewPassword($firstPasswordInp.val());
			if (res.done === false) {
				alert(res.message);
				return;
			}
			$landingContainer.addClass('d-none');
			$successTextContainer.removeClass('d-none');
		} catch (error) {
			console.error(error);
		}
	}

	function cache() {
		$landingContainer = $('#landing_container');
		$successTextContainer = $('#success_text_container');
		$form = $('#reset_form');
		$firstPasswordInp = $('#password_inp_1');
		$secondPasswordInp = $('#password_inp_2');
	}

	function bindEvents() {
		$form.submit(sendNewPasswordAndShowMessage);
	}

	function init() {
		const url = location.href;
		token = url.substring(url.indexOf('?') + 1);
		cache();
		bindEvents();
	}

	return { init };
})();

resetPassword.init();
