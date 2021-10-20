var city = 'New York City'
var city = 'St. Louis'
var WeatherAPIkey = 'ebea214579512211db301dcf4d7f10c9';

function getCity(){
@@ -17,41 +17,42 @@ fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' +
        return response.json();
    })
    .then(function (data) {
        var searchCriteria = '';
        var weather = data;
        var status = weather.weather[0].main;
        if (status == 'Clouds'){
            document.body.style.backgroundColor = "orange"
            console.log('Play Clouds Playlist');
            searchCriteria = 'cloudy%20day%20';
        } else if (status == 'Clear'){
            document.body.style.backgroundColor = "blue"; 
            console.log('Play Clear Playlist');
            searchCriteria = 'clear%20day%20';
        } else if (status == 'Thunderstorm'){
            document.body.style.backgroundColor = "green";
            console.log('Play Thunderstorm Playlist')
            searchCriteria = 'thunderstorm%20';
        } else if (status == 'Drizzle'){
            document.body.style.backgroundColor = "purple"
            console.log('Play Drizzle Playlist')
            searchCriteria = 'drizzly%20day%20';
        } else if (status == 'Rain'){
            document.body.style.backgroundColor = "yellow"
            console.log('Play Rain Playlist')
            searchCriteria = 'rainy%20day%20';
        } else if (status == 'Snow'){
            document.body.style.backgroundColor = "black"
            console.log('Play Snow Playlist')
            searchCriteria = 'snow%20day%20';
        } else {
            document.body.style.backgroundColor = "teal"
            console.log('Play PANIC!! Playlist') //Could include Fog, Mist, Smoke, Ash, Squall, Sand, Tornado, etc.
            searchCriteria = 'sandstorm%20';
        }

        //CONDITIONS: Clear Sky, Few Clouds, Scattered Clouds, Broken Clouds, Shower Rain, Rain, Thunderstorm, Snow, Mist

});
 }


var YouTubeAPIkey = 'AIzaSyAmz5aARCdvb9Ri8Lw1Bc0yv-XI0JnyH8I';
var searchCritera = 'Rainy%20Day%20Music';
searchCriteria = searchCriteria.concat('copyright%20free%20music');
console.log(searchCriteria)
var searchType = 'playlist'
var maxResults = 15
fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxResults + '&q=' + searchCritera + '&type=' + searchType + '&key=' + YouTubeAPIkey, {
fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=' + maxResults + '&q=' + searchCriteria + '&type=' + searchType + '&key=' + YouTubeAPIkey, {
    // The browser fetches the resource from the remote server without first looking in the cache.
    // The browser will then update the cache with the downloaded resource.
    cache: 'reload',
@@ -67,24 +68,7 @@ fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=
        playlist = weatherPlaylist.items[0].id.playlistId;
        console.log(playlist)


        var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: playlist,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

onYouTubeIframeAPIReady;
    });
});
}
