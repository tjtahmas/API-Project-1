var lat = 50;
var lon = 50;
part = 'daily';
APIkey = 'ebea214579512211db301dcf4d7f10c9';

fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=' + part + '&appid=' + APIkey, {
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