let clock = document.querySelector(".clock");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let date = document.querySelector(".date");

function timeNow(){
    let nowClock = new Date()
    hours.innerHTML = nowClock.getHours().toString().padStart(2,"0") + ": ";
    minutes.innerHTML = nowClock.getMinutes().toString().padStart(2,"0") + ": ";
    seconds.innerHTML = nowClock.getSeconds().toString().padStart(2,"0") ;
    let days = ["MONDAY","TUESDAY","WEDSDAY","THURSDAY","FRIDAY","SATURDAY","SUNDAY"];
    let months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
   
    date.innerHTML = `
        <span class="day">${days[nowClock.getDay()]-1}</span>
        <span class="today">${nowClock.getDate()}</span>
        <span class="month">${months[nowClock.getMonth()].toString().padStart(2,"0")}</span>
    `

    
}





setInterval(timeNow, 1000);
