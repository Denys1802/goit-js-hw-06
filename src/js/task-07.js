const inputEl = document.querySelector('#font-size-control');

const spanTextEl = document.querySelector('#text');

inputEl.addEventListener('input', changeFontSize);

function changeFontSize() {
	console.log(spanTextEl);
	spanTextEl.style.fontSize = inputEl.value + 'px';
}