const playBtn = document.getElementById(`play-btn`);
const pauseBtn = document.getElementById(`pause-btn`);
const stopBtn = document.getElementById(`stop-btn`);
const textInput = document.getElementById(`text`);
const speedInput = document.getElementById(`speed`);

playBtn.addEventListener(`click`, () => {
    playText(textInput.value);
})
pauseBtn.addEventListener(`click`, pauseText);
stopBtn.addEventListener(`click`, stopText);
function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {
        return speechSynthesis.resume();
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speedInput.value || 1;
    utterance.addEventListener(`end`, () => {
        textInput.disabled = false;
    })
    textInput.disabled = true;
    speechSynthesis.speak(utterance)
}
function pauseText() {
if (speechSynthesis.speaking) {
        speechSynthesis.pause();
    }    
}
function stopText() {
    speechSynthesis.resume();
    speechSynthesis.cancel();
}