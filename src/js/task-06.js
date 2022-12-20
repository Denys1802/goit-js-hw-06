const inputEl = document.querySelector("#validation-input");
console.log(inputEl);
inputEl.addEventListener('blur', validValue);

function validValue(event) {
	//console.log(event.currentTarget.value);
	const lengthEvent = event.currentTarget.value.split('').length;
	//console.log(lengthEvent);
	if (lengthEvent >= inputEl.attributes[2].value) {
		inputEl.classList.add('valid');
	} else {
		inputEl.classList.add('invalid');
	}
}