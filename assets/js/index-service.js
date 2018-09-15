PubSub.subscribe('user', (msg, userInfo) => {
	navigationBar.render(userInfo);
});

user.getInfo().then(userInfo => {
	navigationBar.init(userInfo, {
		colorOnScroll: true,
		activeElementId: 'home_nav'
	});
});

tuitionCards.init().then(cardsContainer => {
	carousel.init(cardsContainer);
});

schoolCards.init().then(cardsContainer => {
	carousel.init(cardsContainer);
});

searchBtn.init();

setTimeout(loginModal.init());

scrollToCaetegories.init();

searchSuggestion.init();

dropDown.init();
// ipLocation.init();