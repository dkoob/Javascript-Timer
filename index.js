const abcdef = "hello"

const container = document.querySelector(".container")
const start = document.querySelector("#start")
const pause = document.querySelector("#pause")
const reset = document.querySelector("#reset")
const output = document.querySelector("output")
let seconds = 0
let minutes = 0
let hours = 0
let IntervalId

start.addEventListener("click", () => {
    container.classList.remove("red", "white")
    container.classList.add("green")
    intervalId = setInterval(startTimer, 1000)
})

pause.addEventListener("click", () => {
    if (seconds > 0 || minutes > 0 || hours > 0){
        container.classList.remove("green", "white")
        container.classList.add("red")
        clearInterval(intervalId)
    }else{
        console.log("Your stopwatch isnt even started yet!")
    }

})

reset.addEventListener("click", () => {
    container.classList.remove("green", "red")
    container.classList.add("white")
    clearInterval(intervalId)
    seconds = 0
    minutes = 0
    hours = 0
    render()
})

function startTimer () {
    seconds++
    if (seconds >= 60) {
        minutes++
        seconds = 0
    }
    if (minutes >= 60) {
        hours++
        minutes = 0
    }
    render()
}

function render() {
    const formattedSeconds = seconds.toString().padStart(2, "0")
    const formattedMinutes = minutes.toString().padStart(2, "0")
    const formattedHours = hours.toString().padStart(2, "0")
    output.innerHTML = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}