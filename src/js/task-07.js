const inputEl = document.querySelector('#font-size-control');
//console.log(inputEl.value);
const spanTextEl = document.querySelector('#text');
//console.log(spanTextEl);
inputEl.addEventListener('input', changeFontSize);


function changeFontSize() {
	console.log(spanTextEl);
	spanTextEl.style.fontSize = inputEl.value + 'px';
}