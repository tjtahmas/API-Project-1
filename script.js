var city = 'St. Louis'
var WeatherAPIkey = 'ebea214579512211db301dcf4d7f10c9';

function getCity(){ //Retrieves city name from input text box
    city = document.querySelector('.getCity').value;
    //Set City Name
    var name = document.getElementById('cityName');
    name.innerHTML = city;
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

            var iconIMG = document.createElement('img');
            var icon = weather.weather[0].icon;
            iconIMG.src = 'https://openweathermap.org/img/w/' + icon + '.png';
            document.getElementById('cityName').innerHTML = city + ' ' + '<img src=https://openweathermap.org/img/w/' + icon + '.png />'
        
        if (status == 'Clouds'){
            document.body.style.backgroundImage = "url(./images/clouds.png)";
            console.log('Play Clouds Playlist');
            searchCriteria = 'cloudy%20day%20';
        } else if (status == 'Clear'){
            searchCriteria = 'clear%20day%20';
            document.body.style.backgroundImage = "url(./images/clear_skys.png)";
        } else if (status == 'Thunderstorm'){
            document.body.style.backgroundImage = "url(./images/thunderstorms-bg.png)"
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
            searchCriteria = 'darude-sandstorm%20';
        }

        //Changes weather icon to match current weather
        // var weatherIcon = document.querySelector('.card-img-top');
        // var icon = weather.weather[0].icon;
        // weatherIcon.src = 'https://openweathermap.org/img/w/' + icon + '.png';

//Initialize YouTube API search queries
var YouTubeAPIkey = 'AIzaSyAmz5aARCdvb9Ri8Lw1Bc0yv-XI0JnyH8I';
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