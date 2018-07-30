const scripts = {
    logout() {
        $.get({url: '/auth/local/logout'})
            .then(data => {
                if (data.done) window.location.assign('/');
            });
    },

    executeAllFunctions(...funtionArray) {
        funtionArray.forEach(fn => fn());
    }
};