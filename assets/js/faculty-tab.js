const faculty = (() => {
    let $facultyContainer;

    function cache() {
        $facultyContainer = $("#facultyContainer");
    }

    function render(tuition) {
        let html = getHtml(tuition);
        $facultyContainer.append(html);
    }

    function getHtml(tuition) {
        if (!tuition) {
            return
        }
        let context = {
            faculty: tuition.team ? tuition.team : []
        };

        let counter = 1;
        context.faculty.forEach((obj) => {
            obj.id = counter;
            counter++;
        });

        return template.userEditTuitionFaculty(context);
    }

    function init(tuition) {
        cache();
        render(tuition);
    }

    return {init};
})();