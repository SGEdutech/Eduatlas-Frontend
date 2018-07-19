function checkLogin(redirectAddress) {
    $.ajax({
        url: '/user/check',
    }).then((data) => {
        if (data == 'LogIn') {
            $('#loginModal').modal('show');
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
