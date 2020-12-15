const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=20.5083&lon=-86.9458&units=imperial&APPID=4ddd913b063b6a1255cfc4ee2ca37519";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp) + "°F";
        document.getElementById('humi').textContent = jsObject.main.humidity + "%";
    });

const forApi = "https://api.openweathermap.org/data/2.5/forecast?lat=20.5083&lon=-86.9458&units=imperial&APPID=4ddd913b063b6a1255cfc4ee2ca37519";
fetch(forApi)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        var weekDay = new Array(7);
        weekDay[1] = "SUN";
        weekDay[2] = "MON";
        weekDay[3] = "TUE";
        weekDay[4] = "WED";
        weekDay[5] = "THU";
        weekDay[6] = "FRI";
        weekDay[7] = "SAT";
        var x = 1;
        for (var i = 1; i < jsObject.list.length; i++ ) {
            var varTime = jsObject.list[i].dt_txt.substring(11);
            var varDate = new Date(jsObject.list[i].dt * 1000);
            var varDay = weekDay[varDate.getDay()];
            if (varTime == '18:00:00' && x <= 3) {
                document.getElementById('day' + x).textContent = varDay;
                document.getElementById('temp' + x).textContent = Math.round(jsObject.list[i].main.temp_max);
                const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png';
                const desc = jsObject.list[i].weather[0].description;
                document.getElementById('weatherIcon' + x).setAttribute('src', imagesrc);
                document.getElementById('weatherIcon' + x).setAttribute('alt', desc);
                x++
            }
        }
});