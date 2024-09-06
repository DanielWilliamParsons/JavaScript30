removeTransition = function(e) {
    console.log(e.propertyName);
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

playSound = function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    console.log(audio);
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}



const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => {
    key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);
