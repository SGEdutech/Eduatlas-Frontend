const form = $('#Form1');
let userId;
let tuitionIdCreated;
form.submit(e => {
    e.preventDefault();

    //check if user Logged in
    const ifUserLoggedIn = $.ajax({
        url: 'http://localhost:6868/user',
    });

    // todo - this thing below won't protect our server from user-less entries
    // todo - apply a check at server side and prevent this
    ifUserLoggedIn.then((data) => {
        if (data == 'LogIn') {
            window.location.replace('./login-page.html');
        } else {
            userId = data._id;
            let ifTuitionSaved = submitTuition();
            tuitionHaveBeenSaved(ifTuitionSaved);
        }
    }).catch(err => {
        console.log(err)
    });

});

function submitTuition() {
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
    ifTuitionSaved.then((data) => {
        tuitionIdCreated = data._id;
        const ifUserUpdated = $.ajax({

            // todo - need to fix
            url: 'http://localhost:6868/user/' + userId,
            method: 'PUT',
            data: {
                tuitionsOwned: data._id
            }
        });

        userHaveBeenUpdated(ifUserUpdated);

    }).catch(err => {
        console.log(err);
    });
}

function userHaveBeenUpdated(ifUserUpdated) {
    ifUserUpdated.then((data) => {
        console.log(data);
        window.location.replace('./User-editTuition.html?a=' + tuitionIdCreated)
    }).catch(err => {
        console.log(err);
    });
}

