
const numberButtons = document.getElementsByClassName("num-btn");
const operatorButtons = document.getElementsByClassName("op-btn");

const deleteButton = document.querySelector(".del-btn");
const resultButton = document.querySelector(".equal-btn");
const resetButton = document.querySelector(".reset-btn");

let displayText = document.querySelector(
  ".outer-container > div:nth-of-type(2) > h1"
);

let displayTextAbove = document.querySelector(
  ".outer-container > div:nth-of-type(2) > h2"
);

displayText.innerText = "";
displayTextAbove.innerText = "";

for (let i = 0; i < numberButtons.length; i++) {
  numberButtons[i].addEventListener("click", () => {
    displayText.innerText += numberButtons[i].value;
  });
}

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", () => {
    console.log(operatorButtons[i].value);
    displayTextAbove.innerText +=
      displayText.innerText + operatorButtons[i].value;
    displayText.innerText = "";
  });
}

deleteButton.addEventListener("click", () => {
  if (displayText.innerText !== "") {
    const text = displayText.innerText.slice(0, -1);
    displayText.innerText = text;
  } else {
    alert("No value is present");
  }
});

resetButton.addEventListener("click", () => {
  displayText.innerText = "";
  displayTextAbove.innerText = "";
});