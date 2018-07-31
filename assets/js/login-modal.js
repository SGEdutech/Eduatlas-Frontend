const loginModal = (() => {
    const $loginModalContainer = $('#login_modal_container');
    let $form;
    let $submitBtn;

    function cacheDynamicDom() {
        $loginModal = $('#loginModal');
        $form = $('#login_form');
        $submitBtn = $form.find('#submit_btn');
    }

    function getHtml() {
        const url = 'login-modal.html';
        const dataType = 'html';
        return $.get({url, dataType}); // Returns Promise
    }

    function bindEvents() {
        $form.submit(submitForm);
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
                $loginModalContainer.html(html);
                resolve();
            }).catch(err => reject(err));
        })
    }

    render().then(() => {
        cacheDynamicDom();
        bindEvents();
    });
})();