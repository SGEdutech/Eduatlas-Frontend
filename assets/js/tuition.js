let queryId = window.location.search.slice(1);

$.ajax({
    url: 'http://eduatlas.com/tuition',
    data: {_id: queryId}
}).then(updateThePage);

function updateThePage(data) {
    console.log(data);
    $('#tuition_name').html(data.name);
    $('#address').html(data.addressLine1 + ', ' + data.addressLine2);
    $('#phone').html(data.primaryNumber);
    $('#email').html(data.email);

}