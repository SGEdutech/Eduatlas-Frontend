let url_string = location.href; //window.location.href
let url = new URL(url_string);
let queryId = url.searchParams.get("_id");

$.ajax({
    url: '/tuition',
    data: {_id: queryId}
}).then(updateThePage);

function updateThePage(data) {

    showCourses(data.courses);
    showResults(data.bragging);
    showFaculty(data.team);
    showGallery(data.gallery);
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
    let result = template.tuitionCourses(context);
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

    let result = template.tuitionResult(context);
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

    let result = template.tuitionFaculty(context);
    $("#facultyContainer").append(result);

}

function showGallery(array) {
    if (array === undefined || array === []) {
        return
    }
    let result = '';
    array.forEach(imgPath => {
        result += template.galleryImg({path: imgPath});
    });
    $("#gallery").append(result);
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
