const promise = $.ajax({
    url: 'http://localhost:6868/auth/local/login',
});

promise.then((data) => {
    // if already logged in
    window.location.replace('./User-dashboard.html?a=')
}).catch((err) => {
    console.log(err)
});