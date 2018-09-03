const rspvModal = (() => {
    let userInfo;
    let $rspvModalContainer;
    let $goingBtn, $maybeBtn, $notGoingBtn;
    let $loginModal, $rspvModal;

    function cacheDom() {
        $rspvModalContainer = $('#rspv_modal_container');
    }

    function cacheDynamicDom() {
        $loginModal = $('#loginModal')
        $rspvModal = $('#rspv_modal')
        $goingBtn = $('#going_btn');
        $maybeBtn = $('#maybe_btn');
        $notGoingBtn = $('#not_going_btn');
    }

    function getHtml() {
        const url = 'rspv-modal.html';
        const dataType = 'html';
        return $.get({
            url,
            dataType
        }); // Returns Promise
    }

    function updateUser(user) {
        userInfo = user;
    }

    function bindEvents(queryObject) {
        $goingBtn.click(function () {
            addToList(queryObject, $goingBtn.attr("data-typeoflist"))
        });
        $maybeBtn.click(function () {
            addToList(queryObject, $maybeBtn.attr("data-typeoflist"))
        });
        $notGoingBtn.click(function () {
            addToList(queryObject, $notGoingBtn.attr("data-typeoflist"))
        });
    }

    function addToList(queryObject, typeoflist) {
        console.log(typeoflist);
        if (userInfo) {
            $.ajax({
                url: `/event/add/${typeoflist}Users/${queryObject._id}`,
                method: 'POST',
                data: {
                    string: userInfo._id
                }
            }).then(data => {
                // alert('saved successfully')
                $rspvModal.modal('hide')
            })
        } else {
            // user not logged-in
            $rspvModal.modal('hide');
            $loginModal.modal('show');
        }
    }

    function render() {
        return new Promise((resolve, reject) => {
            getHtml().then(html => {
                $rspvModalContainer.html(html);
                resolve();
            }).catch(err => reject(err));
        })
    }

    function init(queryObject) {
        cacheDom();
        render().then(() => {
            PubSub.publish('rspvModal.load', null);
            cacheDynamicDom();
            bindEvents(queryObject);
        });
    }

    return {
        init,
        updateUser
    };
})();