const dashboardReviews = (() => {
    let $userReviews;

    function cache() {
        $userReviews = $("#userReviews");
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

    function render(user) {
        if (user) {
            getUserReviewsHtml(user).then(cardsHtml => $userReviews.append(cardsHtml));
        }
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();