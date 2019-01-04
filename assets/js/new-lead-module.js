const leads = (() => {
	let tuitionId;
	let tuitionName;
	let $leadModal;
    let $addLeadForm;
    let $leadModalTitle

	async function submitLeadForm(event) {
		try {
			event.preventDefault();
            const $form = $(event.currentTarget);
			const generatedLead = await tuitionApiCalls.putLeadsInTuition(tuitionId, $form.serialize());
			$leadModal.modal('hide');
			alert(`Your message has been received by ${tuitionName}.`)
		} catch (e) {
			console.error(e);
		}
	}

	function initLeadModal() {
		$addLeadForm.trigger('reset');
        $leadModal.modal('show');
    }
    
    function setModalName() {
        $leadModalTitle.html(`Help ${tuitionName} reach you`);
    }

	function cache() {
		$leadModal = $('#lead_generator_modal');
        $addLeadForm = $('#add_lead_form');
        $leadModalTitle = $('#lead_modal_title');
	}

	function bindEvents() {
		setTimeout(initLeadModal, 10000);
		$addLeadForm.submit(submitLeadForm)
	}

	function init(tuitionInfo) {
		if (!tuitionInfo) throw new Error('TuitionInfo received undefined');
		if (!tuitionInfo._id) throw new Error('TuitionInfo dont have id');
		tuitionId = tuitionInfo._id;
        tuitionName = tuitionInfo.name;
		cache();
		bindEvents();
        setModalName();
	}
	return { init };
})();