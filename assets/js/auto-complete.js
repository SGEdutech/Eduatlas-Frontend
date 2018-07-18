const autoCompleteContainer = $('#autocomplete_container');

function autoComplete(query) {
    $.ajax({
        url: 'http://eduatlas.com/tuition/search',
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
        autoCompleteValue += template.searchResult({result: result.name});
    });
    autoCompleteContainer.html(autoCompleteValue);
}
