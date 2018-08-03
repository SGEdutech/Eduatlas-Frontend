PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
});

user.getInfo().then(userInfo => navigationBar.init(userInfo));

tuitionCards.init().then(cardsContainer => carousel.init(cardsContainer));

setTimeout(loginModal.init());

searchSuggestion.init();