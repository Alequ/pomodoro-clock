let countdown
const timeDisplay = document.querySelector(".timer")
let value = document.querySelectorAll(".value");
let control = document.querySelectorAll(".control")

function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now(); // get the current date in miliseconds
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);


  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if(secondsLeft < 0) {
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

function setValue(){
  if(this.textContent == "+"){

    timeDisplay.textContent = this.previousSibling.previousSibling.innerHTML ++ +":00";
  } else if( this.textContent == "-"){
    timeDisplay.textContent = this.nextSibling.nextSibling.innerHTML --  +":00";
  }

}

function getValue() {
  const seconds = parseInt(this.textContent) * 60
  timer(seconds);
}



control.forEach(controle => controle.addEventListener("click", setValue));
timeDisplay.addEventListener("click", getValue);
