const queryString = (() => {

    function returnQueryString() {
        let url_string = location.href; //window.location.href
        let url = new URL(url_string);
        let objToReturn = {};
        objToReturn._id = url.searchParams.get("_id");
        PubSub.publish('query.load', objToReturn);

        // console.log(objToReturn)
    }

    return {returnQueryString};
})();