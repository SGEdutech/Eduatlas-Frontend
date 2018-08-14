function submitForm() {
    $.post({
        url: '/blog',
        data: {
            body: tinymce.activeEditor.getContent()
        }
    }).then(data => {
        // TODO: Set the link back to www after fixing nginx
        alert(`View your blogs at https://eduatlas.com/blog-viewer.html?id=${data._id}`);
        tinymce.activeEditor.setContent('');
    })
        .catch(err => console.error(err));
}

$('#save_btn').click(submitForm);