function initMap() {
    let location = {lat: 28.521681, lng: 77.040536};
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    let marker = new google.maps.Marker({
        position: location,
        map: map
    })
}