const menu = document.getElementById("word-select");
const display = document.getElementById("sentence-text-area");
const wordButton = document.querySelector(".js-word-button");
const sentenceButton = document.querySelector(".js-sentence-button");

function displaySentence() {
  if (menu.selectedIndex > 0) {
    const selectedOption = menu.options[menu.selectedIndex];
    display.value = selectedOption.dataset.sentence;
  } else {
    display.value = "";
  }
}

function speak(textToSay) {
  const message = new SpeechSynthesisUtterance(textToSay);
  message.pitch = 1.2;
  message.rate = 1.0;
  window.speechSynthesis.speak(message);
}

wordButton.addEventListener("click", () => {
  if (menu.selectedIndex > 0) {
    const selectedOption = menu.options[menu.selectedIndex];
    speak(selectedOption.value);
  }
});
sentenceButton.addEventListener("click", () => {
  if (display.value !== "") {
    speak(display.value);
  }
});
