let titleInput = $('#title_inp');
let categoryInp = $('#category_inp');
let authorName = $('#author_name_inp');

function submitForm() {
    $.post({
        url: '/blog',
        data: {
            title: titleInput.val(),
            category: categoryInp.val(),
            authorName: authorName.val(),
            body: tinymce.activeEditor.getContent(),
        }
    }).then(data => {
        titleInput.val('');
        categoryInp.val('');
        authorName.val('');
        tinymce.activeEditor.setContent('');
        alert('done');
    }).catch(err => console.error(err));

}

$('#save_btn').click(submitForm);