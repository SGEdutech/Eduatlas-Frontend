let a = template.searchPageCard({
    name: 'Test name',
    state: 'Test state',
    description: 'Test description',
    primaryNumber: 'Test number'
});

console.log($('#cards_container'));

$('#cards_container').html(a)