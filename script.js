/**
 * TODO: Update the text in the "Formatted Text" section as a user types in the textarea
 * TODO TOGETHER: Add a .bold, .italic classes to "Formatted Text" when the appropriate button is clicked
 * TODO: Add an .underline class to "Formatted Text" when Underline button is clicked
 * TODO: Toggle the align style for "Formatted Text" when the appropriate button is clicked
 */

const input = document.querySelector('#text-input');
const output = document.querySelector('#text-output');
const boldButton = document.querySelector('#bold');
const italicButton = document.querySelector('#italic');
const underlineButton = document.querySelector('#underline');
const centerAlignButton = document.querySelector('#center-align');
const rightAlignButton = document.querySelector('#right-align');

/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
document.addEventListener('keydown', updateText);

function updateText() {
  output.innerText = input.value;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
boldButton.addEventListener('click', makeBold);
function makeBold(elem) {
  if (this.elem.innerText) {
    this.elem.classList.toggle('bold');
    console.log('toggle clicked');
  }
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic(elem) {}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline(elem) {
  //CODE GOES HERE
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText(elem, alignType) {
  // CODE GOES HERE
}
