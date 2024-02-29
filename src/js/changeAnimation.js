const wordDisplay = document.getElementById("wordDisplay");

function alternateWords() {
  let t = ["imóvel", "automóvel", "terreno"],
    e = 0;
  return function() {
    let o = t[e];
    return e = (e + 1) % t.length, o
  }
}
const getNextWord = alternateWords();

function updateWord() {
  let t = getNextWord();
  wordDisplay.classList.add("fade-out-words"), setTimeout(() => {
    wordDisplay.textContent = t, wordDisplay.classList.remove("fade-out-words");
    let e = window.innerWidth;
    e < 375 && ("automóvel" === t ? wordDisplay.style.fontSize = "30px" : wordDisplay.style.fontSize = ""), setTimeout(() => {
      wordDisplay.classList.add("fade-in-words"), setTimeout(() => {
        wordDisplay.classList.remove("fade-in-words")
      }, 250)
    }, 10)
  }, 250)
}
updateWord(), setInterval(updateWord, 2e3);