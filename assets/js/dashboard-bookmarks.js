const dashboardBookmarks = (() => {
    let $userTuitionBookmarks;
    let $userSchoolBookmarks;
    let $userEventBookmarks;

    function cache() {
        $userTuitionBookmarks = $("#userTuitionBookmarks");
        $userSchoolBookmarks = $("#userSchoolBookmarks");
        $userEventBookmarks = $("#userEventBookmarks");
    }

    function cacheDynamic() {
        $removeBookmarkButtons = $('.remove-bookmark-button');
    }

    function bindEvents(userInfo) {
        $removeBookmarkButtons.click(e => removeBookmarks(e, userInfo))
    }

    function getTuitionsInfo(typeOfInfo, instituteId) {
        let url = `/${typeOfInfo}`;
        return $.ajax({
            url,
            method: 'GET',
            data: {
                _id: instituteId
            }
            // demands: 'name addressLine1 addressLine2 city state primaryNumber email category reviews'
        });
    }

    function getUserBookmarksHtml(typeOfInfo, idsArr) {
        const instituteInfoPromiseArr = [];
        idsArr.forEach(instituteId => instituteInfoPromiseArr.push(getTuitionsInfo(typeOfInfo, instituteId)));

        let cardsHtml = '';

        return new Promise((resolve, reject) => {
            Promise.all(instituteInfoPromiseArr)
                .then(instituteInfoArr => {
                    instituteInfoArr.forEach(instituteInfo => {
                        const averageRating = helperScripts.calcAverageRating(instituteInfo.reviews);
                        instituteInfo.averageRating = averageRating === -1 ? 2.5 : averageRating;
                        instituteInfo.col4 = true;
                        instituteInfo.hideFooter = true;
                        instituteInfo.manageBookmarks = true;
                        instituteInfo.typeOfInfo = typeOfInfo;
                        if (instituteInfo.typeOfInfo === "event") {
                            instituteInfo.event = true;
                            instituteInfo.averageRating = null;
                            instituteInfo.claimedBy = null;
                        }
                        cardsHtml += template.smoothCardHomePage(instituteInfo);
                    });
                    resolve(cardsHtml);
                }).catch(err => reject(err));
        });
    }

    function removeBookmarks(event, userInfo) {
        let tuitionId = $(event.target).attr('data-id');
        let typeOfInfo = $(event.target).attr('data-category');

        eagerRemoveCard(tuitionId);

        // make first character UpperCase
        typeOfInfo = typeOfInfo.charAt(0).toUpperCase() + typeOfInfo.substr(1);
        $.ajax({
            url: `/user/delete/bookmark${typeOfInfo}s/${userInfo._id}`,
            method: 'DELETE',
            data: {
                string: tuitionId
            }
        }).then(() => {})
    }

    function eagerRemoveCard(cardId) {
        //todo - cache properly
        $('#' + cardId).remove()
    }

    function render(user) {
        if (user.bookmarkTuitions) {
            getUserBookmarksHtml('tuition', user.bookmarkTuitions).then(cardsHtml => {
                console.log(cardsHtml);
                if (!cardsHtml) {
                    const context = {
                        title: "No Data",
                        description: "bookmark tuitions you like and have everything arranged here."
                    }
                    cardsHtml = template.noDataCard(context);
                    $userTuitionBookmarks.append(cardsHtml);
                } else {
                    $userTuitionBookmarks.append(cardsHtml);
                    cacheDynamic();
                    bindEvents(user);
                }
            });
        }
        if (user.bookmarkSchools) {
            getUserBookmarksHtml('school', user.bookmarkSchools).then(cardsHtml => {
                if (!cardsHtml) {
                    const context = {
                        title: "No Data",
                        description: "bookmark schools you like and have everything arranged here."
                    }
                    cardsHtml = template.noDataCard(context);
                    $userSchoolBookmarks.append(cardsHtml);
                } else {
                    $userSchoolBookmarks.append(cardsHtml);
                    cacheDynamic();
                    bindEvents(user);
                }
            });
        }
        if (user.bookmarkEvents) {
            getUserBookmarksHtml('event', user.bookmarkEvents).then(cardsHtml => {
                if (!cardsHtml) {
                    const context = {
                        title: "No Data",
                        description: "bookmark evenrts you like and have everything arranged here."
                    }
                    cardsHtml = template.noDataCard(context);
                    $userEventBookmarks.append(cardsHtml);
                } else {
                    $userEventBookmarks.append(cardsHtml);
                    cacheDynamic();
                    bindEvents(user);
                }
            });
        }
    }

    function init(user) {
        cache();
        render(user);
    }

    return {
        init
    };
})();