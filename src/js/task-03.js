const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
//elem.insertAdjacentHTML(position, string);
// "beforebegin" - перед elem
// "afterbegin" - всередині elem, перед усіма дітьми
// "beforeend" - всередині elem, після усіх дітей
// "afterend" - після elem

const galleryEl = document.querySelector('.gallery');

const galleryImage = images.map(image => 
	`<li class="gallery__item">
	<img src = ${image.url} alt = ${image.alt}>
	</li>`
);
galleryEl.insertAdjacentHTML('beforeend', galleryImage);
console.log(galleryImage);

// const galleryImage = images.map(image => {
// 	const liElement = document.createElement('li');
// liElement.classList = 'gallery__item';
// const itemImage = document.createElement('img');
// itemImage.src = image.url;
// itemImage.alt = image.alt;
// liElement.append(itemImage);
// 	console.log(liElement);
// 	galleryEl.append(liElement);
// })
