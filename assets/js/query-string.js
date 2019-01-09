const queryString = (() => {

    function loadQueryString() {
        let url_string = location.href; //window.location.href
        let url = new URL(url_string);
        let objToReturn = {};
        objToReturn.tab = url.searchParams.get("tab");
        objToReturn._id = url.searchParams.get("_id");
        objToReturn.a = url.searchParams.get("a");
        objToReturn.page = url.searchParams.get("page");
        objToReturn.page = parseInt(objToReturn.page);
        objToReturn.items = url.searchParams.get("items");
        objToReturn.items = parseInt(objToReturn.items);
        objToReturn.c = url.searchParams.get("c");
        objToReturn.c = (objToReturn.c === 'true');
        objToReturn.search = url.searchParams.get("search");
        // objToReturn.state = url.searchParams.get("state");
        objToReturn.location = url.searchParams.get("location");
        objToReturn.category = url.searchParams.get("category");
        objToReturn.sortBy = url.searchParams.get("sortBy");
        // typeOfInfo can be either school or tuition or events
        objToReturn.typeOfInfo = url.searchParams.get("typeOfInfo");
        return objToReturn;
    }

    return {loadQueryString};
})();