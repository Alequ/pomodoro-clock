// Get selectors
let countdown
const timeDisplay = document.querySelector(".timer")
const stopAudio = document.querySelector(".stopAudio")
const ready = document.querySelector(".pomodoro p")
const pomodoro = document.querySelector(".pomodoro")
let flag = false;
const reset = document.querySelector(".reset")
const input = document.querySelectorAll("input")
const audio = document.querySelector("audio")

//create Timer function, passing seconds
function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now(); // get the current date in miliseconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
      audio.loop = false;
      audio.play()
      ready.innerHTML="Start"
      pomodoro.style.borderColor = "#1E521E";
      pomodoro.style.color = "#1E521E";
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);

  }, 1000)
}


function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds <10 ? "0" : ""}${remainderSeconds}`;
  document.title = display;
  timeDisplay.textContent = display;

}



function startValue() {
  flag = !flag
  const string = timeDisplay.textContent.split(":")
  const seconds = parseInt(string[0]) * 60 + parseInt(string[1]);
  if(flag == true) {
    timer(seconds);
    ready.innerHTML="Stop"
    pomodoro.style.borderColor = "red";
    pomodoro.style.color = "red";
  } else {
    clearInterval(countdown);
    ready.innerHTML="Start"
    pomodoro.style.borderColor = "#1E521E";
    pomodoro.style.color = "#1E521E";
  }
}

function resetValue() {
  clearInterval(countdown);
  timeDisplay.innerHTML = "25:00"
  ready.innerHTML = "Start"
  flag = false;
  pomodoro.style.borderColor = "#1E521E";
  pomodoro.style.color = "#1E521E";
}

function getValues () {
  timeDisplay.innerHTML = this.value + ":00"
}
function stopAudioEvent () {
  audio.pause();
  audio.currentTime = 0;
}


pomodoro.addEventListener("click", startValue);
reset.addEventListener("click", resetValue);
input.forEach(inputs => inputs.addEventListener("change", getValues));
stopAudio.addEventListener("click", stopAudioEvent)
