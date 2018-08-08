//todo - make it modular
function addGallery() {
    const form = $('#galleryForm');
    const formData = new FormData(form[0]);
    // data is in Form
    // form id is newFaculty
    // get the data and send it in post request
    const promise = $.ajax({
        url: '/tuition/add/gallery/' + TuitionId,
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
    });

    promise.then((data) => {
        // alert("Gallery added successfully")
        window.location.assign('User-dashboard.html');
    }).catch((err) => {
        console.log(err);
        alert("Gallery addition failed")
    })
}