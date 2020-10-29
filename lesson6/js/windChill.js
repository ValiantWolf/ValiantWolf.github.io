// calculates windchill
    let t= parseFloat(document.getElementById('t').textContent);
    let s= parseFloat(document.getElementById('s').textContent);
    let compute= 35.74+0.6215*t-35.75*Math.pow(s,0.16)+0.4275*t*Math.pow(s,0.16);
    if(t <= 50 && s >= 3){
        document.querySelector(".w").textContent= Math.ceil(compute)+ "°";
    }
    else{
        document.querySelector(".w").textContent=  "N/A";
    }