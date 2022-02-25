const drums = document.querySelectorAll('.drum');
const mapping = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
}
drums.forEach(drum => {
  drum.addEventListener("click", (event) => {
    const c = event.target.innerText;
    var audio = new Audio(mapping[c]);
    audio.play();
    playAnimation(c);
  })
})

document.addEventListener('keydown', event => {
  const k = event.key;
  var audio = new Audio(mapping[k]);
  audio.play();
  playAnimation(k)
})

function playAnimation(c) {
  document.querySelector(`.${c}.drum`).classList.add("pressed");
  setTimeout(() => {
    document.querySelector(`.${c}.drum`).classList.remove("pressed");
  }, 100)
}


$('h1').css("color", "red")