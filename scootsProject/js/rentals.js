const requestURL = 'https://valiantwolf.github.io/ValiantWolf.github.io/scootsProject/data/rental.JSON';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
    console.log(jsonObject);
    const model = jsonObject['model']
    console.log(model);
    });
    