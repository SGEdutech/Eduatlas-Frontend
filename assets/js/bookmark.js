function bookmark(queryId) {

    $.ajax({
        url: '/user/check',
    }).then((userdata) => {
        if (userdata == 'LogIn') {
            $('#loginModal').modal('show');
        } else {
            let AlreadyBookmarked = false;
            userdata.bookmarkTuitions.forEach(tuitionID => {
                if (tuitionID == queryId) {
                    AlreadyBookmarked = true;
                }
            });
            if (AlreadyBookmarked) {
                //already bookmarked do nothing
                alert('already bookmarked')
            } else {
                //bookmark now
                $.ajax({
                    url: '/user/add/bookmarkTuitions/' + userdata._id,
                    method: 'POST',
                    data: {
                        string: queryId
                    }
                }).then(data => {
                    alert('bookmarked successfully')
                })
            }

        }
    }).catch(err => {
        console.log(err);
    })
}