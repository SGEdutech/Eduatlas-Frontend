PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
    bookmark.updateUserInfo(userInfo);
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo);
    bookmark.updateUserInfo(userInfo);
});

tuitionCards.init().then(cardsContainer => {
    carousel.init(cardsContainer);
    bookmark.init();
});

loginModal.init();

searchSuggestion.init();