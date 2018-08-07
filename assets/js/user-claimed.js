const userClaimedTuition = (() => {
    let $claimedTuitionContainer;
    let $unclaimButons;

    function cache() {
        $claimedTuitionContainer = $('#userOwnedTuitionContainer');
    }

    function cacheDynamic() {
        $unclaimButons = $('.unclaim-button');
    }

    function bindEvents(userInfo) {
        $unclaimButons.click((event) => unclaimListing(event, userInfo))
    }

    function unclaimListing(event, userInfo) {
        let tuitionId = $(event.target).attr('data-id');
        console.log(tuitionId);
        //now update tuition by removing claimedBy
        let updateTuitionPromise = $.ajax({
            url: '/tuition/empty/claimedBy',
            type: 'DELETE',
            data: {_id: tuitionId}
        });

        //now update user by inserting id of tuition to tuitionsOwned array
        //todo - we need to delete from array
        let updateUserPromise = $.ajax({
            url: '/user/delete/tuitionsOwned/' + userInfo._id,
            type: 'DELETE',
            data: {string: tuitionId}
        });

        Promise.all([updateTuitionPromise, updateUserPromise]).then(() => window.location.assign('User-dashboard.html')).catch(err => console.error(err))
    }

    function getTuitionsInfo(tuitionId) {
        url = `/tuition`;
        // demands = `name addressLine1 addressLine2 city state primaryNumber email
        // category description claimedBy dayAndTimeOfOperation reviews`,

        return $.get({
            url,
            data: {_id: tuitionId}
        });
    }

    function getTuitionCardHtml(tuitionIdArr) {
        if (tuitionIdArr.length === 0) {
            $claimedTuitionContainer.append(`<div class="card-title col-12">
                                                 Claim or List your institute if you own one
                                           </div>`)
        } else {
            $claimedTuitionContainer.append(`<div class="card-title col-12">
                                                 Manage Your Institute/Tuition
                                           </div>`)
        }
        const tuitionInfoPromiseArr = [];
        tuitionIdArr.forEach(tuitionId => tuitionInfoPromiseArr.push(getTuitionsInfo(tuitionId)));

        let cardsHtml = '';

        return new Promise((resolve, reject) => {
            Promise.all(tuitionInfoPromiseArr)
                .then(tuitionInfoArr => {
                    tuitionInfoArr.forEach(tuitionInfo => {
                            const averageRating = helperScripts.calcAverageRating(tuitionInfo.reviews);
                            tuitionInfo.averageRating = averageRating === -1 ? 2.5 : averageRating;
                            tuitionInfo.col4 = true;
                            tuitionInfo.manageClaimed = true;
                            tuitionInfo.hideFooter = true;
                            cardsHtml += template.smoothCardHomePage(tuitionInfo);
                        }
                    );
                    resolve(cardsHtml);
                }).catch(err => reject(err));
        })
    }

    function render(userInfo) {
        getTuitionCardHtml(userInfo.tuitionsOwned).then(cardsHtml => {
            $claimedTuitionContainer.append(cardsHtml);
            cacheDynamic();
            bindEvents(userInfo);
        })
    }

    function init(userInfo) {
        cache();
        render(userInfo);
    }

    return {init};
})();