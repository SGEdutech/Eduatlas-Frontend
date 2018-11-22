const fee = (() => {
	let paymentsArr;
	let $feeReportContainer;

	function cache() {
		$feeReportContainer = $('.fee-report-container');
	}

	function render() {
		$feeReportContainer.each((__, container) => {
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
			const paymnetsOfThisInstitute = paymentsArr.filter(paymentObj => paymentObj.tuitionId === tuitionId);
			console.log(paymnetsOfThisInstitute);
			const feeCardsHTML = template.feeCards({ payments: paymnetsOfThisInstitute });
			$container.html(feeCardsHTML)
		});
	}

	function init(payments) {
		if (payments === undefined) throw new Error('PaymentsArr not provided');
		paymentsArr = JSON.parse(JSON.stringify(payments));
		cache();
		render();
	}

	return { init };
})();