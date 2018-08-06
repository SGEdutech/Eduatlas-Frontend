PubSub.subscribe('user', (msg, userInfo) => {
    navigationBar.render(userInfo);
});

PubSub.subscribeOnce('query.load', (msg, queryObject) => {
    tuitionDetails.returnData(queryObject).then((tuitionInfo) => {
        coverImage.init(tuitionInfo);
        basicDetails.init(tuitionInfo);
        facilitiesDescriptionCategory.init(tuitionInfo);
        contactUs.init(tuitionInfo);
        courses.init(tuitionInfo);
        results.init(tuitionInfo);
        faculty.init(tuitionInfo);
    });
});

user.getInfo().then(userInfo => {
    navigationBar.init(userInfo);
});

queryString.returnQueryString();
