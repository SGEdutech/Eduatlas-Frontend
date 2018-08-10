function submitForm() {
    $.post({
        url: '/blog',
        data: {
            body: tinymce.activeEditor.getContent()
        }
    }).then(data => alert(`View your blogs at http://www.eduatlas.com/blog-viewer.html?id=${data._id}`)).catch(err => console.error(err));
}

$('#save_btn').click(submitForm);