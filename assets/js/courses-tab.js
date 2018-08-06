const courses = (() => {
    let $coursesContainer;

    function cache() {
        $coursesContainer = $("#coursesContainer");
    }

    function render(tuition) {
        let html = getHtml(tuition);
        $coursesContainer.append(html);
    }

    function getHtml(tuition) {
        if (!tuition) {
            return
        }

        let context = {
            courses: tuition.courses ? tuition.courses : [],
        };

        let counter = 1;
        context.courses.forEach((obj) => {
            if (obj.nextBatch) {
                obj.nextBatch = obj.nextBatch.split('T')[0];
            }
            obj.id = counter;
            counter++;
        });

        return template.userEditTuitionCourses(context);
    }

    function init(tuition) {
        cache();
        render(tuition);
    }

    return {init};
})();