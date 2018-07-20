let url_string = location.href; //window.location.href
let url = new URL(url_string);
let TuitionId = '';
TuitionId = url.searchParams.get("a");
let Tab = url.searchParams.get("tab");
if (Tab == 'courses') {
    Tab = 'tab3'
} else if (Tab == 'results') {
    Tab = 'tab4'
} else if (Tab == 'faculty') {
    Tab = 'tab5'
}
showNextTab(Tab);
if (TuitionId == '') {
    TuitionId = '5b2b61f20079142dad3acc94'
} else if (!TuitionId) {
    TuitionId = '5b2b61f20079142dad3acc94'
}

const TuitionJSON = $.ajax({
    url: '/tuition/',
    data: {
        _id: TuitionId
    }
});

TuitionJSON.then((data) => {
    //todo - optimize all the calls
    showCover(data.img_tuitionCoverPic);
    showBasic(data.name, data.addressLine1, data.addressLine2, data.city, data.district, data.state, data.country, data.pin);
    showFacility(data.facilities);
    showDescription(data.description);
    showCategory(data.category);
    showContactPerson(data.contactPerson, data.primaryNumber, data.secondaryNumber, data.email, data.website);
    showSocialLinks(data.fbLink, data.instaLink, data.youtubeLink);
    showDaynTime(data.dayAndTimeOfOperation);
    showCourses(data.courses);
    showResults(data.bragging);
    showFaculty(data.team);
});

function showCover(path) {
    let context = {
        path: path
    };
    let result = Handlebars.templates.userEditTuitionCover(context);
    $("#coverImgContainer").append(result);
}

function showBasic(name, al1, al2, city, distt, state, country, pin) {
    /* let Input = $("#basicInput").html();
     let template = Handlebars.compile(Input);*/
    let context = {
        name: name,
        addressLine1: al1,
        addressLine2: al2,
        city: city,
        district: distt,
        state: state,
        country: country,
        pin: pin
    };
    let result = Handlebars.templates.userEditTuitionBasic(context);
    $("#basicContainer").append(result);
}

function showFacility(fasc) {
    /*let facilityInput = $("#facilityInput").html();
    let template = Handlebars.compile(facilityInput);*/
    let context = {
        facilities: fasc,
    };
    let result = Handlebars.templates.userEditTuitionFacility(context);
    $("#facilityContainer").append(result);
}

function showDescription(desc) {
    /*let descInput = $("#descInput").html();
    let template = Handlebars.compile(descInput);*/
    let context = {
        desc: desc,
    };
    let result = Handlebars.templates.userEditTuitionDesc(context);
    $("#descriptionContainer").append(result);
}

function showCategory(cate) {
    /*let Input = $("#cateInput").html();
    let template = Handlebars.compile(Input);*/
    let context = {
        cate: cate,
    };
    let result = Handlebars.templates.userEditTuitionCategory(context);
    $("#cateContainer").append(result);
}

function showContactPerson(contactP, pNumber, sNumber, email, site) {
    /*let Input = $("#contactPersonInput").html();
    let template = Handlebars.compile(Input);*/
    let context = {
        contactPerson: contactP,
        primaryNumber: pNumber,
        secondaryNumber: sNumber,
        email: email,
        website: site
    };
    let result = Handlebars.templates.userEditTuitionContactP(context);
    $("#contactPersonContainer").append(result);
}

function showSocialLinks(f, i, y) {
    /*let Input = $("#socialLinkInput").html();
    let template = Handlebars.compile(Input);*/
    let context = {
        // twitter: t,
        facebook: f,
        instagram: i,
        youtube: y,
    };
    let result = Handlebars.templates.userEditTuitionSocial(context);
    $("#socialLinkContainer").append(result);
}

function showDaynTime(array) {
    if (array === undefined || array === []) {
        return;
    }
    $('#saveTimeBtn').click(() => addAllTimes(array));

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
        let expr = obj.day.toLowerCase();
        switch (expr) {
            case 'monday':
                context.monFrom = obj.fromTime ? obj.fromTime : '';
                context.monTo = obj.toTime ? obj.toTime : '';
                break;
            case 'tuesday':
                context.tueFrom = obj.fromTime ? obj.fromTime : '';
                context.tueTo = obj.toTime ? obj.toTime : '';
                break;
            case 'wednesday':
                context.wedFrom = obj.fromTime ? obj.fromTime : '';
                context.wedTo = obj.toTime ? obj.toTime : '';
                break;
            case 'thursday':
                context.thrFrom = obj.fromTime ? obj.fromTime : '';
                context.thrTo = obj.toTime ? obj.toTime : '';
                break;
            case 'friday':
                context.friFrom = obj.fromTime ? obj.fromTime : '';
                context.friTo = obj.toTime ? obj.toTime : '';
                break;
            case 'saturday':
                context.satFrom = obj.fromTime ? obj.fromTime : '';
                context.satTo = obj.toTime ? obj.toTime : '';
                break;
            case 'sunday':
                context.sunFrom = obj.fromTime ? obj.fromTime : '';
                context.sunTo = obj.toTime ? obj.toTime : '';
                break;
        }
    });

    let result = Handlebars.templates.userEditTuitionHours(context);
    $("#opration_hours_containers").append(result);
}

