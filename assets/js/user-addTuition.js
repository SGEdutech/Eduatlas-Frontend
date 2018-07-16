const form = $('#Form1');
let userData;
let tuitionIdCreated;
form.submit(e => {
    e.preventDefault();

    //check if user Logged in
    const ifUserLoggedIn = $.ajax({
        url: '/user/check',
    });

    // todo - this thing below won't protect our server from user-less entries
    // todo - apply a check at server side and prevent this
    ifUserLoggedIn.then((data) => {
        if (data == 'LogIn') {
            window.location.assign('./login-page.html');
        } else {
            // console.log('logged in')
            userData = data;
            let ifTuitionSaved = submitTuition();
            tuitionHaveBeenSaved(ifTuitionSaved);
        }
    }).catch(err => {
        console.log(err)
    });

});

function submitTuition() {
    $('#claimedByInput').val(userData._id);
    const formData = new FormData(form[0]);
    return $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
    })
}

function tuitionHaveBeenSaved(ifTuitionSaved) {
    console.log('tuition saved')
    ifTuitionSaved.then((data) => {
        console.log(userData);
        tuitionIdCreated = data._id;
        const ifUserUpdated = $.ajax({
            // todo - need to fix
            url: '/user/add/tuitionsOwned/' + userData._id,
            method: 'POST',
            data: {
                string: data._id
            }
        });

        userHaveBeenUpdated(ifUserUpdated);

    }).catch(err => {
        console.log(err);
    });
}

function userHaveBeenUpdated(ifUserUpdated) {
    ifUserUpdated.then((data) => {
        console.log('user updated')
        console.log(data);
        window.location.assign('./User-editTuition.html?a=' + tuitionIdCreated)
    }).catch(err => {
        console.log(err);
    });
}

