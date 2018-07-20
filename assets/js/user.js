let url_string = location.href; //window.location.href
let url = new URL(url_string);
$('#addTuitionSubMenu').hide();
let Tab = url.searchParams.get("tab");
if (Tab === undefined || Tab === '') {
// do nothing
} else {
    // open the tab
    if (Tab == 'addTuition')
        showNextTab('tab3')
}
let userData;

// dummy user data
function tryToGetData() {
    const promise = $.ajax({
        url: '/user/check',
    });


    promise.then((data) => {
        userData = data;
        getUserOwnedTuition(data.tuitionsOwned);

        let profilePicContainer = $('#userProfilePicContainer');
        let userIdContainer = $('#userIdContainer');

        // put fetched image path in src of image and add
        let pic = '';
        if (data.img_userProfilePic === '' || data.img_userProfilePic === undefined) {
            pic = `<img src="/assets/img/logo.png" alt="...">`;
        } else {
            pic = `<img src="images/${data.img_userProfilePic}" alt="..." class="image profilePic rounded w-100">`;
        }

        profilePicContainer.html(pic);

        userIdContainer.html(data.firstName);

    }).catch((err) => {
        console.log(err);
        window.location.assign('/');
    });
}

tryToGetData();


function getUserOwnedTuition(ids) {
    if (ids == undefined || ids == [] || ids.length === 0) {
        console.log("hi");
        let card = $('#userOwnedTuitionCard');
        card.empty();
        card.append(`<h3 class="card-title"> Welcome to Eduatlas </h3><p>Please add/claim your Institute</p>`)

        return
    }
    ids.forEach((tuitionId) => {

        const promise = $.ajax({
            url: '/tuition?_id=' + tuitionId,
            method: 'GET',
            demands: 'name addressLine1 addressLine2 city state primaryNumber email category'
        });

        let context = {
            _id: '',
            name: "Tuition Name",
            state: '',
            description: '',
            primaryNumber: "phone",
            rating: "2.5",
            ifAd: "",
            coverPic: "",
            Category: "category",
        };

        promise.then((data) => {
            // context.rating = data.rating ? data.rating : "2.5";
            context._id = data._id;
            context.name = data.name;
            context.state = data.state;
            context.primaryNumber = data.primaryNumber;
            context.description = data.description;
            let result = template.listgoCard(context);
            result =
                `<div class="col-4">
                    <div class="row">
                        ${result}
                    </div>
                    <div class="row justify-content-around mb-md-4">
                        <a href="User-editTuition.html?a=${context._id}" class="btn btn-info">edit</a>
                        <a onclick="unclaimListing('${context._id}')" class="btn btn-danger">unclaim</a>
                    </div>
                 </div>`;

            $("#userOwnedTuitionContainer").append(result);

        }).catch(err => {
            console.log(err);
        });

    });

}

function logout() {
    $.ajax({
        url: '/auth/local/logout',
        method: 'POST'
    }).then(data => {
        if (data.done) {
            window.location.assign('/');
        }
    }).catch(err => {
        console.log(err);
    })
}

editUserProfile();

