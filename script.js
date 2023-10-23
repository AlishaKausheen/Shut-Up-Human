const playBtn = document.getElementById(`play-btn`);
const pauseBtn = document.getElementById(`pause-btn`);
const stopBtn = document.getElementById(`stop-btn`);
const textInput = document.getElementById(`text`);
const speedInput = document.getElementById(`speed`);

playBtn.addEventListener(`click`, () => {
    playText(textInput.value);
})
function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = speedInput.value || 1
    speechSynthesis.speak(utterance)
}