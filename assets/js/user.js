let userData;

$(function () {
    // todo - fetch cookie and send to server to get user details

    // dummy user data
    const promise = $.ajax({
        url: 'http://localhost:6868/user/',
        data: {
            _id: '5b34c2558ec5d93035aa4e0a'
        }
    });

    promise.then((data) => {
        let profilePicContainer = $('#userProfilePicContainer');
        let userIdContainer = $('#userIdContainer');
        let firstNameInput = $('#firstName');
        let primaryEmailInput = $('#primaryEmail');
        userData = data;
        console.log(data);
        // put fetched image path in src of image and add
        let pic = `<img src="https://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png" alt="...">`;
        profilePicContainer.html(pic);

        userIdContainer.html(data._id);

        firstNameInput.val(data.firstName);
        primaryEmailInput.val(data.primaryEmail);

    });

});

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
}
