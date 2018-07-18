function initMap() {
    setTimeout(function () {
        let location = {lat: lat, lng: lng};
        let map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: location
        });
        let marker = new google.maps.Marker({
            position: location,
            map: map
        })
    },2000);
}