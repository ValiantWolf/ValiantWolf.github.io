function windChill() {
    let t = parseFloat(document.getElementById('temp').innerText);
    let s = parseFloat(document.getElementById('windSpeed').innerText);
    let compute = 35.74+0.6215*t-35.75*Math.pow(s,0.16)+0.4275*t*Math.pow(s,0.16);
    if(t <= 50 && s >= 3){
        document.getElementById("windChill").innerHTML = Math.ceil(compute)+ "°F";
    }
    else{
        document.getElementById("windChill").innerHTML =  "N/A";
    }
}