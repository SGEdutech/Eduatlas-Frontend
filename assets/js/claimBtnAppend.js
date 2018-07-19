const promise = $.ajax({
    url: '/user/check',
});
promise.then((data) => {
    if (isClaimed === false) {
        if (data === 'LogIn') {
            $('#claimContainer').append(`<button id="" type="button" class="btn btn-block btn-info" data-toggle="modal" data-target="#loginModal">
                        Claim This Page
                    </button>`)
        } else {
            $('#claimContainer').append(`<button id="" type="button" class="btn btn-block btn-info" data-toggle="modal" data-target="#claimModal">
                        Claim This Page
                    </button>`)
        }
    }
});