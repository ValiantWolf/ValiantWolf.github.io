function showPancake(){
    var today = new Date();
    if(today.getDay() == 5){
        document.getElementById("pancake").style.display = "block";
    }
}