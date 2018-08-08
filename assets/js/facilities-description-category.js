const facilitiesDescriptionCategory = (() => {
    let $facilityContainer;
    let $descriptionContainer;
    let $cateContainer;

    function cache() {
        $facilityContainer = $("#facilityContainer");
        $descriptionContainer = $("#descriptionContainer");
        $cateContainer = $("#cateContainer")
    }

    function render(user) {
        let facilityHtml = getFacilitiesHtml(user);
        let descHtml = getDescriptionHtml(user);
        let categoryHtml = getCategoryHtml(user);
        $facilityContainer.append(facilityHtml);
        $descriptionContainer.append(descHtml);
        $cateContainer.append(categoryHtml);
    }

    function getFacilitiesHtml(context) {
        return template.userEditTuitionFacility(context);
    }

    function getDescriptionHtml(context) {
        return template.userEditTuitionDesc(context);
    }

    function getCategoryHtml(context) {
        return template.userEditTuitionCategory(context);
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();