const input = document.querySelector('#text-input');
const output = document.querySelector('#text-output');
const boldButton = document.querySelector('#bold');
const italicButton = document.querySelector('#italic');
const underlineButton = document.querySelector('#underline');
const alignButtons = document.querySelectorAll('align btn');
// const leftAlignButton = document.querySelector('#left-align');
// const centerAlignButton = document.querySelector('#center-align');
// const rightAlignButton = document.querySelector('#right-align');

document.addEventListener('keypress', updateText);
boldButton.addEventListener('click', makeBold);
italicButton.addEventListener('click', makeItalic);
underlineButton.addEventListener('click', makeUnderline);
alignButtons.forEach((alignBtn) =>
  alignBtn.addEventListener('click', alignText),
);

function updateText() {
  output.innerText = input.value;
}

function makeBold() {
  output.classList.toggle('bold');
}

function makeItalic() {
  output.classList.toggle('italic');
}

function makeUnderline() {
  output.classList.toggle('underline');
}

function alignText(alignType) {}
