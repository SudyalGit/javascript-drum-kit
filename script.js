console.log("javascript running");

const playSound = (e) => {
  let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  let key = document.querySelector(`div[data-key='${e.keyCode}']`);
  if (!audio) return;

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};
const removeTransition = function (e) {
  if (e.propertyName != "transform") return;
  this.classList.remove("playing");
};

const playSoundByClicking = function (e) {
  let audio = document.querySelector(
    `audio[data-key='${this.attributes["data-key"].value}']`
  );
  if (!audio) return;

  this.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
};

let keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSound);
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", playSoundByClicking));
