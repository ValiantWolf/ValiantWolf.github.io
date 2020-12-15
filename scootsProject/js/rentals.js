document.addEventListener('DOMContentLoaded', ( )=> {
    document.getElementById('rentalType').addEventListener('input', handleSelect);
})
function handleSelect(ev) {
    var rentalType = parseFloat(document.getElementById('rentalType').value);
    switch(rentalType) {
        case 1:
            rentalType = 1;
            break;
        case 2:
            rentalType = 2;
            break;
        case 3:
            rentalType = 3;
            break;
        case 4:
            rentalType = 4;
            break;
        case 5:
            rentalType = 5;
            break;
        case 6:
            rentalType = 6;
            break;
        default:
            rentalType = 1;
            break;
    }
    const data = "https://valiantwolf.github.io/ValiantWolf.github.io/scootsProject/data/rental.JSON"
    fetch(data)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('persons').innerHTML = data.rental[rentalType - 1].info.maxPersons;
        document.getElementById('price1').innerHTML = "$" + data.rental[rentalType - 1].info.reservation.halfDay;
        document.getElementById('price2').innerHTML = "$" + data.rental[rentalType - 1].info.reservation.fullDay;
        document.getElementById('price3').innerHTML = "$" + data.rental[rentalType - 1].info.walkIn.halfDay;
        document.getElementById('price4').innerHTML = "$" + data.rental[rentalType - 1].info.walkIn.fullDay;
        document.getElementById('vehicleRentals').setAttribute('src', 'assets/vehicle' + rentalType + '.jpg' );
    });
}