// todo - fetch cookie and send to server to get user details

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
        window.location.assign('./login-page.html');
    });
}

tryToGetData();


function getUserOwnedTuition(ids) {
    if (ids == undefined || ids == [] || ids.length===0) {
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
            context.rating = data.rating ? data.rating : "2.5";
            context.id = data._id;
            context.Name = data.name;
            context.Address = `${data.addressLine1},${data.addressLine2},${data.city},${data.state}`;
            context.Phone = data.primaryNumber;
            context.Email = data.email;
            context.coverPic = 'assets/img/tuition2.jpg';
            context.Category = data.category;
            let result = Handlebars.templates.userDashboardTuitionCard(context);
            $("#userOwnedTuitionContainer").append(result);

        }).catch(err => {
            console.log(err);
        });

    });

}

function logout() {
    $.ajax({
        url: '/auth/local/logout',
        method: 'GET'
    }).then(data => {
        if (data.done) {
            window.location.assign('/');
        }
    }).catch(err => {
        console.log(err);
    })
}

function editUserProfile() {
    const promise = $.ajax({
        url: '/user/check',
    });
    promise.then((data) => {
        userData = data;
        if (data == 'LogIn') {
            window.location.replace('./login-page.html');
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
        window.location.replace('./login-page.html');
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

