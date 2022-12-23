

const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const allCategoriesEl = document.querySelectorAll('.item')

for (const el of allCategoriesEl) {
	console.log(`Category: ${el.children[0].textContent}`);

	console.log(`Elements: ${el.children[1].childElementCount}`);
}




