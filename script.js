var city = 'St. Louis'
var WeatherAPIkey = 'ebea214579512211db301dcf4d7f10c9';

function getCity(){ //Retrieves city name from input text box
    city = document.querySelector('.getCity').value;
    updateCity(city);
 }

 function updateCity(city){ //Retrieves information from APIs and updates video player
fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + WeatherAPIkey, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var searchCriteria = '';
        var weather = data;
        var status = weather.weather[0].main;
        
        // document.getElementById("weather").innerHTML = data.name + " " + dateConverter + " " + "<img src = " + url + " >"
        // document.getElementById("temperature").innerHTML = "Temp: " + data.main.temp + "°F"
        // document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + "MPH"
        // document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%"
        
        if (status == 'Clouds'){
            document.body.style.backgroundImage = "url(./images/clouds.png.png)";
            console.log('Play Clouds Playlist');
            searchCriteria = 'cloudy%20day%20';
        } else if (status == 'Clear'){
            searchCriteria = 'clear%20day%20';
            document.body.style.backgroundImage = "url(./images/clear_skys.png)";
        } else if (status == 'Thunderstorm'){
            document.body.style.backgroundColor = "purple"
            searchCriteria = 'thunderstorm%20';
        } else if (status == 'Drizzle'){
            document.body.style.backgroundImage = "url(./images/rain-background.gif)";
            console.log('Play Drizzle Playlist')
            searchCriteria = 'drizzly%20day%20';
        } else if (status == 'Rain'){
            document.body.style.backgroundImage = "url(./images/rain-background.gif)";
            console.log('Play Rain Playlist')
            searchCriteria = 'rainy%20day%20';
        } else if (status == 'Snow'){
            document.body.style.backgroundImage = "url(./images/snow-background.gif)";
            console.log('Play Snow Playlist')
            searchCriteria = 'snow%20day%20';
        } else {
            document.body.style.backgroundImage = "url(./images/alert.png)";
            console.log('Play PANIC!! Playlist') //Could include Fog, Mist, Smoke, Ash, Squall, Sand, Tornado, etc.
            searchCriteria = 'sandstorm%20';
        }

        //Changes weather icon to match current weather
        var weatherIcon = document.querySelector('.card-img-top');
        var icon = weather.weather[0].icon;
        weatherIcon.src = 'https://openweathermap.org/img/w/' + icon + '.png';

//Initialize YouTube API search queries
var YouTubeAPIkey = 'AIzaSyDVwLTLM1W7oiT-8atVv7XdbGCq0xbnzaM';
searchCriteria = searchCriteria.concat('copyright%20free%20music'); //Make sure music is copyright free
var searchType = 'video';
var maxResults = 15;
fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxResults + '&q=' + searchCriteria + '&type=' + searchType + '&key=' + YouTubeAPIkey, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        videoID = data.items[0].id.videoId;
        //make embeded YouTube link from videoID
        embedID = 'https://www.youtube.com/embed/' + videoID;
        //add to iframe Video Player
        document.getElementById("iframe").src = embedID;
    });
});
}