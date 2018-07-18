const autoCompleteContainer = $('#autocomplete_container');

function autoComplete(query) {
    $.ajax({
        url: '/tuition/search',
        data: {
            name: JSON.stringify({
                search: query,
                fullTextSearch: false,
            }),
            limit: 5,
            demands: 'name'
        }
    }).then(appendAutoComplete)
        .catch(err => console.error(err));
}

function appendAutoComplete(results) {
    let autoCompleteValue = '';
    results.forEach(result => {
        console.log(result);
        autoCompleteValue += template.searchResult(result);
    });
    autoCompleteContainer.html(autoCompleteValue);
}
