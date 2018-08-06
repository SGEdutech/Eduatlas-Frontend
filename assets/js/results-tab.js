const results = (() => {
    let $resultsContainer;

    function cache() {
        $resultsContainer = $("#resultsContainer");
    }

    function render(user) {
        let html = getHtml(user);
        $resultsContainer.append(html);
    }

    function getHtml(user) {
        if (!user) {
            return
        }

        let context = {
            results: user.bragging ? user.bragging : []
        };

        let counter = 1;
        context.results.forEach((obj) => {
            obj.id = counter;
            counter++;
        });

        return template.userEditTuitionResults(context);
    }

    function init(user) {
        cache();
        render(user);
    }

    return {init};
})();