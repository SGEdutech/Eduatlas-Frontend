const coverImage = (() => {
    let $coverImgContainer;

    function cache() {
        $coverImgContainer = $("#coverImgContainer");
    }

    function render(user) {
        let html = getCoverHtml(user.img_tuitionCoverPic);
        $coverImgContainer.append(html);
    }

    function getCoverHtml(path) {
        return template.userEditTuitionCover({path: path});
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();