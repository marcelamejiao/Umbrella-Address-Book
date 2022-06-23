// Dan's Code :)


// Rendering a map from Google Maps API

// Defining my API Key
var apiKey = "AIzaSyDSVjMQM3Hgp3upVIWiHSW1CTTP-VFT85A";

// Converting address to Lat and Long values
function getCoordinates(address){
    fetch("https://maps.googleapis.com/maps/api/geocode/json?address=" + address + '&key=' + apiKey)
      .then(response => response.json())
      .then(data => {
          console.log(data);
        const lat = data.results[0].geometry.location.lat;
        const lng = data.results[0].geometry.location.lng;
        console.log({lat, lng})
        initMap(lat,lng);
      })
}


// Initialize and add the map
function initMap(lat, lng) {
    // The location of user data
    const contactLocation = { lat: lat, lng: lng };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("location-map"), {
      zoom: 4,
      center: contactLocation,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: contactLocation,
      map: map,
    });
}
  