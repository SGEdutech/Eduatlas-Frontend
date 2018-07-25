let url_string = location.href; //window.location.href
let url = new URL(url_string);
let queryId = url.searchParams.get("_id");
let isClaimed = false;

$.ajax({
    url: '/tuition',
    data: {_id: queryId}
}).then(updateThePage);

function updateThePage(data) {

    getReviews(data.reviews);
    getRelatedListing(data.city);
    getPopularListing(data.city);

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
        $('#cover_image').attr("src", "/assets/img/cover.jpg");
    } else {
        $('#cover_image').attr('src', 'images/' + data.img_tuitionCoverPic);

    }

    getGeocode(data.addressLine1 + ', ' + data.addressLine2 + ',' + data.city + ',' + data.district + ',' + data.state)

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
    if (array === undefined || array === []) {
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
            nextBatch: obj.nextBatch ? obj.nextBatch.split('T')[0] : ''
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
    let promise = $.ajax({
        url: '/tuition/search',
        data: {
            city: JSON.stringify({
                search: city,
                fullText: true
            }),
            demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category',
            limit: 3,
            skip: 0,
            sortBy: ''
        }
    });

    let result = '';
    let context = {
        name: "Tuition Name",
        state: '',
        description: '',
        primaryNumber: "",
        // rating: "2.5",
        // ifAd: "",
        // coverPic: "",
        _id: "",
    };

    promise.then((data) => {
        if (data === undefined) {
            return
        }
        if (data.length === 0) {

        } else {
            data.forEach(obj => {
                context._id = obj._id;
                context.name = obj.name;
                context.description = obj.description;
                context.state = obj.state;
                context.primaryNumber = obj.primaryNumber;
                result += `<div class="col-md-4">${template.listgoCard(context)}</div>`
            });
            $("#relatedTuitionContainer").append(result);
            //send address to get geo code
        }

    }).catch(err => {
        console.log(err);
    });
}

function getPopularListing(city) {
    if (!city) {
        return
    }

    // todo - fix Algorithm to get related listing
    // maybe add server side route to get this
    let promise = $.ajax({
        url: '/tuition/search',
        data: {
            city: JSON.stringify({
                search: city,
                fullText: true
            }),
            demands: 'name addressLine1 addressLine2 city state primaryNumber email img_coverPic category',
            limit: 2,
            skip: 0,
            sortBy: 'views'
        }
    });

    let result = '';
    let context = {
        name: "Tuition Name",
        state: '',
        description: '',
        primaryNumber: "",
        // rating: "2.5",
        // ifAd: "",
        // coverPic: "",
        _id: "",
    };

    promise.then((data) => {
        if (data === undefined) {
            return
        }
        if (data.length === 0) {

        } else {
            data.forEach(obj => {
                sanatiseData(obj);
                context._id = obj._id;
                context.name = obj.name;
                context.state = obj.state;
                context.primaryNumber = obj.primaryNumber;
                result += `<div class="col-md-12">${template.listgoCard(context)}</div>`
            });
            $("#sponsoredPopular").append(result);
            //send address to get geo code
        }

    }).catch(err => {
        console.log(err);
    });


}

// let lat, lng;

function getGeocode(address) {
    const promise = $.ajax({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyC8fHii6yy5NABpk8Isz-FRkYEdQHYvLg4`,
    });
    promise.then(data => {
        lat = data.results[0].geometry.location.lat;
        lng = data.results[0].geometry.location.lng;
        console.log(lat);
        initMap(lat, lng)
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

function sanatiseData(tuition) {
    if (tuition.description && tuition.description.length > 70) {
        tuition.description = tuition.description.slice(0, 67) + '...';
    }
}

function getReviews(reviewsArray) {
    console.log(reviewsArray);
    let toAppend = '';
    reviewsArray.forEach(obj => {
        toAppend += `
        <div class="card col-12" style="">
            <div class="card-body">
                <h4 class="card-title">${obj.rating}/5</h4>
                <p class="card-text">${obj.description}</p>
            </div>
        </div>`
        //
    });
    $('#savedReviews').append(toAppend)
}