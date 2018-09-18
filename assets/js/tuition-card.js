const tuitionCards = (() => {
    let $cardsContainer;

    function cacheDom() {
        $cardsContainer = $('#cards_container');
    }

    function insertAverageRating(tuitionInfoArray = []) {
        tuitionInfoArray.forEach(tuitionInfo => {
            const averageRating = helperScripts.calcAverageRating(tuitionInfo.reviews);
            tuitionInfo.averageRating = averageRating === -1 ? 2.5 : averageRating;
        });
    }

    function getCardsHtml(tuitionInfoArray = []) {
        insertAverageRating(tuitionInfoArray);
        let cardsHtml = '';
        tuitionInfoArray.forEach(tuitionInfo => {
            helperScripts.openNowInit(tuitionInfo);
            tuitionInfo.typeOfInfo = 'tuition';
            tuitionInfo.hideFooter = true;
            cardsHtml += template.smoothCardHomePage(tuitionInfo)
        });
        return cardsHtml;
    }

    function render(tuitionInfoArray) {
        const cardsHtml = getCardsHtml(tuitionInfoArray);
        $cardsContainer.html(cardsHtml);
    }

    //Returns card container
    function init() {
        return new Promise((resolve, reject) => {
            cacheDom();
            const demands = "name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews organiserPhone organiserEmail fromTime toTime fromDate toDate lastDateRegistration"
            tuitionApiCalls.getAllTuitions(0, 15, demands).then(tuitionInfoArray => {
                render(tuitionInfoArray);
                resolve($cardsContainer);
            }).catch(err => reject(err));
        })
    }

    return {
        init
    };
})();