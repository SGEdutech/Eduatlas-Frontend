const reviews = (() => {
	let reviewsObj;
	let $userTuitionReviewsContainer;
	let $userSchoolReviewsContainer;
	let $deleteReviewButton;
	let $editReviewButton;
	let $editReviewModal;
	let $editForm;
	let $editFormBodyContainer;
	let $editFormRatingInp;
	let $editFormDescriptionInp;

	function initEditReviewModal() {
		const $btn = $(event.currentTarget);
		let tuitionId = $btn.attr('data-tuition-id');
		let reviewId = $btn.attr('data-review-id');
		let category = $btn.attr('data-category');
		$editForm.attr('data-tuition-id', tuitionId);
		$editForm.attr('data-review-id', reviewId);
		$editForm.attr('data-category', category);

		if (category === 'tuition') {
			const reviewInfo = reviewsObj.tuitionReviews.find(reviewsObj => reviewsObj._id === reviewId);
			const formBodyHTML = template.editReviewModalBody(reviewInfo);
			$editFormBodyContainer.html(formBodyHTML);
		}
		if (category === 'school') {
			const reviewInfo = reviewsObj.schoolReviews.find(reviewsObj => reviewsObj._id === reviewId);
			const formBodyHTML = template.editReviewModalBody(reviewInfo);
			$editFormBodyContainer.html(formBodyHTML);
		}
		cacheModalInputs();
		$editReviewModal.modal('show');
	}

	function cache() {
		$userTuitionReviewsContainer = $("#userTuitionReviews");
		$userSchoolReviewsContainer = $("#userSchoolReviews");
		$editReviewModal = $('#edit_review_modal');
		$editForm = $('#edit_review_form')
		$editFormBodyContainer = $('#edit_review_body_container')
	}

	function bindEvents() {
		$editForm.submit(editReview);
	}

	function cacheDynamic() {
		$deleteReviewButton = $(".delete-review-button");
		$editReviewButton = $(".edit-review-button");
	}

	function cacheModalInputs() {
		$editFormRatingInp = $('#edit_review_rating_inp');
		$editFormDescriptionInp = $('#edit_review_desc_inp');
	}

	function bindDynamicEvents() {
		$deleteReviewButton.click(deleteReview);
		$editReviewButton.click(initEditReviewModal);
	}

	async function deleteReview(event) {
		try {
			const $btn = $(event.currentTarget);
			let tuitionId = $btn.attr('data-tuition-id');
			let reviewId = $btn.attr('data-review-id');
			let category = $btn.attr('data-category');

			if (category === 'tuition') {
				const deletedReview = await tuitionApiCalls.deleteReviewInTuition(tuitionId, reviewId);
				reviewsObj.tuitionReviews = reviewsObj.tuitionReviews.filter(reviewsObj => reviewsObj._id !== reviewId);
			}
			if (category === 'school') {
				const deletedReview = await schoolApiCalls.deleteReviewInSchool(tuitionId, reviewId);
				reviewsObj.schoolReviews = reviewsObj.schoolReviews.filter(reviewsObj => reviewsObj._id !== reviewId);
			}
			refresh();
		} catch (e) {
			console.error(e);
		}
	}

	async function editReview(event) {
		try {
			event.preventDefault();
			const $form = $(event.currentTarget);
			let tuitionId = $form.attr('data-tuition-id');
			let reviewId = $form.attr('data-review-id');
			let category = $form.attr('data-category');

			if (category === 'tuition') {
				const editedReview = await tuitionApiCalls.updateReviewInTuition(tuitionId, reviewId, $form.serialize());
				const previousReview = reviewsObj.tuitionReviews.find(reviewsObj => reviewsObj._id === reviewId);
				previousReview.rating = $editFormRatingInp.val();
				previousReview.description = $editFormDescriptionInp.val();
			}
			if (category === 'school') {
				const editedReview = await schoolApiCalls.updateReviewInSchool(tuitionId, reviewId, $form.serialize());
				const previousReview = reviewsObj.schoolReviews.find(reviewsObj => reviewsObj._id === reviewId);
				previousReview.rating = $editFormRatingInp.val();
				previousReview.description = $editFormDescriptionInp.val();
			}
			refresh();
			$editReviewModal.modal('hide');
		} catch (e) {
			console.error(e);
		}

	}

	function render() {
		// insert category
		reviewsObj.tuitionReviews.forEach(reviewsObj => reviewsObj.category = 'tuition');
		const tuitionReviewsHTML = template.dashboardReviews({ reviews: reviewsObj.tuitionReviews });
		$userTuitionReviewsContainer.html(tuitionReviewsHTML);

		// insert category
		reviewsObj.schoolReviews.forEach(reviewsObj => reviewsObj.category = 'school');
		const schoolReviewsHTML = template.dashboardReviews({ reviews: reviewsObj.schoolReviews });
		$userSchoolReviewsContainer.html(schoolReviewsHTML);
	}

	function refresh() {
		render();
		cacheDynamic();
		bindDynamicEvents();
	}

	function init(reviews) {
		if (reviews === undefined) throw new Error('Reviews not provided');
		reviewsObj = JSON.parse(JSON.stringify(reviews));
		if (reviews.tuitionReviews === undefined) throw new Error('Tuition Reviews not provided');
		if (reviews.schoolReviews === undefined) throw new Error('School Reviews not provided');
		if (Array.isArray(reviews.tuitionReviews) === false) throw new Error('Tuition Reviews not a Array');
		if (Array.isArray(reviews.schoolReviews) === false) throw new Error('School Reviews not a Array');

		cache();
		bindEvents();
		render();
		cacheDynamic();
		bindDynamicEvents();
	}

	return {
		init
	};
})();