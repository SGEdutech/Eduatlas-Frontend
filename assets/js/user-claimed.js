const userClaimedTuition = (() => {
    let $claimedTuitionContainer;

    function cache() {
        $claimedTuitionContainer = $('#userOwnedTuitionContainer');
    }

    function bindEvents() {

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
        const tuitionInfoPromiseArr = [];
        tuitionIdArr.forEach(tuitionId => tuitionInfoPromiseArr.push(getTuitionsInfo(tuitionId)));

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
        })
    }

    function render(userInfo) {
        getTuitionCardHtml(userInfo.tuitionsOwned).then(cardsHtml => $claimedTuitionContainer.html(cardsHtml))
    }

    function init(userInfo) {
        cache();
        render(userInfo);
    }

    return {init};
})();