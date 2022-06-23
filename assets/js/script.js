
// ##################################
// checkWeather
// Args: Latitude, Longitude
// Returns: temp, condition, icon location, rain
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

function checkWeather(lat, long) {
    var apiUrl = "https://api.weatherapi.com/v1/current.json?key=6ae7c76b7b7d498db7a75709222206&q=" + lat + ", " + long + "&aqi=no";
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {                     
                    var weather = {
                        temp: data.current.temp_c,
                        condition: data.current.condition.text,
                        icon: data.current.condition.icon,
                        rain: data.current.condition.text.includes("rain")
                    };
                    console.log(weather);
                    return (weather);
                });
            } else {
                console.log('Error: ' + response.statusText); //Remove alerts before release
            }
        })
        .catch(function (error) {
            console.log('Unable to connect to WeatherAPI'); /// Remove alert before release
        });
};