function editUserProfile() {
    const promise = $.ajax({
        url: '/user/check',
    });
    promise.then((data) => {
        userData = data;
        if (data == 'LogIn') {
            window.location.assign('/');
        }


        let profilePicContainer = $('#profilePicContainer');
        let pic = '';
        if (data.img_userProfilePic === '' || data.img_userProfilePic === undefined) {
            pic = `<img src="/assets/img/logo.png" alt="...">`;
        } else {
            pic = `<img src="images/${data.img_userProfilePic}" alt="..." class="image profilePic rounded">`;
        }
        profilePicContainer.html(pic);


        /*let source = $("#userProfileInput").html();
        let template = Handlebars.compile(source);*/
        let context = {
            firstName: "",
            middleName: "",
            lastName: "",
            addressLine1: "",
            addressLine2: "",
            city: "",
            district: "",
            state: "",
            country: "",
            pin: "",
            primaryEmail: "",
            secondaryEmail: "",
            phone: "",
            dateOfBirth: "",
            maleChecked: "",
            femaleChecked: "",
            studentChecked: "",
            parentChecked: "",
            instituteChecked: "",
        };

        context.firstName = data.firstName;
        context.middleName = data.middleName;
        context.lastName = data.lastName;
        context.addressLine1 = data.addressLine1;
        context.addressLine2 = data.addressLine2;
        context.state = data.state;
        context.city = data.city;
        context.district = data.district;
        context.country = data.country;
        context.pin = data.pin;
        context.phone = data.phone;
        context.primaryEmail = data.primaryEmail;
        context.secondaryEmail = data.secondaryEmail;

        if (data.isMale) {
            //if user is male
            context.maleChecked = 'checked'
        } else {
            //if user is female
            context.femaleChecked = 'checked'
        }

        if (data.primaryRole == 'Student') {
            //if user is student
            context.studentChecked = 'checked'
        } else if (data.primaryRole == 'Parent') {
            //if user is parent
            context.parentChecked = 'checked'
        } else {
            //if user is a institute
            context.instituteChecked = 'checked'
        }

        let result1 = Handlebars.templates.userProfileInput(context);
        $("#basicContainer").append(result1);


        /*let sourceSocial = $("#userSocialInput").html();
        let templateSocial = Handlebars.compile(sourceSocial);*/
        let contextSocial = {
            fbLink: "",
            twitterLink: "",
            youtubeLink: "",
            instaLink: "",
            linkedinLink: "",
        };

        contextSocial.fbLink = data.fbLink;
        contextSocial.twitterLink = data.twitterLink;
        contextSocial.youtubeLink = data.youtubeLink;
        contextSocial.instaLink = data.instaLink;
        contextSocial.linkedinLink = data.linkedinLink;

        let result2 = Handlebars.templates.userSocialInput(context);
        $("#userSocialLinksContainer").append(result2);


    }).catch((err) => {
        console.log(err);
        window.location.assign('/');
    });

}

function editUser(id) {
    const editUserPromise = $.ajax({
        url: '/user/' + userData._id,
        type: 'PUT',
        data: $('#' + id).serialize()
    });

    editUserPromise.then(data => {
        console.log(data);
        alert("Saved SuccessFully")
    }).catch((err) => {
        console.log(err);
        alert("failed")
    })
}

const form = $('#userImgForm');

form.submit(e => {
    e.preventDefault();
    const formData = new FormData(form[0]);
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: data => {
            alert('success')
            console.log(data);
        },
        error: err => console.error(err)
    })
});

function showNextTab(idOfNextTab) {
    $(`[href="#${idOfNextTab}"]`).tab('show');
    $('#addTuitionSubMenu').show();
    //scroll 100 pixels
    document.body.scrollTop = document.documentElement.scrollTop = 100;
}

function unclaimListing(tuitionId) {
    let user = {};
    //first check if user is logged-in
    $.ajax({
        url: '/user/check',
    }).then(data => {
        user = data;
        //now update tuition by removing claimedBy
        $.ajax({
            url: '/tuition/empty/claimedBy',
            type: 'DELETE',
            data: {_id: tuitionId}
        }).then(data => {
            console.log("tuition-------");
            console.log(data);
        });
        //now update user by inserting id of tuition to tuitionsOwned array
        //todo - we need to delete from array
        $.ajax({
            url: '/user/delete/tuitionsOwned/' + user._id,
            type: 'DELETE',
            data: {string: tuitionId}
        }).then(data => {
            console.log("user-----");
            console.log(data);
            // window.location.assign('User-dashboard.html')
        })
    }).catch(err => {
        console.log(err);
        alert('failed')
    })
}

$('a[href="#tab3"]').on('show.bs.tab', function (e) {
    $('#addTuitionSubMenu').show();
});

$('a[href="#tab3"]').on('hide.bs.tab', function (e) {
    $('#addTuitionSubMenu').hide();
});

