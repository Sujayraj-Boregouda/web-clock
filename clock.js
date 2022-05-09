console.log("Welcome to Clock Exercise");

function updateClock(){
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    currentHour = (currentHour < 10 ? "0": "") + currentHour;
    currentMinutes = (currentMinutes < 10 ? "0": "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0": "") + currentSeconds;

    currentHour = (currentHour>12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;


    let timeOfDay = (currentHour < 12) ? "AM" : "PM";

    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    
    document.getElementById("clock").innerHTML = currentTimeStr;
}




/*Copied My Internet*/
/*
function currentTime() {
    let content = document.getElementById('clock');
    let date = new Date();
    let time = date.toLocaleTimeString();
    clock.innerHTML = time;
}
setInterval(currentTime, 1000);
*/

