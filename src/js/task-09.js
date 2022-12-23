function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector('.change-color');
const textEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', changeBgColor);

function changeBgColor() {
	bodyEl.style.backgroundColor = getRandomHexColor();
	textEl.textContent = getRandomHexColor();
}
