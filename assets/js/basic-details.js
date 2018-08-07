const basicDetails = (() => {
    let $basicContainer;
    let $form;
    let $saveDetailsBtn;
    let $contactUsTab;

    function cache() {
        $basicContainer = $("#basicContainer");
        $form = $('#aboutUsForm');
        $saveDetailsBtn = $('#save_basic_details_btn');
        $contactUsTab = $(`[href = "#tab2"]`);
    }

    function bindEvents(tuitionId) {
        $saveDetailsBtn.click(() => helperScripts.saveDetails($form, $contactUsTab, tuitionId));
    }

    function render(tuitionInfo) {
        let html = getHtml(tuitionInfo);
        $basicContainer.append(html);
    }

    function getHtml(context) {
        return template.userEditTuitionBasic(context);
    }

    function init(tuitionInfo) {
        cache();
        render(tuitionInfo);
        bindEvents(tuitionInfo._id);
    }

    return {init};
})();