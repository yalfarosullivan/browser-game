//Create a timer
let remainingTimeElement = document.querySelector("#remainingTime"),
             secondsLeft = 10,
             progressBar = document.querySelector("#progressBar"),
          progressBarDiv = document.querySelector(".progressBarDiv"),
          downloadBegins = document.querySelector(".downloadBegins"),
        downloadDuration = 10

const downloadTimer = setInterval( 
    () => {
        if (secondsLeft <= 0) {
            clearInterval(downloadTimer)
            downloadBegins.style.display = "None"
        }
        remainingTimeElement.value = secondsLeft
        remainingTimeElement.textContent = secondsLeft
        secondsLeft -= 1
    }, 
1000)

setTimeout(() => {
    const downloadProgress = setInterval( 
        () => {
            if (downloadDuration <= 0) clearInterval(downloadProgress)
            progressBar.value = 10 - downloadDuration
            progressBar.textContent = `${(10 - downloadDuration) * 10}%`
            progressBarDiv.style.width = `${(10 - downloadDuration) * 10}%`
            progressBarDiv.style.padding = `${0.5}rem`
            downloadDuration -= 1
        }, 
    100)
}, 12000)