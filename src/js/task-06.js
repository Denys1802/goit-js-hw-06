const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
inputEl.addEventListener('blur', validValue);

function validValue(event) {
	const lengthEvent = event.currentTarget.value.split('').length;
	
	if (lengthEvent >= inputEl.attributes[2].value) {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid')
	} else {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid')
	}
}