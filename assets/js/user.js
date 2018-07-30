const user = (() => {
    function getInfo() {
        const url = '/user/info';
        return $.get({url}); // Returns a promise
    }

    getInfo().then(user => PubSub.publish('user.load', user));
})();