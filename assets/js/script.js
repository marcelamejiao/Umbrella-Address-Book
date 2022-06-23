// Rendering a map from Google Maps API

// Defining my API Key
var apiKey = "AIzaSyDSVjMQM3Hgp3upVIWiHSW1CTTP-VFT85A";

// Converts address to Lat and Long values and renders Map
function addressToMap(address){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=' + apiKey)
      .then(response => response.json())
      .then(data => {
        // Gets the address longitude and latitude coordinates
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
        // Calls the render map function based on the coordinates of the given address
        renderMap(lat,lng);
      })
}

// Initialize and add the map
function renderMap(lat, lng) {
    // The location of user contact in longitude and latitude
    const contactLocation = { lat: lat, lng: lng };
    // Creates a map based on the lng and lat coordinates above
    const map = new google.maps.Map(document.getElementById("location-map"), {
        // zooms into users locatioin
        zoom: 12,
        // centers location on map
        center: contactLocation,
    });
    // Creates a marker and puts it on the user contact's location on the map rendered above
    const marker = new google.maps.Marker({
      position: contactLocation,
      map: map,
    });
}
  