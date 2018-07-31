const scripts = {
    logout() {
        $.get({url: '/auth/local/logout'})
            .then(data => PubSub.publish('user.logout'))
            .catch(err => console.error(err));
    },

    executeAllFunctions(...funtionArray) {
        funtionArray.forEach(fn => fn());
    }
};