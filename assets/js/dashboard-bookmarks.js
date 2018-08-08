const dashboardBookmarks = (() => {
    let $userTuitionBookmarks;

    function cache() {
        $userTuitionBookmarks = $("#userTuitionBookmarks");
    }

    function cacheDynamic() {
        $removeBookmarkButtons = $('.remove-bookmark-button');
    }

    function bindEvents(userInfo) {
        $removeBookmarkButtons.click(e => removeBookmarks(e, userInfo))
    }

    function getTuitionsInfo(tuitionId) {
        url = '/tuition';
        return $.ajax({
            url,
            method: 'GET',
            data: {
                _id: tuitionId
            }
            // demands: 'name addressLine1 addressLine2 city state primaryNumber email category reviews'
        });
    }

    function getUserBookmarksHtml(ids) {
        if (ids === undefined || ids.length === 0) {
            return;
        }

        const tuitionInfoPromiseArr = [];
        ids.forEach(tuitionId => tuitionInfoPromiseArr.push(getTuitionsInfo(tuitionId)));

        let cardsHtml = '';

        return new Promise((resolve, reject) => {
            Promise.all(tuitionInfoPromiseArr)
                .then(tuitionInfoArr => {
                    tuitionInfoArr.forEach(tuitionInfo => {
                            const averageRating = helperScripts.calcAverageRating(tuitionInfo.reviews);
                            tuitionInfo.averageRating = averageRating === -1 ? 2.5 : averageRating;
                            tuitionInfo.col4 = true;
                            tuitionInfo.hideFooter = true;
                            tuitionInfo.manageBookmarks = true;
                            cardsHtml += template.smoothCardHomePage(tuitionInfo);
                        }
                    );
                    resolve(cardsHtml);
                }).catch(err => reject(err));
        });
    }

    function removeBookmarks(event, userInfo) {
        let tuitionId = $(event.target).attr('data-id');
        $.ajax({
            url: '/user/delete/bookmarkTuitions/' + userInfo._id,
            method: 'DELETE',
            data: {
                string: tuitionId
            }
        }).then(data => {
            eagerRemoveCard(tuitionId);
        })
    }

    function eagerRemoveCard(cardId) {
        //todo - cache properly
        $('#' + cardId).remove()
    }

    function render(user) {
        if (user.bookmarkTuitions) {
            getUserBookmarksHtml(user.bookmarkTuitions).then(cardsHtml => {
                $userTuitionBookmarks.append(cardsHtml);
                cacheDynamic();
                bindEvents(user);
            });
        }
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();