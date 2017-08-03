let countdown
const timeDisplay = document.querySelector(".timer")
let value = document.querySelectorAll(".value");
let control = document.querySelectorAll(".control")

function timer(seconds){
  //clear any existing timers
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now())/ 1000)
    if(secondsLeft < 0){
      clearInterval(countdown);
      return

    }
    displayTimeLeft(secondsLeft)
  }, 1000)
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
  timeDisplay.textContent = display;
  document.title = display;

}

function setValue(){
  if(this.textContent == "+"){
    this.previousSibling.previousSibling.innerHTML ++;
  } else if( this.textContent == "-"){
    this.nextSibling.nextSibling.innerHTML --;
  }

}
function getValue() {
  const seconds = (parseInt(this.innerHTML)) * 1000;

  timer(seconds)
}


control.forEach(controle => controle.addEventListener("click", setValue));
value.forEach(val => val.addEventListener("click", getValue));
