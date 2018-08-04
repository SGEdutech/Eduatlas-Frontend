const claimModal = (() => {
    let userInfo;
    let $claimModalContainer;
    let $claimModal;
    let $claimConfirmButton;
    let $claimButton;

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
        return $.get({url, dataType}); // Returns Promise
    }

    function updateUserInfo(info) {
        userInfo = info;
        updateClaimButtonModal(info);
    }

    function claimListing() {
        //now update tuition by adding claimedBy
        const updateTuitionPromise = $.ajax({
            url: '/tuition/' + queryObj._id,
            type: 'PUT',
            data: {claimedBy: user._id}
        });
        //now update user by inserting id of tuition to tuitionsOwned array
        const updateUserPromise = $.ajax({
            url: '/user/add/tuitionsOwned/' + user._id,
            type: 'POST',
            data: {string: queryObj._id}
        });

        Promise.all([updateTuitionPromise, updateUserPromise]).then(() => window.location.assign('User-dashboard.html')).catch(err => console.error(err))
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

    function bindEvents() {
        $claimConfirmButton.click(claimListing);
    }

    function render() {
        return new Promise((resolve, reject) => {
            getHtml().then(html => {
                $claimModalContainer.html(html);
                resolve();
            }).catch(err => reject(err));
        })
    }

    function init() {
        cacheDom();
        render().then(() => {
            cacheDynamicDom();
            bindEvents()
        });
    }

    return {init, updateUserInfo};
})();