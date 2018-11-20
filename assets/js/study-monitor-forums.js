const forum = (() => {
	let forumsArr;
	let $forumContainer;
	let $postHeading;
	let $landingContainer;
	let $detailContainer;
	let $forumPostContainer;
	let $backBtn
	let $addCommentBtn;

	async function addAndRenderComment(event) {
		try {
			const $btn = $(event.target);
			const postId = $btn.attr('data-post-id');
			const tuitionId = $btn.attr('data-tuition-id');
			const commentContent = $commentTextarea.filter(`[data-post-id="${postId}"]`).val();
			const newComment = await tuitionApiCalls.putCommentInPost(tuitionId, postId, { content: commentContent });
			const updatedPost = forumsArr.find(forumObj => forumObj._id === postId);
			updatedPost.comments.push(newComment);
			renderPost(updatedPost);
		} catch (e) {
			console.error(e);
		}
	}

	function showLandingPage(event) {
		const $btn = $(event.target);
		const tuitionId = $btn.attr('data-tuition-id');
		$forumPostContainer.html('');
		$landingContainer.filter(`[data-tuition-id="${tuitionId}"]`).removeClass('d-none');
		$detailContainer.filter(`[data-tuition-id="${tuitionId}"]`).addClass('d-none');
	}

	function renderPost(postToShow) {
		const postHTML = template.forumPostBody(postToShow);
		$forumPostContainer.html(postHTML);
		cacheDynamic();
		bindDynamic();
	}

	function renderDetailsPage(event) {
		$heading = $(event.target);
		const postId = $heading.attr('data-post-id');
		const tuitionId = $heading.attr('data-tuition-id');
		const postToShow = forumsArr.find(forumObj => forumObj._id === postId);
		postToShow.comments.forEach(commentObj => {
			if (commentObj.createdAt) {
				commentObj.fromNow = moment(commentObj.createdAt).fromNow();
			}
		});
		renderPost(postToShow);
		$landingContainer.filter(`[data-tuition-id="${tuitionId}"]`).addClass('d-none');
		$detailContainer.filter(`[data-tuition-id="${tuitionId}"]`).removeClass('d-none');
	}

	function bindDynamic() {
		$postHeading.click(renderDetailsPage);
		$addCommentBtn.click(addAndRenderComment);
	}

	function cacheDynamic() {
		$postHeading = $('.post-heading');
		$addCommentBtn = $('.add-comment-btn');
		$commentTextarea = $('.comment-content-textarea');
	}

	function cache() {
		$forumContainer = $('.active-forums');
		$landingContainer = $('.forum-landing-container');
		$detailContainer = $('.forum-detail-container');
		$forumPostContainer = $('.forum-detail-body');
		$backBtn = $('.go-to-landing-page-btn');
	}

	function bindEvent() {
		$backBtn.click(showLandingPage);
	}

	function render() {
		$forumContainer.each((__, container) => {
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
			const forumsOfThisInstitute = forumsArr.filter(forumObj => forumObj.tuitionId === tuitionId);
			forumsOfThisInstitute.forEach(forumObj => {
				forumObj.fromNow = moment(forumObj.createdAt).fromNow();
			});
			const forumCardsHTML = template.forumCards({ forums: forumsOfThisInstitute });
			$container.html(forumCardsHTML)
		});
	}

	function init(forums) {
		if (forums === undefined) throw new Error('Forums not provided');

		forumsArr = JSON.parse(JSON.stringify(forums));
		cache();
		bindEvent();
		render();
		cacheDynamic();
		bindDynamic();
	}

	PubSub.subscribe('forum-comment.add', (msg, newComment) => {
		// FIXME
	});

	return { init };
})();