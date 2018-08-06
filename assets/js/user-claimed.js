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
        if (tuitionIdArr.length === 0) {
            $claimedTuitionContainer.append(`<div class="card-title col-12">
                                                 Claim or List your institute if you own one
                                           </div>`)
        }else {
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
                            cardsHtml += template.smoothCard(tuitionInfo);
                        }
                    );
                    resolve(cardsHtml);
                }).catch(err => reject(err));
        })
    }

    function render(userInfo) {
        getTuitionCardHtml(userInfo.tuitionsOwned).then(cardsHtml => $claimedTuitionContainer.append(cardsHtml))
    }

    function init(userInfo) {
        cache();
        render(userInfo);
    }

    return {init};
})();