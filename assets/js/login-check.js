function checkLogin(redirectAddress) {
    $.ajax({
        url: '/user/check',
    }).then((data) => {
        console.log(data);
        if (data == 'LogIn') {
            window.location.replace('./login-page.html');
        } else {
            if (redirectAddress === undefined || redirectAddress === '') {
                // do nothing
            } else {
                window.location.replace(redirectAddress);
            }
        }
    }).catch(err => {
        console.log(err);
    })
}
