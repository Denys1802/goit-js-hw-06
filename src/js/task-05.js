const inputEl = document.querySelector('#name-input');
//console.log(inputEl);
const nameLabelEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
	console.log(event.currentTarget.value);
	nameLabelEl.textContent = event.currentTarget.value;
}