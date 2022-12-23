const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEl = document.querySelector('#ingredients');

const listIngradients = ingredients.map(ingredient => {
	const liEl = document.createElement('li');
liEl.textContent = `${ingredient}`;
liEl.classList = 'item';
ulEl.append(liEl);
})



	

