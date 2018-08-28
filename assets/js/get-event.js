const getEvent = (() => {
    let queryObj;
    let $name;
    let $dateButton;
    let $category;
    let $ageGroupButton;
    let $lastDateRegistration;
    let $descriptionContainer;
    let $officialSite;
    let $contactPersonName, $contactPersonPhone, $contactPersonEmail;
    let $addressLines, $city, $state;
    let $fromDate, $toDate, $fromTime, $toTime;
    let $attending, $notAttending, $maybeAttending;
    let $coverImage;
    let $address, $primaryNumber, $email;
    let $sponsoredPopular, $relatedEventContainer;

    function cache() {
        $name = $('#name');
        $address = $('.container #address');
        $primaryNumber = $('.container #phone');
        $email = $('.container #email');
        $sponsoredPopular = $("#sponsoredPopular");
        $relatedEventContainer = $("#relatedEventContainer");
        $dateButton = $('#date_button');
        $category = $('#category');
        $ageGroupButton = $('#age_group_button');
        $lastDateRegistration = $('#last_date_registration');
        $descriptionContainer = $('#desc_container');
        $officialSite = $('#website');
        $contactPersonName = $('#contact_person_name');
        $contactPersonEmail = $('#contact_person_email');
        $contactPersonPhone = $('#contact_person_phone');
        $addressLines = $('#addressLines');
        $coverImage = $('#cover_image');
        $city = $('#city');
        $state = $('#state');
        $fromDate = $('#fromDate');
        $toDate = $('#toDate');
        $fromTime = $('#fromTime');
        $toTime = $('#toTime');
        $attending = $('#Attending');
        $notAttending = $('#notAttending');
        $maybeAttending = $('#maybeAttending')
    }

    function bindEvents() {

    }

    function getInfoFromDatabase() {
        const url = '/event';
        const data = {
            _id: queryObj._id
        };
        return $.ajax({
            url,
            data
        });
    }

    function getGoingUsers(array) {
        let returnPromiseArray = [];
        array.forEach(userId => {
            const url = '/user';
            const data = {
                _id: userId
            };
            returnPromiseArray.push($.ajax({
                url,
                data
            }))
        });
        return returnPromiseArray;
    }

    function updateCoverImage(coverPic) {
        if (coverPic === undefined || coverPic === '') {
            $coverImage.attr("src", "/assets/img/event2.png");
        } else {
            $coverImage.attr('src', 'images/' + coverPic);
        }
    }

    function updateCategories(categories) {
        const categoryArr = categories ? categories.split(',') : [];
        let result2 = template.tuitionCategory({
            categories: categoryArr
        });
        $category.html(result2);
    }

    function getPopularListing(city, typeOfInfo) {
        if (!city) {
            return
        }
        // todo - fix Algorithm to get related listing
        // maybe add server side route to get this

        let promise;

        if (typeOfInfo === 'event') {
            promise = $.ajax({
                url: '/event/search',
                data: {
                    city: JSON.stringify({
                        search: city,
                        fullText: true
                    }),
                    limit: 2,
                    skip: 0,
                    sortBy: 'views'
                }
            });
        }

        let result = '';

        promise.then((data) => {
            if (data === undefined) {
                return
            }
            if (data.length === 0) {

            } else {
                data.forEach(obj => {
                    helperScripts.openNowInit(obj);
                    obj.typeOfInfo = typeOfInfo;
                    obj.averageRating = helperScripts.calcAverageRating(obj.reviews);
                    obj.averageRating = obj.averageRating === -1 ? 2.5 : obj.averageRating;
                    obj.hideFooter = true;
                    obj.hideBody = true;
                    if (obj.category) {
                        obj.categories = obj.category.split(',')
                    }
                    result += template.smoothCardHomePage(obj);
                });
                $sponsoredPopular.append(result);
            }

        }).catch(err => {
            console.log(err);
        });
    }

    function getRelatedListing(city, typeOfInfo) {
        if (!city) {
            return
        }
        // todo - fix Algorithm to get related listing
        // maybe add server side route to get this
        let promise = $.ajax({
            url: `/${typeOfInfo}/search`,
            data: {
                city: JSON.stringify({
                    search: city,
                    fullText: true
                }),
                limit: 3,
                skip: 0,
                sortBy: ''
            }
        });

        let result = '';

        promise.then((data) => {
            if (data === undefined) {
                return
            }
            if (data.length === 0) {

            } else {
                data.forEach(obj => {
                    helperScripts.openNowInit(obj);
                    obj.typeOfInfo = typeOfInfo;
                    obj.averageRating = helperScripts.calcAverageRating(obj.reviews);
                    obj.averageRating = obj.averageRating === -1 ? 2.5 : obj.averageRating;
                    obj.hideBody = true;
                    obj.hideFooter = true;
                    obj.col4 = true;
                    if (obj.category) {
                        obj.categories = obj.category.split(',')
                    }
                    result += template.smoothCardHomePage(obj);
                });
                $relatedEventContainer.append(result);
            }

        }).catch(err => {
            console.log(err);
        });
    }

    function render(obj) {
        queryObj = obj;
        cache();
        getInfoFromDatabase().then((eventData) => {
            console.log(eventData);
            PubSub.publish('address.ready', eventData.addressLine1 + ',' + eventData.addressLine2 + ',' + eventData.city + ',' + eventData.state);
            let fromDateObj = helperScripts.getDateObj(eventData.fromDate);
            let toDateObj = helperScripts.getDateObj(eventData.toDate);
            let fromToDate = fromDateObj.date + '/' + fromDateObj.month + ' To ' + toDateObj.date + '/' + toDateObj.month;
            let lastDateRegObj = helperScripts.getDateObj(eventData.lastDateRegistration);

            $name.html(eventData.name);
            $dateButton.html(fromToDate);
            $ageGroupButton.html(eventData.fromAge + ' TO ' + eventData.toAge);
            if (lastDateRegObj) {
                $lastDateRegistration.html(lastDateRegObj.date + '/' + lastDateRegObj.month + '/' + lastDateRegObj.year);
            }
            updateCategories(eventData.category);
            updateCoverImage(eventData.img_eventCoverPic);
            getPopularListing(eventData.city, "event");
            getRelatedListing(eventData.city, "event");
            $address.html(eventData.addressLine1 + ',' + eventData.addressLine2 + ',' + eventData.city + ',' + eventData.pin);
            $primaryNumber.html(eventData.organiserPhone);
            $email.html(eventData.organiserEmail);
            $descriptionContainer.html(eventData.description);
            $officialSite.html(eventData.website);
            $contactPersonName.html(eventData.organiserName);
            $contactPersonPhone.html(eventData.organiserPhone);
            $contactPersonEmail.html(eventData.organiserEmail);
            $addressLines.html(eventData.addressLine1 + ',' + eventData.addressLine2);
            $city.html(eventData.city + ',' + eventData.pin);
            $state.html(eventData.state);
            $fromDate.html(fromDateObj.date + '/' + fromDateObj.month + '/' + fromDateObj.year);
            $toDate.html(toDateObj.date + '/' + toDateObj.month + '/' + toDateObj.year);
            $fromTime.html(eventData.fromTime);
            $toTime.html(eventData.toTime);
            $attending.html(eventData.going);
            $notAttending.html(eventData.notGoing);
            $maybeAttending.html(eventData.mayBeGoing);
            getGoingUsers(eventData.goingUsers).forEach(promise => {
                promise.then(userData => {
                    console.log(userData);
                })
            })
        })

    }

    return {
        render
    }
})();