function addAllTimes(array) {
    // todo - fix the memory leak
    // temporary - let's delete the time and operation first and add new
    $.ajax({
        url: '/tuition/empty/dayAndTimeOfOperation',
        type: 'DELETE',
        data: {_id: TuitionId}
    }).then((data) => {
        console.log(data);
        addDayAndTimeOfOperation('monForm');
        addDayAndTimeOfOperation('tueForm');
        addDayAndTimeOfOperation('wedForm');
        addDayAndTimeOfOperation('thrForm');
        addDayAndTimeOfOperation('friForm');
        addDayAndTimeOfOperation('satForm');
        addDayAndTimeOfOperation('sunForm');
    }).catch(err => {
        console.log(err);
    });
}

function addDayAndTimeOfOperation(id) {
    // data is in Form
    // get the data and send it in post request
    const promise = $.ajax({
        url: '/tuition/add/dayAndTimeOfOperation/' + TuitionId,
        type: 'POST',
        data: $('#' + id).serialize()
    });

    promise.then((data) => {
        // alert("time updated successfully")
    }).catch((err) => {
        console.log(err);
        alert("time addition failed")
    })
}

function saveDetails(id, nextTab) {
    const form = $('#' + id);
    const formData = new FormData(form[0]);

    const Promise = $.ajax({
        url: '/tuition/' + TuitionId,
        type: 'PUT',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
    });

    Promise.then(() => {
        showNextTab(nextTab);
        // alert('Saved Successfully')
    }).catch((err) => {
        alert('Saving Unsuccessful');
        console.log(err)
    })
}

function showCourses(array) {
    if (!array) {
        return
    }
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
            nextBatch: obj.nextBatch ? obj.nextBatch.split('T')[0] : ''
        };
        context.key.push(newObj);
        counter++;
    });

    let result = Handlebars.templates.userEditTuitionCourses(context);
    $("#coursesContainer").append(result);
}

// id will be set by handleBars
// first argument is title of course you want to delete (for server side), second is id of the card you want to delete (for client side)
function deleteCourse(title, id) {

    const promise = $.ajax({
        url: '/tuition/delete/courses/' + TuitionId,
        type: 'DELETE',
        data: {
            title: title
        }
    });

    promise.then(() => {
        $('#' + id).remove();
        alert("course deleted successfully")
    }).catch((err) => {
        console.log(err);
        alert("course deletion failed")
    });
}

function addCourse() {
    // data is in Form
    // form id is newCourse
    // get the data and send it in post request
    const AddedCourse = $.ajax({
        url: '/tuition/add/courses/' + TuitionId,
        type: 'POST',
        data: $('#newCourse').serialize()
    });

    AddedCourse.then((data) => {
        window.location.assign(`User-editTuition.html?a=${data._id}&tab=courses`);
        // alert("course added successfully")
    }).catch((err) => {
        console.log(err);
        alert("course addition failed")
    })
}

function showResults(array) {
    if (!array) {
        return
    }
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

    let result = Handlebars.templates.userEditTuitionResults(context);
    $("#resultsContainer").append(result);

}

function addResult() {
    const form = $('#newResult');
    const formData = new FormData(form[0]);
    // data is in Form
    // form id is newCourse
    // get the data and send it in post request
    const promise = $.ajax({
        url: '/tuition/add/bragging/' + TuitionId,
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
    });

    promise.then((data) => {
        // alert("result added successfully");
        window.location.assign(`User-editTuition.html?a=${data._id}&tab=results`);
    }).catch((err) => {
        console.log(err);
        alert("result addition failed")
    })
}

function deleteResult(title, id) {

    const promise = $.ajax({
        url: '/tuition/delete/bragging/' + TuitionId,
        type: 'DELETE',
        data: {
            title: title
        }
    });

    promise.then((data) => {
        alert("result deleted successfully")
    }).catch((err) => {
        console.log(err);
        alert("result deletion failed")
    });

    $('#' + id).remove();
}

function showFaculty(array) {
    if (!array) {
        return
    }
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

    let result = Handlebars.templates.userEditTuitionFaculty(context);
    $("#facultyContainer").append(result);

}

function addFaculty() {
    const form = $('#newFaculty');
    const formData = new FormData(form[0]);
    // data is in Form
    // form id is newFaculty
    // get the data and send it in post request
    const promise = $.ajax({
        url: '/tuition/add/team/' + TuitionId,
        type: 'POST',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
    });

    promise.then((data) => {
        // alert("Faculty added successfully")
        window.location.assign(`User-editTuition.html?a=${data._id}&tab=faculty`);
    }).catch((err) => {
        console.log(err);
        alert("Faculty addition failed")
    })
}

function deleteFaculty(name, id) {

    const promise = $.ajax({
        url: '/tuition/delete/team/' + TuitionId,
        type: 'DELETE',
        data: {
            name: name
        }
    });

    promise.then((data) => {
        alert("faculty deleted successfully")
    }).catch((err) => {
        console.log(err);
        alert("faculty deletion failed")
    });

    $('#' + id).remove();
}

function showNextTab(idOfNextTab) {
    $(`[href="#${idOfNextTab}"]`).tab('show');
    //scroll 100 pixels
    document.body.scrollTop = document.documentElement.scrollTop = 150;
}