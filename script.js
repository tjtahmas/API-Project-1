var city = 'St. Louis'
var WeatherAPIkey = 'ebea214579512211db301dcf4d7f10c9';
function getCity(){
    city = document.querySelector('.getCity').value;
    updateCity(city);
 }
 function updateCity(city){
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
        console.log(data)
        
        // document.getElementById("weather").innerHTML = data.name + " " + dateConverter + " " + "<img src = " + url + " >"
        // document.getElementById("temperature").innerHTML = "Temp: " + data.main.temp + "°F"
        // document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + "MPH"
        // document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%"
        
        if (status == 'Clouds'){
            document.body.style.backgroundColor = "orange";
            console.log('Play Clouds Playlist');
            searchCriteria = 'cloudy%20day%20';
        } else if (status == 'Clear'){
            console.log('Play Clear Playlist');
            searchCriteria = 'clear%20day%20';
            document.body.style.backgroundColor = "green"
        } else if (status == 'Thunderstorm'){
            document.body.style.backgroundColor = "purple"
            console.log('Play Thunderstorm Playlist')
            searchCriteria = 'thunderstorm%20';
        } else if (status == 'Drizzle'){
            document.body.style.backgroundColor = "red"
            console.log('Play Drizzle Playlist')
            searchCriteria = 'drizzly%20day%20';
        } else if (status == 'Rain'){
            document.body.style.backgroundColor = "brown"
            console.log('Play Rain Playlist')
            searchCriteria = 'rainy%20day%20';
        } else if (status == 'Snow'){
            document.body.style.backgroundColor = "blue"
            console.log('Play Snow Playlist')
            searchCriteria = 'snow%20day%20';
        } else {
            document.body.style.backgroundColor = "purple"
            console.log('Play PANIC!! Playlist') //Could include Fog, Mist, Smoke, Ash, Squall, Sand, Tornado, etc.
            searchCriteria = 'sandstorm%20';
        }
        var weatherIcon = document.querySelector('.card-img-top');
        var icon = weather.weather[0].icon;
        weatherIcon.src = 'https://openweathermap.org/img/w/' + icon + '.png';

        //CONDITIONS: Clear Sky, Few Clouds, Scattered Clouds, Broken Clouds, Shower Rain, Rain, Thunderstorm, Snow, Mist
var YouTubeAPIkey = 'AIzaSyDVwLTLM1W7oiT-8atVv7XdbGCq0xbnzaM';
searchCriteria = searchCriteria.concat('copyright%20free%20music');
console.log(searchCriteria);
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
        //console.log(data);
        videoID = data.items[0].id.videoId;
        console.log(videoID);
        //make embeded YouTube link from videoID
        embedID = 'https://www.youtube.com/embed/' + videoID;
        console.log(embedID);
        document.getElementById("iframe").src = embedID;
    });
});
}


$.getJSON('events.json', function (data) {
    var $menu = $('#navbarNav ul.navbar-nav');
    $.each(data, function () {
        var url = this.url || '#';
        $menu.append(
            '<li class="nav-item">' +
            '<a class="nav-link" href="' + url + '">' + (this.name || this.id) + '</a>' +
            '</li>'
        );
    });
});