var lat = 50;
var lon = 50;
var part = 'daily';
var WeatherAPIkey = 'ebea214579512211db301dcf4d7f10c9';

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=' + part + '&appid=' + WeatherAPIkey, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

var playlistID = 'PLWyCiVKEayX_WuoYgy0eopWvDzCnmoAGn';
var YouTubeAPIkey = 'AIzaSyAmz5aARCdvb9Ri8Lw1Bc0yv-XI0JnyH8I';


fetch('https://www.googleapis.com/youtube/v3/playlists?id=' + playlistID + '&key=' + YouTubeAPIkey, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    });

