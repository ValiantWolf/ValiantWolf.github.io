let webPath = window.location.pathname;
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == 'Fish Haven' || towns[i].name == 'Preston' || towns[i].name == 'Soda Springs') {
        if (webPath.includes("index.html")) {
          let card = document.createElement('section');
          let towninfo = document.createElement('section');
          let h2 = document.createElement('h2');
          let motto = document.createElement('p');
          let founded = document.createElement('p');
          let population = document.createElement('p');
          let rainfall = document.createElement('p');
          let image = document.createElement('img');
            
          card.appendChild(towninfo);

          card.setAttribute('class', 'townsect');

          towninfo.setAttribute('class', 'towninfo');

          h2.textContent = towns[i].name;
          towninfo.appendChild(h2);

          motto.textContent = towns[i].motto;
          towninfo.appendChild(motto);

          founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
          towninfo.appendChild(founded);

          population.textContent = 'Population: ' + towns[i].currentPopulation;
          towninfo.appendChild(population);

          rainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
          towninfo.appendChild(rainfall);
            
          image.setAttribute('class', 'townimg');
          image.setAttribute('src', 'assets/' + towns[i].photo);
          image.setAttribute('alt', 'Image of ' + towns[i].name);
          card.appendChild(image);

          document.querySelector('div.cards').appendChild(card);
        }
        for (let t = 0; t < towns[i].events.length; t++) {
          if (webPath.includes("preston.html") && towns[i].name == 'Preston') {
            let event = document.createElement('p');
            event.textContent = towns[i].events[t];
            document.querySelector('div.events').appendChild(event);
          }
          if (webPath.includes("fishHaven.html") && towns[i].name == 'Fish Haven') {
            let event = document.createElement('p');
            event.textContent = towns[i].events[t];
            document.querySelector('div.events').appendChild(event);
          }
          if (webPath.includes("sodaSprings.html") && towns[i].name == 'Soda Springs') {
            let event = document.createElement('p');
            event.textContent = towns[i].events[t];
            document.querySelector('div.events').appendChild(event);
          }
        }
    }
  }
});