const currentValue = document.querySelector('#value');
//console.log(currentValue);

let counterValue = 0;
const decrementEl = document.querySelector('button[data-action = "decrement"]');
decrementEl.addEventListener('click', () => {
	counterValue -= 1;
	currentValue.textContent = counterValue
})
const incrementEl = document.querySelector('button[data-action = "increment"]');

incrementEl.addEventListener('click', () => {
	counterValue += 1;
	currentValue.textContent = counterValue;
})
