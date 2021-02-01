const input = document.querySelector('#text-input');
const outPut = document.querySelector('#text-output');
const alignButtons = document.querySelectorAll('.align');

function updateText() {
  let inputText = input.value;
  outPut.innerText = inputText;
}

function makeTexStyle(elem, style) {
  elem.classList.toggle('active');
  outPut.classList.toggle(style);
}

function alignText(elem, alignType) {
  alignButtons.forEach((btn) => btn.classList.remove('active'));
  elem.classList.add('active');
  outPut.style.textAlign = alignType;
}
