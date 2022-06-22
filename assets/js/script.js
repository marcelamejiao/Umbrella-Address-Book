







// ##################################
// checkWeather
// Args: Latitude, Longitude
// Using Weather API from: https://www.weatherapi.com/
// JSON response with current weather data
//  data.current.temp_c = dec - temperature in celcius
//  data.current.condition.text = string - current weather condition
//  data.current.is_day = bool - 1=day, 0=night
// TODO:
// Add icons to function - ./assets/weather/64x42/...
//  --conditional checks for day/night and condition...
// Add conditionals for Weather for Umbrella, jacket, etc.
// ##################################
var weatherTestObj; // FOR CONSOLE TESTING ONLY
function checkWeather(lat, long) {
    var apiUrl = "https://api.weatherapi.com/v1/current.json?key=6ae7c76b7b7d498db7a75709222206&q=" + lat + ", " + long + "&aqi=no";
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var weatherTemp = data.current.temp_c; // Current Temperature in celcius. 
                    var weatherCondition = data.current.condition.text; // Weather condition, ie 'Clear'
                    var daynight
                    weatherTestObj = data; /// <-------  Just for testing in console. Remove before release 
                    console.log("Current Temperature: ", weatherTemp);
                    console.log("Current Condition:", weatherCondition);
                    document.getElementById("weather-temp").textContent = weatherTemp + "°C";
                    if (data.current.is_day == 1) {
                        daynight = " - Day";
                    } else daynight = " - Night";
                    document.getElementById("weather-condition").textContent = weatherCondition + daynight;
                });
            } else {
                console.log('Error: ' + response.statusText); //Remove alerts before release
            }
        })
        .catch(function (error) {
            console.log('Unable to connect to WeatherAPI'); /// Remove alert before release
        });
}
/// Calling Function (replace the actual latitude and longitude with a variable from Google maps API)
checkWeather(-33.8481188, 150.9262877);
