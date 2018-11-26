const fee = (() => {
	let paymentsArr;
	let $feeReportContainer;

	function fixDateFormatAndCalculateFee(studentInfoArr) {
		studentInfoArr.forEach(paymentObj => {
			if (paymentObj.nextInstallmentDate) {
				paymentObj.nextInstallmentDate = moment(paymentObj.nextInstallmentDate).format("MMM Do");
			}
			if (paymentObj.discountAmount && paymentObj.courseFee) {
				paymentObj.netFee = paymentObj.courseFee - paymentObj.discountAmount;
			}
			let totalFeeCollected = 0
			paymentObj.installments.forEach(installmentObj => {
				if (installmentObj.feeCollected) {
					totalFeeCollected += installmentObj.feeCollected;
				}
				if (installmentObj.nextInstallment) {
					installmentObj.nextInstallment = moment(installmentObj.nextInstallment).format("MMM Do");
				}
				if (installmentObj.dateOfCheque) {
					installmentObj.dateOfCheque = moment(installmentObj.dateOfCheque).format("MMM Do");
				}
			})
			if (paymentObj.discountAmount && paymentObj.courseFee) {
				paymentObj.pendingBalance = paymentObj.netFee - totalFeeCollected;
			}
		})
	}

	function cache() {
		$feeReportContainer = $('.fee-report-container');
	}

	function render() {
		$feeReportContainer.each((__, container) => {
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
			const paymnetsOfThisInstitute = paymentsArr.filter(paymentObj => paymentObj.tuitionId === tuitionId);
			fixDateFormatAndCalculateFee(paymnetsOfThisInstitute)
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