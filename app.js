
window.addEventListener('keydown', function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;//stops function if the key pressed does not represent an audio file
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
  console.log(key);
});

const keys = document.querySelectorAll(".key");
