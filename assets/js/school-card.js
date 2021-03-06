const schoolCards = (() => {
    let $cardsContainer;

    function cacheDom() {
        $cardsContainer = $('#cards_container2');
    }

    function insertAverageRating(schoolInfoArray = []) {
        schoolInfoArray.forEach(schoolInfo => {
            const averageRating = helperScripts.calcAverageRating(schoolInfo.reviews);
            schoolInfo.averageRating = averageRating === -1 ? 2.5 : averageRating;
        });
    }

    function getCardsHtml(schoolInfoArray = []) {
        insertAverageRating(schoolInfoArray);
        let cardsHtml = '';
        schoolInfoArray.forEach(schoolInfo => {
            helperScripts.openNowInit(schoolInfo);
            schoolInfo.typeOfInfo = 'school';
            schoolInfo.hideFooter = true;
            cardsHtml += template.smoothCardHomePage(schoolInfo)
        });
        return cardsHtml;
    }

    function render(schoolInfoArray) {
        const cardsHtml = getCardsHtml(schoolInfoArray);
        $cardsContainer.html(cardsHtml);
    }

    //Returns card container
    function init() {
        return new Promise((resolve, reject) => {
            cacheDom();
            const demands = "name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews organiserPhone organiserEmail fromTime toTime fromDate toDate lastDateRegistration"
            schoolApiCalls.getAllSchools(0, 15, demands).then(schoolInfoArray => {
                render(schoolInfoArray);
                resolve($cardsContainer);
            }).catch(err => reject(err));
        })
    }

    return {
        init
    };
})();