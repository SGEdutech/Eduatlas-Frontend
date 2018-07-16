function checkLogin(redirectAddress) {
    $.ajax({
        url: '/user/check',
    }).then((data) => {
        console.log(data);
        if (data == 'LogIn') {
            window.location.assign('./login-page.html');
        } else {
            if (redirectAddress === undefined || redirectAddress === '') {
                // do nothing
            } else {
                window.location.assign(redirectAddress);
            }
        }
    }).catch(err => {
        console.log(err);
    })
}
