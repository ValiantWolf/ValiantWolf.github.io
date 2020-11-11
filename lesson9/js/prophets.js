const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birth_date = document.createElement('p');
        let birth_place = document.createElement('p');
        let image = document.createElement('img');
        birth_date.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        birth_place.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        image.setAttribute('src', prophets[i].imageurl);
        image.setAttribute('alt', h2.textContent + '-' + prophets[i].order);
        image.setAttribute('height', '205');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        card.appendChild(h2);
        card.appendChild(birth_date);
        card.appendChild(birth_place);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);
    }
});

 