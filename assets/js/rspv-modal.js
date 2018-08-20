const rspvModal = (() => {
    let $rspvModalContainer;
    let $goingBtn, $maybeBtn, $notGoingBtn;
    let $loginModal;

    function cacheDom() {
        $rspvModalContainer = $('#rspv_modal_container');
    }

    function cacheDynamicDom() {
        $loginModal = $('#rspv_modal');
        $goingBtn = $('#going_btn');
        $maybeBtn = $('#maybe_btn');
        $notGoingBtn = $('#not_going_btn');
    }

    function getHtml() {
        const url = 'rspv-modal.html';
        const dataType = 'html';
        return $.get({url, dataType}); // Returns Promise
    }

    function bindEvents() {
    }

    function submitForm(event) {
        // TODO: Make more elegent
        event.preventDefault();
        let formData = $form.serialize();
        $.post({
            url: $form.attr('action'),
            data: formData,
        }).then(user => {
            PubSub.publish('user.login', user);
            $loginModal.modal('hide');
        }).catch(err => {
            const errorResponse = err.responseText;
            if (errorResponse === 'Bad Request') {
                alert('please fill both username and password')
            } else {
                let messageToDisplay = errorResponse.match(new RegExp('<pre>' + "(.*)" + '</pre>'))[1];
                alert(messageToDisplay)
            }
        });
    }

    function render() {
        return new Promise((resolve, reject) => {
            getHtml().then(html => {
                $rspvModalContainer.html(html);
                resolve();
            }).catch(err => reject(err));
        })
    }

    function init() {
        cacheDom();
        render().then(() => {
            PubSub.publish('rspvModal.load', null);
            cacheDynamicDom();
            bindEvents();
        });
    }

    return {init};
})();