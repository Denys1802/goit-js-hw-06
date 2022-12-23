const inputEl = document.querySelector('#name-input');
//console.log(inputEl);
const nameLabelEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
	console.log(event.currentTarget.value);
	if (event.currentTarget.value === '') {
		//console.log(nameLabelEl.textContent);
		return nameLabelEl.textContent = 'Anonymous';
	} else {
		return nameLabelEl.textContent = event.currentTarget.value;
	}
}