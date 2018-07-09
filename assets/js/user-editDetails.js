const promise = $.ajax({
    url: 'http://localhost:6868/user/check',
});
promise.then((data) => {
    userData = data;
    if (data == 'LogIn') {
        window.location.replace('./login-page.html');
    }


    let profilePicContainer = $('#profilePicContainer');
    let pic = '';
    if (data.img_userProfilePic === '' || data.img_userProfilePic === undefined) {
        pic = `<img src="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png" alt="...">`;
    } else {
        pic = `<img src="${data.img_userProfilePic}" alt="..." class="image profilePic rounded w-100">`;
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


function editUser(id) {
    const editUserPromise = $.ajax({
        url: 'http://localhost:6868/user/' + userData._id,
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
