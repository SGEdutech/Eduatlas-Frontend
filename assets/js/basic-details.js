const basicDetails = (() => {
    let $basicContainer;

    function cache() {
        $basicContainer = $("#basicContainer");
    }

    function render(user) {
        let html = getHtml(user);
        $basicContainer.append(html);
    }

    function getHtml(context) {
        return template.userEditTuitionBasic(context);
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();