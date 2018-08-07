const results = (() => {
    let $resultsContainer;
    let $newResultForm;
    let $addNewResultButton;
    let $facultyTabButton;
    let $facultyTab;
    let $newResultModal;
    let $deleteButtons;

    function cache() {
        $resultsContainer = $("#resultsContainer");
        $newResultForm = $('#newResult');
        $addNewResultButton = $('#add_new_result_button');
        $facultyTabButton = $('#next_Tab_Button2');
        $facultyTab = $(`[href = "#tab5"]`);
        $newResultModal = $('#new_result_modal');
    }

    function cacheDynamic() {
        $deleteButtons = $('.delete-result-button');
    }

    function render(tuition) {
        let html = getHtml(tuition);
        $resultsContainer.append(html);
    }

    function bindEvents(tuitionId) {
        $addNewResultButton.click(() => addResult(tuitionId));
        $facultyTabButton.click(() => helperScripts.showNextTab($facultyTab));
        $deleteButtons.click(function () {
            deleteResult(this, tuitionId)
        });
    }

    function cacheNBindDeleteButtons(tuitionId) {
        cacheDynamic();
        $deleteButtons.click(function () {
            deleteResult(this, tuitionId)
        });
    }

    function deleteResult(element, tuitionId) {
        const $element = $(element);
        let title = $element.attr('data-title');
        let cardId = $element.attr('data-result-id');
        eagerRemoveCard(cardId);

        $.ajax({
            url: '/tuition/delete/bragging/' + tuitionId,
            type: 'DELETE',
            data: {
                title: title
            }
        }).then(() => {
            // alert("result deleted successfully")
        }).catch((err) => {
            console.log(err);
            alert("result deletion failed")
        });
    }

    function eagerRemoveCard(cardId) {
        console.log(cardId);
        //todo - cache properly
        $('#' + cardId).remove()
    }

    function eagerLoadResult(serializedForm) {
        $newResultModal.modal('hide');
        let contextInner = {};
        serializedForm.forEach(obj => contextInner[obj.name] = obj.value);
        //give _id to contextInner
        contextInner._id = Math.floor(Math.random() * (50000 - 100) + 100);

        let contextOuter = {
            results: [contextInner]
        };
        $resultsContainer.append(template.userEditTuitionResults(contextOuter));
    }

    function addResult(tuitionId) {
        const form = $newResultForm;
        eagerLoadResult(form.serializeArray());

        const formData = new FormData(form[0]);
        // get the data and send it in post request
        const promise = $.ajax({
            url: '/tuition/add/bragging/' + tuitionId,
            type: 'POST',
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
        });

        promise.then((data) => {
            cacheNBindDeleteButtons(tuitionId);
            // alert("result added successfully");
        }).catch((err) => {
            console.log(err);
            alert("result addition failed")
        })
    }

    function getHtml(tuition) {
        if (!tuition) {
            return
        }

        let context = {
            results: tuition.bragging ? tuition.bragging : []
        };

        let counter = 1;
        context.results.forEach((obj) => {
            obj.id = counter;
            counter++;
        });

        return template.userEditTuitionResults(context);
    }

    function init(tuition) {
        cache();
        render(tuition);
        cacheDynamic();
        bindEvents(tuition._id);
    }

    return {init};
})();