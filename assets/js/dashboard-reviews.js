const dashboardReviews = (() => {
    let $userReviews;
    let $deleteReviewButton;

    function cache() {
        $userReviews = $("#userReviews");
    }

    function cacheDynamic() {
        $deleteReviewButton = $(".delete-review-button");
    }

    function bindEvents() {
        $deleteReviewButton.click(e => deleteReview(e))
    }

    function getReviewsInfo(reviewInfoObj) {
        url = '/tuition';
        return $.ajax({
            url,
            method: 'GET',
            data: {
                _id: reviewInfoObj.outerId
            }
            // demands: 'name reviews'
        });
    }

    function getUserReviewsHtml(user) {
        const reviewsOwned = user.reviewsOwned;
        const tuitionInfoPromiseArr = [];
        reviewsOwned.forEach(review => tuitionInfoPromiseArr.push(getReviewsInfo(review)));

        let cardsHtml = '';

        return new Promise((resolve, reject) => {
            Promise.all(tuitionInfoPromiseArr)
                .then(tuitionInfoArr => {
                    tuitionInfoArr.forEach(tuitionInfo => {
                            //first find which review belongs to current user
                            let reviewWeNeed = '';
                            tuitionInfo.reviews.forEach(review => {
                                if (review.owner == user._id) {
                                    reviewWeNeed = review;
                                }
                            });
                            let context = {
                                tuitionId: tuitionInfo._id,
                                reviewId: reviewWeNeed._id,
                                userId: user._id,
                                name: tuitionInfo.name,
                                rating: reviewWeNeed.rating,
                                description: reviewWeNeed.description
                            };
                            cardsHtml += template.dashboardReviews(context);
                        }
                    );
                    resolve(cardsHtml);
                }).catch(err => reject(err));
        });
    }

    function deleteReview(event) {
        let tuitionId = $(event.target).attr('data-tuition-id');
        let userId = $(event.target).attr('data-user-id');
        let reviewId = $(event.target).attr('data-review-id');

        let updateTuitionPromise = $.ajax({
            url: '/tuition/delete/reviews/' + tuitionId,
            type: 'DELETE',
            data: {
                owner: userId
            }
        });

        let updateUserPromise = $.ajax({
            url: '/user/delete/reviewsOwned/' + userId,
            method: 'DELETE',
            data: {
                outerId: tuitionId
            }
        });

        Promise.all([updateTuitionPromise, updateUserPromise]).then(() => {
            eagerRemoveCard(reviewId);
        }).catch(err => console.error(err))
    }

    function eagerRemoveCard(cardId) {
        //todo - cache properly
        $('#' + cardId).remove()
    }

    function render(user) {
        if (user) {
            getUserReviewsHtml(user).then(cardsHtml => {
                $userReviews.append(cardsHtml);
                cacheDynamic();
                bindEvents();
            });
        }
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();