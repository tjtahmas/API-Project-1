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
        if (status == 'Clouds'){
            console.log('Play Clouds Playlist');
            searchCriteria = 'cloudy%20day%20';
        } else if (status == 'Clear'){
            console.log('Play Clear Playlist');
            searchCriteria = 'clear%20day%20';
        } else if (status == 'Thunderstorm'){
            console.log('Play Thunderstorm Playlist')
            searchCriteria = 'thunderstorm%20';
        } else if (status == 'Drizzle'){
            console.log('Play Drizzle Playlist')
            searchCriteria = 'drizzly%20day%20';
        } else if (status == 'Rain'){
            console.log('Play Rain Playlist')
            searchCriteria = 'rainy%20day%20';
        } else if (status == 'Snow'){
            console.log('Play Snow Playlist')
            searchCriteria = 'snow%20day%20';
        } else {
            console.log('Play PANIC!! Playlist') //Could include Fog, Mist, Smoke, Ash, Squall, Sand, Tornado, etc.
            searchCriteria = 'sandstorm%20';
        }

        //CONDITIONS: Clear Sky, Few Clouds, Scattered Clouds, Broken Clouds, Shower Rain, Rain, Thunderstorm, Snow, Mist



var YouTubeAPIkey = 'AIzaSyAmz5aARCdvb9Ri8Lw1Bc0yv-XI0JnyH8I';
searchCriteria = searchCriteria.concat('copyright%20free%20music');
console.log(searchCriteria)
var searchType = 'playlist'
var maxResults = 15
fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxResults + '&q=' + searchCriteria + '&type=' + searchType + '&key=' + YouTubeAPIkey, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        var weatherPlaylist = data;

        playlist = weatherPlaylist.items[0].id.playlistId;
        console.log(playlist)

    });
});
}

