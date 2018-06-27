let queryId = window.location.search.slice(1);

$.ajax({
    url: '/tuition',
    data: {_id: queryId}
}).then(updateThePage);

function updateThePage(data) {
    console.log(data);
    $('#tuition_name').html(data.name);
    $('#address').html(data.addressLine1 + ', ' + data.addressLine2);
    $('#phone').html(data.primaryNumber);
    $('.email').html(data.email);
    $('#description').html(data.description);
    $('#contact_person').html(data.contactPerson);
    $('#primary_number').html(data.primaryNumber);
    $('#alternate_number').html(data.secondaryNumber);
    $('#website').html(data.website);

    doTheTemplateStuff(data);
}

function doTheTemplateStuff(data) {
    const facilityArr = data.facilities.split(',');
    const facilitySource = $('#facility_template').html();
    const facilityTemplate = Handlebars.compile(facilitySource);
    const facilityHtml = facilityTemplate({facilities: facilityArr});
    $('#facilities_container').html(facilityHtml);

    const categoryArr = data.facilities.split(',');
    const categorySource = $('#category_template').html();
    const categoryTemplate = Handlebars.compile(categorySource);
    const categoryHtml = categoryTemplate({categories: categoryArr});
    $('#category_container').html(categoryHtml);

    const operationSource = $('#operates_on_template').html();
    const operationTemplate = Handlebars.compile(operationSource);
    const operationHtml = operationTemplate({dayAndTimeOfOperation: data.dayAndTimeOfOperation});
    $('#opration_container').html(operationHtml);
}