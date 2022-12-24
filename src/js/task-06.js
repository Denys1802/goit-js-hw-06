const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener('blur', validValue);

function validValue(event) {
	const lengthEvent = event.currentTarget.value.split('').length;
	const inputLength = +inputEl.getAttribute('data-length');
	
	if (lengthEvent === inputLength) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid')
	} else {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid')
	}
}