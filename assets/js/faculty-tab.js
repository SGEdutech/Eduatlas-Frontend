const faculty = (() => {
    let $facultyContainer;
    let $newFacultyForm;
    let $addNewFacultyButton;
    let $galleryTabButton;
    let $galleryTab;
    let $newFacultyModal;
    let $deleteButtons;

    function cache() {
        $facultyContainer = $("#facultyContainer");
        $newFacultyForm = $('#newFaculty');
        $addNewFacultyButton = $('#add_new_faculty_button');
        $galleryTabButton = $('#next_Tab_Button3');
        $galleryTab = $(`[href = "#tab6"]`);
        $newFacultyModal = $('#new_faculty_modal');
    }

    function cacheDynamic() {
        $deleteButtons = $('.delete-faculty-button');
    }

    function render(tuition) {
        let html = getHtml(tuition);
        $facultyContainer.append(html);
    }

    function bindEvents(tuitionId) {
        $addNewFacultyButton.click(() => addFaculty(tuitionId));
        $galleryTabButton.click(() => helperScripts.showNextTab($galleryTab));
        $deleteButtons.click(function () {
            deleteFaculty(this, tuitionId)
        });
    }

    function cacheNBindDeleteButtons(tuitionId) {
        cacheDynamic();
        $deleteButtons.click(function () {
            deleteFaculty(this, tuitionId)
        });
    }

    function deleteFaculty(element, tuitionId) {
        const $element = $(element);
        let name = $element.attr('data-name');
        let cardId = $element.attr('data-faculty-id');
        eagerRemoveCard(cardId);

        $.ajax({
            url: '/tuition/delete/team/' + tuitionId,
            type: 'DELETE',
            data: {
                name: name
            }
        }).then((data) => {
            // alert("faculty deleted successfully")
        }).catch((err) => {
            console.log(err);
            alert("faculty deletion failed")
        });
    }

    function eagerRemoveCard(cardId) {
        console.log(cardId);
        //todo - cache properly
        $('#' + cardId).remove()
    }

    function eagerLoadFaculty(serializedForm) {
        $newFacultyModal.modal('hide');
        let contextInner = {};
        serializedForm.forEach(obj => contextInner[obj.name] = obj.value);
        //give _id to contextInner
        contextInner._id = Math.floor(Math.random() * (50000 - 100) + 100);

        let contextOuter = {
            faculty: [contextInner]
        };
        $facultyContainer.append(template.userEditTuitionFaculty(contextOuter));
    }

    function addFaculty(tuitionId) {
        const form = $newFacultyForm;
        eagerLoadFaculty(form.serializeArray());

        const formData = new FormData(form[0]);
        // get the data and send it in post request
        const promise = $.ajax({
            url: '/tuition/add/team/' + tuitionId,
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
            alert("faculty addition failed")
        })
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
        cacheDynamic();
        bindEvents(tuition._id);
    }

    return {init};
})();