$(function () {
    let descriptionNew = $("#descriptionNew");
    descriptionNew.hide();
});

function AddFacility() {
    let facilityContainer = $("#facilityContainer");
    let count = 4;
    let template =
        `<div><input value="" name="" class="form-control" id="fas${count + 1}"></div>`;
    facilityContainer.html(facilityContainer.html() + template)
}

function editDescription() {
    let descriptionOld = $("#descriptionOld");
    let descriptionNew = $("#descriptionNew");
    descriptionNew.show();
    descriptionOld.hide();
}

// id will be set by handleBars
function deleteCourse(id) {

    //todo- send delete req to DB

    $('#' + id).remove();
}

function addCourse() {
    // todo
    // data is in Form
    // form id is newCourse
    // get the data and send it in post request

    // in the callback of ajax req put this alert
    alert("course added successfully")
}