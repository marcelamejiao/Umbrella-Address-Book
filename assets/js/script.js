



// Weather API function
// lat/long from google maps api
// To do:
// Icons to match weather type and temperature
// Umbrella for rain
// shirt for sunny and warm
// jumper/hoody for cold
//

var testObject; // Just for testing in console - data from the weather api fetch, can work with the object in console easier.
// TODO:
// conditionals for Icons - path is almost the same as in the object under data.current.condition - can get the icon details from this. 
// Conditionals for additional requirements (ie. umbrella, jumper etc...)
function checkWeather(lat, long) {
  
    var apiUrl = "https://api.weatherapi.com/v1/current.json?key=6ae7c76b7b7d498db7a75709222206&q=" + lat + ", " + long + "&aqi=no";

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                // console.log(response);
                response.json().then(function (data) {
                    var weatherTemp = data.current.temp_c; // Current Temperature in celcius. 
                    var weatherCondition = data.current.condition.text; // Weather condition, ie 'Clear'
                    var daynight
                    testObject = data; /// <-------  Just for testing in console. Remove before release 
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

checkWeather(-33.8481188, 150.9262877);
