let tuitionDeytails = $.ajax({
    url: 'http://localhost:6868/tuition?_id=5b2a27743b14e67234d4d9ce',
});

tuitionDeytails.then((data) => {
    console.log(data)

    //needs improvement
    //splitting facilities
    let facilities = data.facilities.split(",");
    let facilitiesBetter = '';
    facilities.forEach((item) => {
        facilitiesBetter += `<i class="material-icons">check</i>  ${item} `
    });

    let timmingArray = data.dayAndTimeOfOperation;


    $('#name').html(data.name);
    $('#breadName').html(data.name);
    $('#address').html(`${data.addressLine1} , ${data.addressLine2} , ${data.city} , ${data.state} , ${data.country} , ${data.pin}`);
    $('#primaryNum').html(`+91 - ${data.primaryNumber}`);
    $('#secNumber').html(`+91 - ${data.secondaryNumber}`);
    $('#facilities').html(facilitiesBetter);
    $('#description').html(data.description);
    $('#location').html(`${data.addressLine1} , ${data.addressLine2} , ${data.city} , ${data.state} , ${data.country} , ${data.pin}`);
    $('#phone').html(`+91 - ${data.primaryNumber}
                        +91 - ${data.secondaryNumber}`);
    $('#email').html(data.email);
    $('#site').html(data.website);

    //get it from google api
    $('#direction');

    timmingArray.forEach((obj) => {

        switch (obj.day) {
            case 'monday':
                $('#monday').html(`${obj.from}-${obj.to}`);
                break;
            case 'tuesday':
                $('#tuesday').html(`${obj.from}-${obj.to}`);
                break;
            case 'wednesday':
                $('#wednesday').html(`${obj.from}-${obj.to}`);
                break;
            case 'thursday':
                $('#thrusday').html(`${obj.from}-${obj.to}`);
                break;
            case 'friday':
                $('#friday').html(`${obj.from}-${obj.to}`);
                break;
            case 'saturday':
                $('#saturday').html(`${obj.from}-${obj.to}`);
                break;
            case 'sunday':
                $('#sunday').html(`${obj.from}-${obj.to}`);
                break;
        }
    });

});