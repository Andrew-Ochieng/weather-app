// initialize variables
// configure time 
const currentTime = document.getElementById("time")
currentTime.innerHTML = displayTime(time)

const time = new Date()

function displayTime(time) {
    const hours = time.getHours()
    const mins = time.getMinutes()

    let period = "AM"
    // set am/pm time
    if (hours == 0) {
        hours = 12;
    } else if (hours >= 12) {
        hours = hours - 12
        period = "PM"

    }

    // add 0 if digit < 10 - ternary 
    hours = hours < 10 ? `0${hours}` : hours;
    mins = mins < 10 ? `0${mins}` : mins;


    // get day
    const currentDay = time.getDay()
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = days[currentDay]

    return `${day} ${hours} : ${mins}`
}








// add city search event
const searchForm = document.getElementById("search-form")

searchForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let showCity = document.getElementById("search-input").value;
    searchCity(showCity);

})





// fetch data from api










// show temp









// show position




