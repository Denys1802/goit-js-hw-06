function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('[data-create]');
createEl.addEventListener('click', getAmount);

const destroyEl = document.querySelector('[data-destroy]');
destroyEl.addEventListener('click', destroyBoxes)
const boxesEl = document.querySelector('#boxes');

function getAmount() {
	const amount = +inputEl.value;
	createBoxes(amount);
};

function createBoxes(amount) {
	const currentDivSize = 30;
	for (let i = 0; i < amount; i += 1) {
		let size = currentDivSize + i * 10;
		const divEl = document.createElement('div');
		divEl.style.width = `${size}px`;
		divEl.style.height = `${size}px`;
		divEl.style.backgroundColor = getRandomHexColor();
		boxesEl.append(divEl);
	}
}

function destroyBoxes() {
	inputEl.value = '';
	boxesEl.innerHTML = '';
}
