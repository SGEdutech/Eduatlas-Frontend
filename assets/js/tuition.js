let url_string = location.href; //window.location.href
let url = new URL(url_string);
let queryId = url.searchParams.get("_id");

$.ajax({
    url: '/tuition',
    data: {_id: queryId}
}).then(updateThePage);



function sanatiseData(tuition) {
    if (tuition.description && tuition.description.length > 70) {
        tuition.description = tuition.description.slice(0, 67) + '...';
    }
}
