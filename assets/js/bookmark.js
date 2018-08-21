const bookmark = (() => {
    let userInfo;
    let $loginModal;
    let $bookmarkButtons;

    function bindEvents() {
        $bookmarkButtons.click(saveBookmark)
    }

    function cacheDynamicDom() {
        $loginModal = $('#loginModal');
        $bookmarkButtons = $('.bookmark-button')
    }

    function updateUserInfo(info) {
        userInfo = info;
    }

    function saveBookmark() {
        if (!userInfo) {
            $loginModal.modal('show');
        } else {
            let instituteId = $(this).attr('data-id');
            let typeOfInfo = $(this).attr('data-category');
            let ifBookmarked = $(this).attr('data-bookmarked');

            if (ifBookmarked) {
                //do nothing
                $(this).html('bookmark_border');
                typeOfInfo = typeOfInfo.charAt(0).toUpperCase() + typeOfInfo.slice(1);
                $.ajax({
                    url: `/user/delete/bookmark${typeOfInfo}s/${userInfo._id}`,
                    method: 'DELETE',
                    data: {
                        string: instituteId
                    }
                }).then(data => {
                    // alert('bookmarked removed successfully')
                })
            } else {
                // make first character Upper-Case
                $(this).html('bookmark');

                typeOfInfo = typeOfInfo.charAt(0).toUpperCase() + typeOfInfo.slice(1);
                $.ajax({
                    url: `/user/add/bookmark${typeOfInfo}s/${userInfo._id}`,
                    method: 'POST',
                    data: {
                        string: instituteId
                    }
                }).then(data => {
                    // alert('bookmarked successfully')
                })
            }
        }
    }

    function init() {
        cacheDynamicDom();
        bindEvents();
    }

    return {init, updateUserInfo};
})();