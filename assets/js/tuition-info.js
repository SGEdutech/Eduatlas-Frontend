const tuitionInfo = (() => {
    let queryObj;

    let $tuitionName;
    let $address;
    let $primaryNumber;
    let $email;
    let $description;
    let $contactPerson;
    let $primaryNumber2;
    let $secondaryNumber;
    let $website;
    let $savedReviews;
    let $reviewRationInput;
    let $star1, $star2, $star3, $star4, $star5;
    let $coverImage;
    let $claimButton;
    let $sponsoredPopular;
    let $openNow;
    let $verifiedBadge;
    let $relatedTuitionContainer;
    let $categoryPills;
    let $opration_hours_containers;
    let $facilities_container;
    let $category_container;
    let $linkContainer;


    function cache() {
        $tuitionName = $('.container #tuition_name');
        $address = $('.container #address');
        $primaryNumber = $('.container #phone');
        $email = $('.container #email');
        $description = $('.container #description');
        $contactPerson = $('.container #contact_person');
        $primaryNumber2 = $('.container #primary_number');
        $secondaryNumber = $('.container #alternate_number');
        $website = $('.container #website');
        $savedReviews = $('#savedReviews');
        $reviewRationInput = $('#reviewRatingInput');
        $star1 = $('#star1');
        $star2 = $('#star2');
        $star3 = $('#star3');
        $star4 = $('#star4');
        $star5 = $('#star5');
        $coverImage = $('#cover_image');
        $claimButton = $('#claimButton');
        $sponsoredPopular = $("#sponsoredPopular");
        $openNow = $('#openNow');
        $verifiedBadge = $('#verifiedBadge');
        $relatedTuitionContainer = $("#relatedTuitionContainer");
        $categoryPills = $('#categoryPills');
        $opration_hours_containers = $("#opration_hours_containers");
        $facilities_container = $('#facilities_container');
        $category_container = $('#category_container');
        $linkContainer = $("#linkContainer");
    }

    function getTuitionInfo() {
        const url = '/tuition';
        const data = {_id: queryObj._id};
        return $.ajax({url, data});
    }

    function getReviews(reviewsArray) {
        if (reviewsArray === undefined || reviewsArray === []) {
            return;
        }
        let avgRating = helperScripts.calcAverageRating(reviewsArray);
        changeColorOfStars(avgRating);
        let toAppend = '';
        reviewsArray.forEach(obj => {
            toAppend += template.tuitionReviews(obj)
        });
        $savedReviews.append(toAppend)
    }

    function changeColorOfStars(rating) {
        if (rating === -1) {
            rating = 2.5;
        }
        let array = [$star1, $star2, $star3, $star4, $star5];
        for (let i = 0; i <= rating - 1; i++) {
            array[i].css('color', '#00bcd4')
        }
    }

    function updateBasicInfo(tuitionInfoObj) {

        $tuitionName.html(tuitionInfoObj.name);
        $address.html(tuitionInfoObj.addressLine1 + ',' + tuitionInfoObj.addressLine2 + ',' + tuitionInfoObj.city + ',' + tuitionInfoObj.pin);
        $primaryNumber.html(tuitionInfoObj.primaryNumber);
        $email.html(tuitionInfoObj.email);
        $description.html(tuitionInfoObj.description);
        $contactPerson.html(tuitionInfoObj.contactPerson);
        $primaryNumber2.html(tuitionInfoObj.secondaryNumber);
        $secondaryNumber.html(tuitionInfoObj.secondaryNumber);
        $website.html(tuitionInfoObj.website);
    }

    function updateCoverImage(tuitionCoverPic) {
        if (tuitionCoverPic === undefined || tuitionCoverPic === '') {
            $coverImage.attr("src", "/assets/img/fourgirls.jpeg");
        } else {
            $coverImage.attr('src', 'images/' + tuitionCoverPic);
        }
    }

    function updateClaimButtonHTML(claimedBy) {
        if (claimedBy) {
            $claimButton.html(`<i class="material-icons">
                                done
                            </i>
                            Claimed`);
            $claimButton.removeAttr('data-target');
            $claimButton.removeAttr('data-toggle');
        } else {
            $claimButton.html(`Claim This Page`);
        }
    }

    function updateClaimButtonModal(userInfo) {
        if (userInfo) {
            $claimButton.attr('data-toggle', 'modal');
            $claimButton.attr('data-target', '#claimModal');
        } else {
            $claimButton.attr('data-toggle', 'modal');
            $claimButton.attr('data-target', '#loginModal');
        }
    }

    function updateOpenNow(data) {
        helperScripts.openNowInit(data);
        if (data.openedNow) {
            $openNow.append(`<span class="badge badge-pill badge-success">open now</span>`)
        }
    }

    function updateVerifiedBadge(claimedBy) {
        if (claimedBy === undefined || claimedBy === '') {
        } else {
            $verifiedBadge.removeAttr('hidden')
        }
    }

    function updateCategoryPills(category) {
        if (category === undefined || category === '') {
            // do nothing
        } else {
            // show pills
            let toAppend = '';
            category.split(',').forEach(category => {
                toAppend += `<span class="badge badge-pill badge-info">${category}</span>`
            });

            $categoryPills.append(toAppend);
        }
    }

    function updateFacilities(facilities) {
        const facilityArr = facilities ? facilities.split(',') : [];
        let result1 = template.tuitionFacility({facilities: facilityArr});
        $facilities_container.html(result1);
    }

    function updateCategories(categories) {
        const categoryArr = categories ? categories.split(',') : [];
        let result2 = template.tuitionCategory({categories: categoryArr});
        $category_container.html(result2);
    }

    function updateSocialLinks(f, i, y) {
        let context = {
            // twitter: t,
            facebook: f == "" ? '#' : f,
            instagram: i == "" ? '#' : i,
            youtube: y == "" ? '#' : y
        };

        let result = template.tuitionLinks(context);
        $linkContainer.append(result);
    }

    function updateDaynTime(array) {
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
        let result = template.tuitionOperationHours(context);
        $opration_hours_containers.append(result);
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
                demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews',
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
                    obj.averageRating = helperScripts.calcAverageRating(obj.reviews);
                    obj.averageRating = obj.averageRating === -1 ? 2.5 : obj.averageRating;
                    result += template.smoothCardHomePage(obj);
                });
                $relatedTuitionContainer.append(result);
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
                demands: 'name addressLine1 addressLine2 city state primaryNumber email category description claimedBy dayAndTimeOfOperation reviews',
                limit: 2,
                skip: 0,
                sortBy: 'views'
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
                    obj.averageRating = helperScripts.calcAverageRating(obj.reviews);
                    obj.averageRating = obj.averageRating === -1 ? 2.5 : obj.averageRating;
                    result += template.smoothCardHomePage(obj);
                });
                $sponsoredPopular.append(result);
            }

        }).catch(err => {
            console.log(err);
        });


    }

    function render(obj) {
        queryObj = obj;
        cache();
        getTuitionInfo()
            .then(tuitionInfoObj => {
                PubSub.publish('address.ready', tuitionInfoObj.addressLine1 + ',' + tuitionInfoObj.addressLine2 + ',' + tuitionInfoObj.city + ',' + tuitionInfoObj.state);

                updateBasicInfo(tuitionInfoObj);
                updateOpenNow(tuitionInfoObj);
                updateCoverImage(tuitionInfoObj.img_tuitionCoverPic);
                updateClaimButtonHTML(tuitionInfoObj.claimedBy);
                updateVerifiedBadge(tuitionInfoObj.claimedBy);
                updateFacilities(tuitionInfoObj.facilities);
                updateCategories(tuitionInfoObj.category);
                getReviews(tuitionInfoObj.reviews);
                getPopularListing(tuitionInfoObj.city);
                updateCategoryPills(tuitionInfoObj.category);
                updateDaynTime(tuitionInfoObj.dayAndTimeOfOperation);
                updateSocialLinks(tuitionInfoObj.fbLink, tuitionInfoObj.instaLink, tuitionInfoObj.youtubeLink);
                // getRelatedListing(tuitionInfoObj.city);
            })
            .catch(err => console.error(err));
    }

    return {render, updateClaimButtonModal}
})();