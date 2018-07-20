let url_string = location.href; //window.location.href
let url = new URL(url_string);
let queryId = url.searchParams.get("_id");
let isClaimed = false;

$.ajax({
    url: '/tuition',
    data: {_id: queryId}
}).then(updateThePage);

function updateThePage(data) {

    getRelatedListing(data.city);

    if (data.claimedBy === undefined || data.claimedBy === '') {

        const promise = $.ajax({
            url: '/user/check',
        });
        promise.then((data) => {
            if (data === 'LogIn') {
                $('#claimContainer').append(`<button id="" type="button" class="btn btn-block btn-info" data-toggle="modal" data-target="#loginModal">
                        Claim This Page
                    </button>`)
            } else {
                $('#claimContainer').append(`<button id="" type="button" class="btn btn-block btn-info" data-toggle="modal" data-target="#claimModal">
                        Claim This Page
                    </button>`)
            }
        });
    } else {
        isClaimed = true;
        $('#claimContainer').append(`<button type="button" class="btn btn-block btn-info">
                        <i class="material-icons">
                            done
                        </i>
                        Claimed
                    </button>`)
    }

    if (data.img_tuitionCoverPic === undefined || data.img_tuitionCoverPic === '') {
        $('#cover_image').css('background-image', 'url(/assets/img/bg6.jpg)');
    } else {
        $('#cover_image').css('background-image', 'url(images/' + data.img_tuitionCoverPic + ')');

    }

    $('#idOfTuition').val(data._id);
    $('#tuition_name').html(data.name);
    $('#address').html(data.addressLine1 + ', ' + data.addressLine2);
    $('#phone').html(data.primaryNumber);
    $('.email').html(data.email);
    $('#description').html(data.description);
    $('#contact_person').html(data.contactPerson);
    $('#primary_number').html(data.primaryNumber);
    $('#alternate_number').html(data.secondaryNumber);
    $('#website').html(data.website);
    if (data.rating === undefined || data.rating === '') {
        $('#rating').html('2.5');
    } else {
        $('#rating').html(data.rating);
    }

    showDaynTime(data.dayAndTimeOfOperation);
    showCourses(data.courses);
    showResults(data.bragging);
    showFaculty(data.team);
    showSocialLinks(data.fbLink, data.instaLink, data.youtubeLink);

    doTheTemplateStuff(data);
}

function showDaynTime(array) {
    if (array === undefined || array === []){
        return;
    }
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
                context.monFrom = obj.fromTime;
                context.monTo = obj.toTime;
                break;
            case 'tuesday':
                context.tueFrom = obj.fromTime;
                context.tueTo = obj.toTime;
                break;
            case 'wednesday':
                context.wedFrom = obj.fromTime;
                context.wedTo = obj.toTime;
                break;
            case 'thursday':
                context.thrFrom = obj.fromTime;
                context.thrTo = obj.toTime;
                break;
            case 'friday':
                context.friFrom = obj.fromTime;
                context.friTo = obj.toTime;
                break;
            case 'saturday':
                context.satFrom = obj.fromTime;
                context.satTo = obj.toTime;
                break;
            case 'sunday':
                context.sunFrom = obj.fromTime;
                context.sunTo = obj.toTime;
                break;
        }
    });
    let result = Handlebars.templates.tuitionOperationHours(context);
    $("#opration_hours_containers").append(result);
}

function showCourses(array) {
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
    let result1 = Handlebars.templates.tuitionFacility({facilities: facilityArr});
    $('#facilities_container').html(result1);

    const categoryArr = data.category ? data.category.split(',') : [];
    let result2 = Handlebars.templates.tuitionCategory({categories: categoryArr});
    $('#category_container').html(result2);
}

function getRelatedListing(city) {
    if (!city) {
        return
    }

    // todo - fix Algorithm to get related listing
    // maybe add server side route to get this
    const promise = $.ajax({
        url: '/tuition?city=' + city,
        method: 'GET'
    });

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

        if (!Array.isArray(data)) {
            // for (keys in data) {
            //     if (data.hasOwnProperty(keys)) {
            context.rating = data.rating ? data.rating : "2.5";
            context.id = data._id;
            context.Name = data.name;
            context.Address = `${data.addressLine1},${data.addressLine2},${data.city},${data.state}`;
            context.Phone = data.primaryNumber;
            context.Email = data.email;
            context.coverPic = data.img_tuitionCoverPic ? 'images/' + data.img_tuitionCoverPic : 'assets/img/tuition2.jpg';
            context.Category = data.category;
            let result = Handlebars.templates.tuitionCardCol4(context);
            $("#relatedTuitionContainer").append(result);

            //send address to get geo code
            getGeocode(context.Address)
            // }
            // }
        }

    }).catch(err => {
        console.log(err);
    });


}

let lat, lng;

function getGeocode(address) {
    const promise = $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC8fHii6yy5NABpk8Isz-FRkYEdQHYvLg4`,
    });
    promise.then(data => {
        lat = data.results[0].geometry.location.lat;
        lng = data.results[0].geometry.location.lng;
        console.log(lat + '-' + lng)
    })
}

function claimListing() {
    let user = {};
    //first check if user is logged-in
    $.ajax({
        url: '/user/check',
    }).then(data => {
        user = data;
        //now update tuition by adding claimedBy
        $.ajax({
            url: '/tuition/' + queryId,
            type: 'PUT',
            data: {claimedBy: user._id}
        }).then(data => {
            console.log("tuition updated");
        });
        //now update user by inserting id of tuition to tuitionsOwned array
        $.ajax({
            url: '/user/add/tuitionsOwned/' + user._id,
            type: 'POST',
            data: {string: queryId}
        }).then(data => {
            console.log('user updated');
            window.location.assign('User-dashboard.html')
        })
    }).catch(err => {
        console.log(err);
        alert('failed')
    })
}

function submitIssue(id) {
    //for submitting issues
    $.ajax({
        url: '/issue',
        method: 'POST',
        data: $('#' + id).serialize()
    }).then((data) => {
        alert('Issue submitted successful. ISSUE ID =' + data._id)
    }).catch(err => {
        console.log(err);
        alert('failed')
    })
}