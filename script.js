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
            document.body.style.backgroundColor = "orange";
            console.log('Play Clouds Playlist');
            searchCriteria = 'cloudy%20day%20';
        } else if (status == 'Clear'){
            document.body.style.backgroundImage = "url('data:image/jpeg;base64,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')";
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
    });
});
}
