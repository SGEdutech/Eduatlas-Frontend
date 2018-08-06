const dashboardBookmarks = (() => {
    let $userTuitionBookmarks;

    function cache() {
        $userTuitionBookmarks = $("#userTuitionBookmarks");
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
                            cardsHtml += template.smoothCard(tuitionInfo);
                        }
                    );
                    resolve(cardsHtml);
                }).catch(err => reject(err));
        });
    }

    function render(user) {
        if (user.bookmarkTuitions) {
            getUserBookmarksHtml(user.bookmarkTuitions).then(cardsHtml => $userTuitionBookmarks.append(cardsHtml));
        }
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();