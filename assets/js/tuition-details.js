const tuitionDetails = (() => {
    function returnData(queryObj) {
        const url = '/tuition';
        const data = {_id: queryObj.a};
        return $.ajax({url, data});
    }

    return {returnData};
})();