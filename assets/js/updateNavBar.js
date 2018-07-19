$(function () {
    const promise = $.ajax({
        url: '/user/check',
    });
    let btnContainer = $('#dynamicUserBtn');
    promise.then((data) => {
        if (data == 'LogIn') {
            btnContainer.append(`<button class="btn btn-info btn-sm" data-toggle="modal" data-target="#loginModal">Login</button>`);
            if ($('#claimModalTrigger')) {
                $('#claimModalTrigger').attr('data-target','#');
            }
        } else {
            if (data.img_userProfilePic === undefined || data.img_userProfilePic === '') {
                btnContainer.append(`<a href="#pablo" class="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
                        <div class="profile-photo-small">
                            <img src="/assets/img/logo.png" alt="Circle Image"
                                 class="rounded img-fluid w-100 h-100">
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <h6 class="dropdown-header">${data.firstName}</h6>
                        <a class="dropdown-item" style="cursor: pointer" href="/User-dashboard.html">Dashboard</a>
                        <a class="dropdown-item" style="cursor: pointer" href="User-addTuition.html" ">
                            Add Institute/Tuition
                        </a>
                        <!--<a class="dropdown-item" style="cursor: pointer" href="#">Add School</a>-->
                        <a class="btn btn-sm btn-outline-info dropdown-item" onclick="logout()">Logout</a>
                    </div>`)
            } else {
                if (data.googleId || data.facebookId) {
                    btnContainer.append(`<a href="#pablo" class="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
                        <div class="profile-photo-small">
                            <img src="${data.img_userProfilePic}" alt="Circle Image"
                                 class="rounded img-fluid w-100 h-100">
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <h6 class="dropdown-header">${data.firstName}</h6>
                        <a class="dropdown-item" style="cursor: pointer" href="/User-dashboard.html">Dashboard</a>
                        <a class="dropdown-item" style="cursor: pointer" href="User-addTuition.html" ">
                            Add Institute/Tuition
                        </a>
                        <!--<a class="dropdown-item" style="cursor: pointer" href="#">Add School</a>-->
                        <a class="btn btn-sm btn-outline-info dropdown-item" onclick="logout()">Logout</a>
                    </div>`)
                } else {
                    btnContainer.append(`<a href="#pablo" class="profile-photo dropdown-toggle nav-link" data-toggle="dropdown">
                        <div class="profile-photo-small">
                            <img src="images/${data.img_userProfilePic}" alt="Circle Image"
                                 class="rounded img-fluid w-100 h-100">
                        </div>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right">
                        <h6 class="dropdown-header">${data.firstName}</h6>
                        <a class="dropdown-item" style="cursor: pointer" href="/User-dashboard.html">Dashboard</a>
                        <a class="dropdown-item" style="cursor: pointer" href="User-dashboard.html?tab=addTuition" ">
                            Add Institute/Tuition
                        </a>
                       <!-- <a class="dropdown-item" style="cursor: pointer" href="#">Add School</a>-->
                        <a class="btn btn-sm btn-outline-info dropdown-item" onclick="logout()">Logout</a>
                    </div>`)
                }

            }
        }
    }).catch((err) => {
        console.log(err);
        // window.location.assign('./login-page.html');
    });

});

function logout() {
    $.ajax({
        url: '/auth/local/logout',
        method: 'GET'
    }).then(data => {
        if (data.done) {
            console.log('hi')
            window.location.assign('/');
        }
    }).catch(err => {
        console.log(err);
    })
}