let newYear = "1 Jan 2023"
let secondsEl = document.getElementById("seconds")
let minutesEl = document.getElementById("minutes")
let hoursEl = document.getElementById("hours")
let daysEl = document.getElementById("days")
let header = document.getElementById("header");
function getCount() {

    const newYearsDate = new Date(newYear)
    const currentDate = new Date();
    
    const time = (newYearsDate - currentDate) / 1000;
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60 % 60);
    const hours = Math.floor(time / 3600 % 24)
    const days = Math.floor(time / 3600 / 24)

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minutesEl.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    document.getElementById("text-d").innerHTML = "days";
    document.getElementById("text-h").innerHTML = "hours";
    document.getElementById("text-m").innerHTML = "minutes";
    document.getElementById("text-s").innerHTML = "seconds";
}

if(screen.width >= 1366) {
    setInterval(getCount, 1000);
}