// /tuition/add/reviews/

function submitReview(id) {
    if ($('#reviewRatingInput').val() === '' || $('#reviewRatingInput').val() === undefined) {
        alert('please give some rating by clicking on stars')
    } else {
        $.ajax({
            url: '/user/check',
        }).then((user) => {
            if (user == 'LogIn') {
                $('#loginModal').modal('show');
            } else {
                //check if a review already there
                let reviewAlredythere = false;
                user.reviewsOwned.forEach(obj => {
                    if (obj.outerId == queryId) {
                        reviewAlredythere = true;
                    }
                });
                if (reviewAlredythere) {
                    //do nothing
                    alert('you have already submitted a review')
                } else {
                    // submit review then update user
                    const form = $('#' + id);
                    //queryId(global var) comes from tuition.js file
                    $('#reviewOwnerInput').val(user._id);

                    let reviewToShow = {
                        rating: $('#reviewRatingInput').val(),
                        description: $('#reviewDescriptionInput').val()
                    };

                    $.ajax({
                        url: '/tuition/add/reviews/' + queryId,
                        method: 'POST',
                        data: form.serialize()
                    }).then((tuition) => {
                        let addedReviewID = '';
                        tuition.reviews.forEach(obj => {
                            if (obj.owner == user._id) {
                                addedReviewID = obj._id;
                            }
                        });
                        console.log(addedReviewID);
                        // update user now
                        $.ajax({
                            url: '/user/add/reviewsOwned/' + user._id,
                            method: 'POST',
                            data: {
                                category: 'tuition',
                                outerId: tuition._id,
                                innerId: addedReviewID
                            }
                        }).then(updatedUser => {

                            let HTML = template.tuitionReviews(reviewToShow);
                            $("#savedReviews").append(HTML);
                            alert('review added success')
                        })
                    })
                }
            }
        }).catch(err => {
            console.log(err)
        });
    }
}


function changeColor(rating) {
    $('#reviewRatingInput').val(rating);
    let array = [$('#s1'), $('#s2'), $('#s3'), $('#s4'), $('#s5')];
    array.forEach(btn => {
        btn.css('color', 'black')
    });
    for (let i = 0; i < rating; i++) {
        array[i].css('color', '#00bcd4')
    }
}