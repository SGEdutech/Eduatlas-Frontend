// todo - fetch cookie and send to server to get user details

// dummy user data
function tryToGetData() {
    const promise = $.ajax({
        url: 'http://localhost:6868/user/',
    });


    promise.then((data) => {
        if (data == 'LogIn') {
            window.location.replace('./login-page.html');
        }
        getUserOwnedTuition(data.tuitionsOwned);

        let profilePicContainer = $('#userProfilePicContainer');
        let userIdContainer = $('#userIdContainer');
        let firstNameInput = $('#firstName');
        let primaryEmailInput = $('#primaryEmail');
        // console.log(data);

        // put fetched image path in src of image and add
        let pic = `<img src="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png" alt="...">`;
        profilePicContainer.html(pic);

        userIdContainer.html(data.firstName);

        firstNameInput.val(data.firstName);
        primaryEmailInput.val(data.primaryEmail);

    }).catch((err) => {
        console.log(err);
        window.location.replace('./login-page.html');
    });
}

tryToGetData();


function getUserOwnedTuition(ids) {
    let idArray = ids.split(',');

    idArray.forEach((tuitionId) => {

        // todo - fix Algorithm to get related listing
        // maybe add server side route to get this
        const promise = $.ajax({
            url: 'http://localhost:6868/tuition?_id=' + tuitionId,
            method: 'GET'
        });

        let source = $("#entry-template2").html();
        let template = Handlebars.compile(source);
        let context = {
            Name: "Tuition Name",
            rating: "",
            ifAd: "",
            Address: "address",
            Phone: "phone",
            Email: "email",
            coverPic: "",
            Category: "category",
            id: "#"
        };

        promise.then((data) => {

            context.id = data._id;
            context.Name = data.name;
            context.Address =`${data.addressLine1},${data.addressLine2},${data.city},${data.state}`;
            context.Phone = data.primaryNumber;
            context.Email = data.email;
            context.coverPic = data.img_coverPic;
            context.Category = data.category;
            $("#userOwnedTuitionContainer").append(template(context));

        }).catch(err => {
            console.log(err);
        });

    });


}

/*

function editUser(id) {
    const editUserPromise = $.ajax({
        url: 'http://localhost:6868/user/' + userData._id,
        type: 'PUT',
        data: $('#' + id).serialize()
    });

    editUserPromise.then(data => {
        alert("Saved SuccessFully")
    }).catch((err) => {
        console.log(err);
        alert("failed")
    })
}*/
