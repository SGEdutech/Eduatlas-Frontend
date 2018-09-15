const user = (() => {
    function getInfo() {
        return userApiCalls.getCurrentUser()
    }
    return {
        getInfo
    };
})();