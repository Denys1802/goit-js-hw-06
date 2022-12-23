function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.

// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const inputEl = document.querySelector('#controls input');
const createEl = document.querySelector('[data-create]');
createEl.addEventListener('click', getAmount);

const destroyEl = document.querySelector('[data-destroy]');
destroyEl.addEventListener('click', destroyBoxes)
const boxesEl = document.querySelector('#boxes');

function getAmount() {
	const amount = +inputEl.value;
	//console.log(amount);
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
