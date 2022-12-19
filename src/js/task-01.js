// const allCategoriesEl = document.querySelectorAll('.item');
// console.log(`Number of categories: ${allCategoriesEl.length}`);

const categoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesEl.children.length}`);

const allCategoriesEl = document.querySelectorAll('.item')
//console.log(allCategoriesEl);
for (const el of allCategoriesEl) {
	console.log(`Category: ${el.children[0].textContent}`);

	console.log(`Elements: ${el.children[1].childElementCount}`);
}

// for (const item of itemTitlesEl) {
// 	console.log(`Category: ${item.textContent}`);
// 	for (const subItem of subListItemEl) {
// 	const childrenSubItems = subItem.children;
// 	console.log(`Elements: ${childrenSubItems.length}`);
// 	// for (const item of childrenSubItems) {
// 	// 	console.log(item.);
// 	// }
	
// }
// };



