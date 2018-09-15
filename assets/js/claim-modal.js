const claimModal = (() => {
    let userInfo;
    let $claimModalContainer;
    let $claimModal;
    let $claimConfirmButton;
    let $claimButton;
    let queryObj;

    function cacheDom() {
        $claimModalContainer = $('#claim_modal_container');
        $claimButton = $('#claimButton');
    }

    function cacheDynamicDom() {
        $claimModal = $('#claimModal');
        $claimConfirmButton = $("#claimConfirmButton");
    }

    function getHtml() {
        const url = 'claim-modal.html';
        const dataType = 'html';
        return $.get({
            url,
            dataType
        }); // Returns Promise
    }

    function updateUserInfo(info) {
        userInfo = info;
        updateClaimButtonModal(info);
    }

    function updateQueryObj(obj) {
        queryObj = obj;
    }

    function claimListing(typeOfInfo) {
        const updateUserPromise = userApiCalls.putInArrayInUser(userInfo._id, "claims", {
            listingCategory: typeOfInfo,
            listingId: queryObj._id
        })

        updateUserPromise.then(() => {
            window.location.assign('https://erp.eduatlas.com/Dashboard-Pro.html');
        }).catch(err => console.error(err))
    }

    function updateClaimButtonModal(userInfo) {
        if (userInfo) {
            $claimButton.attr('data-toggle', 'modal');
            $claimButton.attr('data-target', '#claimModal');
        } else {
            $claimButton.attr('data-toggle', 'modal');
            $claimButton.attr('data-target', '#loginModal');
        }
    }

    function bindEvents(typeOfInfo) {
        $claimConfirmButton.click(() => claimListing(typeOfInfo));
    }

    function render() {
        return new Promise((resolve, reject) => {
            getHtml().then(html => {
                $claimModalContainer.html(html);
                resolve();
            }).catch(err => reject(err));
        })
    }

    function init(typeOfInfo) {
        cacheDom();
        render().then(() => {
            cacheDynamicDom();
            bindEvents(typeOfInfo)
        });
    }

    return {
        init,
        updateUserInfo,
        updateQueryObj
    };
})();