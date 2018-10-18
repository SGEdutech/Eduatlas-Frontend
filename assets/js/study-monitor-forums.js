const forum = (() => {
	let forumsArr;
	let $forumContainer;
	let $viewPostBtn;

	function showPost(event) {
		const $viewBtn = $(event.target);
		const forumId = $viewBtn.attr('data-forum-id');
		const forumPost = forumsArr.find(forumObj => forumObj._id === forumId);
		forumModal.displayPost(forumPost)
	}

	function bindDynamic() {
		$viewPostBtn.click(showPost)
	}

	function cacheDynamic() {
		$viewPostBtn = $('.show-forum-post');
	}

	function cache() {
		$forumContainer = $('.active-forums');
	}

	function bindEvent() {

	}

	function render() {
		$forumContainer.each((__, container) => {
			$container = $(container);
			const tuitionId = $container.attr('data-tuition-id');
			const forumsOfThisInstitute = forumsArr.filter(forumObj => forumObj.tuitionId === tuitionId);
			const forumCardsHTML = template.forumCards({ forums: forumsOfThisInstitute });
			$container.html(forumCardsHTML)
		});
	}

	function init(forums) {
		if (forums === undefined) throw new Error('Forums not provided');

		forumsArr = JSON.parse(JSON.stringify(forums));
		cache();
		render();
		cacheDynamic();
		bindDynamic();
	}

	PubSub.subscribe('forum-comment.add', (msg, newComment) => {
		// FIXME
	});

	return { init };
})();
