const form = $('#Form1');
form.submit(e => {
    e.preventDefault();
    const formData = new FormData(form[0]);
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: data => {
            window.location.replace('./User-editTuition.html?a=' + data._id)
        },
        error: err => {
            console.error(err);
            alert("tuition addition failed")
        }
    })
});