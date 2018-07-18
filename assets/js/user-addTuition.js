const newTuitionForm = $('#addTuition');
let tuitionIdCreated;
newTuitionForm.submit(e => {
    e.preventDefault();

    // todo - this thing below won't protect our server from user-less entries
    // todo - apply a check at server side and prevent this
    // console.log('logged in')
    let ifTuitionSaved = submitTuition();
    tuitionHaveBeenSaved(ifTuitionSaved);

});

function submitTuition() {
    $('#claimedByInput').val(userData._id);
    const formData = new FormData(newTuitionForm[0]);
    return $.ajax({
        type: newTuitionForm.attr('method'),
        url: newTuitionForm.attr('action'),
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
    })
}

function tuitionHaveBeenSaved(ifTuitionSaved) {
    console.log('tuition saved');
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
        console.log('user updated');
        console.log(data);
        window.location.replace('./User-editTuition.html?a=' + tuitionIdCreated)
    }).catch(err => {
        console.log(err);
    });
}

