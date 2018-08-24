const ipLocation = (() => {
    let $stateInp;
    let $cityInp;

    function cache() {
        $stateInp = $('#state_inp');
        $cityInp = $('#city_inp');
    }

    function getLocation() {
        // Returns a promise
        const url = 'http://ip-api.com/json';
        return $.get({ url });
    }

    function render() {
        getLocation().then(locationInfo => {
            $stateInp.val(locationInfo.regionName);
            $cityInp.val(locationInfo.city);
        })
    }

    function init() {
        cache();
        render();
    }

    return { init }
})();