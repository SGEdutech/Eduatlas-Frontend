// Dependency city js
// Value of state must be same as state name

const dropDown = (() => {
    let $stateInp;
    let $cityInp;
    
    function cache() {
        $stateInp = $('#state_inp');
        $cityInp = $('#city_inp');
    }

    function bindEvents() {
        $stateInp.change(renderCityDropdown);
    }

    function getSelectedState() {
        $stateInp.val();
    }

    function renderCityDropdown() {
        const selectedState = $stateInp.val();
        let optionsString = '<option selected disabled>Select city</option>'; // Default select option
        cities.forEach(cityData => {
            if (cityData.state === selectedState) {
                optionsString += `<option>${cityData.name}</option>`;
            }
        });
        $cityInp.html(optionsString);
        $cityInp.selectpicker('refresh');
    }
    
    function init() {
        cache();
        bindEvents();
        renderCityDropdown();
    }
    
    return { init }
})();