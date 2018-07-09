let url_string = location.href; //window.location.href
let url = new URL(url_string);
let queryId = url.searchParams.get("_id");

$.ajax({
    url: '/tuition',
    data: {_id: queryId}
}).then(updateThePage);

function updateThePage(data) {

    getRelatedListing(data.category);

    // console.log(data);
    $('#tuition_name').html(data.name);
    $('#address').html(data.addressLine1 + ', ' + data.addressLine2);
    $('#phone').html(data.primaryNumber);
    $('.email').html(data.email);
    $('#description').html(data.description);
    $('#contact_person').html(data.contactPerson);
    $('#primary_number').html(data.primaryNumber);
    $('#alternate_number').html(data.secondaryNumber);
    $('#website').html(data.website);
    showDaynTime(data.dayAndTimeOfOperation);
    showCourses(data.courses);
    showResults(data.bragging);
    showFaculty(data.team);
    showSocialLinks(data.fbLink, data.instaLink, data.youtubeLink);

    doTheTemplateStuff(data);
}

function showDaynTime(array) {
    /*let Input = $("#dayAndTimeOfOperationInput").html();
    let template = Handlebars.compile(Input);*/
    let context = {
        monFrom: '',
        monTo: '',
        tueFrom: '',
        tueTo: '',
        wedFrom: '',
        wedTo: '',
        thrFrom: '',
        thrTo: '',
        friFrom: '',
        friTo: '',
        satFrom: '',
        satTo: '',
        sunFrom: '',
        sunTo: '',
    };
    array.forEach((obj) => {
        let expr = obj.day;
        switch (expr) {
            case 'Monday':
                context.monFrom = obj.fromTime;
                context.monTo = obj.toTime;
                break;
            case 'Tuesday':
                context.tueFrom = obj.fromTime;
                context.tueTo = obj.toTime;
                break;
            case 'Wednesday':
                context.wedFrom = obj.fromTime;
                context.wedTo = obj.toTime;
                break;
            case 'Thursday':
                context.thrFrom = obj.fromTime;
                context.thrTo = obj.toTime;
                break;
            case 'Friday':
                context.friFrom = obj.fromTime;
                context.friTo = obj.toTime;
                break;
            case 'Saturday':
                context.satFrom = obj.fromTime;
                context.satTo = obj.toTime;
                break;
            case 'Sunday':
                context.sunFrom = obj.fromTime;
                context.sunTo = obj.toTime;
                break;
        }
    });
    let result = Handlebars.templates.tuitionOperationHours(context);
    $("#opration_hours_containers").append(result);
}

function showCourses(array) {
    /* let Input = $("#coursesInput").html();
     let template = Handlebars.compile(Input);*/
    Handlebars.registerHelper('list', function (items, options) {
        let output = '';
        for (let i = 0, l = items.length; i < l; i++) {
            output += options.fn(items[i]);
        }
        return output;
    });

    let context = {
        key: []
    };

    let counter = 1;
    array.forEach((obj) => {
        let newObj = {
            id: counter,
            title: obj.title,
            duration: obj.duration,
            fee: obj.fee,
            ageGroup: obj.ageGroup,
        };
        context.key.push(newObj);
        counter++;
    });
    let result = Handlebars.templates.tuitionCourses(context);
    $("#coursesContainer").append(result);
}

function showResults(array) {
    /*let Input = $("#resultInput").html();
    let template = Handlebars.compile(Input);*/
    Handlebars.registerHelper('list', function (items, options) {
        let output = '';
        for (let i = 0, l = items.length; i < l; i++) {
            output += options.fn(items[i]);
        }
        return output;
    });

    let context = {
        key: []
    };

    let counter = 1;
    array.forEach((obj) => {
        let newObj = {
            id: counter,
            img_path: obj.img_path,
            title: obj.title,
            description: obj.description,
        };
        context.key.push(newObj);
        counter++;
    });

    let result = Handlebars.templates.tuitionResult(context);
    $("#resultsContainer").append(result);

}

function showFaculty(array) {
    /* let Input = $("#facultyInput").html();
     let template = Handlebars.compile(Input);*/
    Handlebars.registerHelper('list', function (items, options) {
        let output = '';
        for (let i = 0, l = items.length; i < l; i++) {
            output += options.fn(items[i]);
        }
        return output;
    });

    let context = {
        key: []
    };

    let counter = 1;
    array.forEach((obj) => {
        let newObj = {
            id: counter,
            img_path: obj.img_path,
            name: obj.name,
            description: obj.description,
            qualification: obj.qualification
        };
        context.key.push(newObj);
        counter++;
    });

    let result = Handlebars.templates.tuitionFaculty(context);
    $("#facultyContainer").append(result);

}

function showSocialLinks(f, i, y) {
    /* let Input = $("#linksInput").html();
     let template = Handlebars.compile(Input);*/
    let context = {
        // twitter: t,
        facebook: f == "" ? '#' : f,
        instagram: i == "" ? '#' : i,
        youtube: y == "" ? '#' : y
    };

    let result = Handlebars.templates.tuitionLinks(context);
    $("#linkContainer").append(result);
}

function doTheTemplateStuff(data) {
    const facilityArr = data.facilities ? data.facilities.split(',') : [];
    /*const facilitySource = $('#facility_template').html();
    const facilityTemplate = Handlebars.compile(facilitySource);*/
    let result1 = Handlebars.templates.tuitionFacility({facilities: facilityArr});
    // const facilityHtml = facilityTemplate({facilities: facilityArr});
    $('#facilities_container').html(result1);

    const categoryArr = data.category ? data.category.split(',') : [];
    /*const categorySource = $('#category_template').html();
    const categoryTemplate = Handlebars.compile(categorySource);*/
    let result2 = Handlebars.templates.tuitionCategory({categories: categoryArr});
    // const categoryHtml = categoryTemplate({categories: categoryArr});
    $('#category_container').html(result2);

    /*const operationSource = $('#operates_on_template').html();
    const operationTemplate = Handlebars.compile(operationSource);*/
    /*const operationHtml = operationTemplate({dayAndTimeOfOperation: data.dayAndTimeOfOperation});
    $('#opration_container').html(operationHtml);*/
}

function getRelatedListing(category) {
    if (!category) {
        return
    }

    // todo - fix Algorithm to get related listing
    // maybe add server side route to get this
    let arrayOfCategory = category.split(',');
    const promise = $.ajax({
        url: '/tuition?category=' + arrayOfCategory[0],
        method: 'GET'
    });

    /*let source = $("#entry-template2").html();
    let template = Handlebars.compile(source);*/
    let context = {
        Name: "Tuition Name",
        rating: "2.5",
        ifAd: "",
        Address: "address",
        Phone: "phone",
        Email: "email",
        coverPic: "",
        Category: "category",
        id: "#"
    };

    promise.then((data) => {
        console.log("related***************");
        console.log(data);
        console.log("related**************");


        if (!Array.isArray(data)) {
            // for (keys in data) {
            //     if (data.hasOwnProperty(keys)) {
            context.rating = data.rating ? data.rating : "2.5";
            context.id = data._id;
            context.Name = data.name;
            context.Address = `${data.addressLine1},${data.addressLine2},${data.city},${data.state}`;
            context.Phone = data.primaryNumber;
            context.Email = data.email;
            context.coverPic = data.img_coverPic;
            context.Category = data.category;
            let result = Handlebars.templates.tuitionCard(context);
            $("#relatedTuitionContainer").append(result);
            // }
            // }
        }

    }).catch(err => {
        console.log(err);
    });


}