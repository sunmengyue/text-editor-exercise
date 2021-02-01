const input = document.querySelector('#text-input');
const outPut = document.querySelector('#text-output');

function updateText() {
  let inputText = input.value;
  outPut.innerText = inputText;
}

// function makeBold(elem) {
//   elem.classList.toggle('active');
//   outPut.classList.toggle('bold');
// }

// function makeItalic(elem) {
//   elem.classList.toggle('active');
//   outPut.classList.toggle('italic');
// }

// function makeUnderline(elem) {
//   elem.classList.toggle('active');
//   outPut.classList.toggle('underline');
// }

function makeTexStyle(elem, style) {
  elem.classList.toggle('active');
  outPut.classList.toggle(style);
}
