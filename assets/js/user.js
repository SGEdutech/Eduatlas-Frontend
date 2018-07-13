// todo - fetch cookie and send to server to get user details

let userData;

// dummy user data
function tryToGetData() {
    const promise = $.ajax({
        url: '/user/check',
    });


    promise.then((data) => {
        userData = data;
        if (data == 'LogIn') {
            window.location.replace('./login-page.html');
        }
        console.log(data.tuitionsOwned);
        getUserOwnedTuition(data.tuitionsOwned);

        let profilePicContainer = $('#userProfilePicContainer');
        let userIdContainer = $('#userIdContainer');

        // put fetched image path in src of image and add
        let pic = '';
        if (data.img_userProfilePic === '' || data.img_userProfilePic === undefined) {
            pic = `<img src="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png" alt="...">`;
        } else {
            pic = `<img src="${data.img_userProfilePic}" alt="..." class="image profilePic rounded w-100">`;
        }

        profilePicContainer.html(pic);

        userIdContainer.html(data.firstName);

        console.log('then');
    }).catch((err) => {
        console.log(err);
        console.log('catch');
        window.location.replace('./login-page.html');
    });
}

tryToGetData();


function getUserOwnedTuition(ids) {
    if (ids == undefined || ids === []) {
        return
    }

    ids.forEach((tuitionId) => {

        // todo - fix Algorithm to get related listing
        // maybe add server side route to get this
        const promise = $.ajax({
            url: '/tuition?_id=' + tuitionId,
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
            context.rating = data.rating ? data.rating : "2.5";
            context.id = data._id;
            context.Name = data.name;
            context.Address = `${data.addressLine1},${data.addressLine2},${data.city},${data.state}`;
            context.Phone = data.primaryNumber;
            context.Email = data.email;
            context.coverPic = data.img_coverPic;
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
        if(data.done){
            window.location.replace('/');
        }
    }).catch(err => {
        console.log(err);
    })
}

