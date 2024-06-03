const colorElement = document.querySelector(".color");
const colorButton = document.querySelector(".color-flipper-button");
const bgElement = document.querySelector(".color-flipper-box");
const titleElement = document.querySelector(".color-flipper-title");
const copyButton = document.querySelector(".color-flipper-copy");
const copyText = document.querySelector(".copied-text");

const hex = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

const createRandomHex = function () {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * hex.length);
    randomHex += hex[randomNumber];
  }
  return randomHex;
};

const updateUi = function (randomHex) {
  copyText.classList.add("hidden");
  colorElement.textContent = randomHex;
  colorElement.style.color = randomHex;
  bgElement.style.backgroundColor = randomHex;
  titleElement.style.color = randomHex;
};

let randomHex = createRandomHex();
updateUi(randomHex);

colorButton.addEventListener("click", () => {
  randomHex = createRandomHex();
  updateUi(randomHex);
});

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(randomHex)
    .then(() => {
      copyText.classList.remove("hidden");
    })
    .catch((error) => {
      alert("Error copying text to clipboard:", error);
    });
});
