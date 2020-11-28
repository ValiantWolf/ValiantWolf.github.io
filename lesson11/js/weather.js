var currentURL = window.location.href;
let currentId = "5604473";
if (currentURL.indexOf("preston.html") > 0) {
    currentId = "5604473";
} else if (currentId.indexOf("sodaSprings.html") > 0) {
    currentId = "5607916";
} else if (currentId.indexOf("fishHaven.html") > 0) {
    currentId = "lat=42.0380399&lon=-111.4048681";
}
console.log(currentId)

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + currentId + "&units=imperial&APPID=4ddd913b063b6a1255cfc4ee2ca37519";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp) + "°F";
        document.getElementById('humi').textContent = jsObject.main.humidity + "%";
        document.getElementById('windSpeed').textContent = Math.round(jsObject.wind.speed) + " mph";
});

const forApi = "https://api.openweathermap.org/data/2.5/forecast?id=" + currentId + "&units=imperial&APPID=4ddd913b063b6a1255cfc4ee2ca37519";
fetch(forApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var weekDay = new Array(7);
        weekDay[0] = "SUN";
        weekDay[1] = "MON";
        weekDay[2] = "TUE";
        weekDay[3] = "WED";
        weekDay[4] = "THU";
        weekDay[5] = "FRI";
        weekDay[6] = "SAT";
        var x = 1;
        for (var i = 0; i < jsObject.list.length; i++ ) {
            var varTime = jsObject.list[i].dt_txt.substring(11);
            var varDate = new Date(jsObject.list[i].dt * 1000);
            var varDay = weekDay[varDate.getDay()];
            if (varTime == '18:00:00' && x <= 5) {
                document.getElementById('day' + x).textContent = varDay;
                document.getElementById('temp' + x).textContent = jsObject.list[i].main.temp;
                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                const desc = jsObject.list[i].weather[0].description;
                document.getElementById('weatherIcon' + x).setAttribute('src', imagesrc);
                document.getElementById('weatherIcon' + x).setAttribute('alt', desc);
                x++
            }
        }
});