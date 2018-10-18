const forumModal = (() => {
	let currentForumPost;
	let $modal;
	let $modalContainer;
	let $commentTextarea;
	let $addCommentBtn;

	async function addComment() {
		const newComment = await tuitionApiCalls.putCommentInPost(currentForumPost.tuitionId, currentForumPost._id, { content: $commentTextarea.val() });
		currentForumPost.comments.push(newComment);
		$commentTextarea.val('');
		PubSub.publish('forum-comment.add', newComment);
		refresh();
	}

	function showModal() {
		$modal.modal('show');
	}

	function hideModal() {
		$modal.modal('hide');
	}

	function bindDynamic() {

	}

	function cacheDynamic() {}

	function cache() {
		$modal = $('#forum_modal');
		$modalContainer = $('#modal_body');
		$addCommentBtn = $('#add_comment_btn');
		$commentTextarea = $('#comment_text');
	}

	function bindEvents() {
		$addCommentBtn.click(addComment);
		$modal.on('hidden.bs.modal', () => $modalContainer.html(''));
	}

	function render() {
		const forumHtml = template.forumModalContent(currentForumPost);
		$modalContainer.html(forumHtml);
	}

	function refresh() {
		render();
	}

	function displayPost(forumPost) {
		if (forumPost === undefined) throw new Error('Forum post not defined');

		currentForumPost = JSON.parse(JSON.stringify(forumPost));
		render();
		cacheDynamic()
		bindDynamic();
		showModal();
	}

	function init() {
		cache();
		bindEvents();
	}

	return { init, displayPost }
})();

forumModal.init();
