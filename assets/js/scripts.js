const scripts = {
    logout() {
        $.get({url: '/auth/local/logout'})
            .then(data => PubSub.publish('user.logout', '')) // Send no user as empty string
            .catch(err => console.error(err));
    },

    executeAllFunctions(...funtionArray) {
        funtionArray.forEach(fn => fn());
    }
};