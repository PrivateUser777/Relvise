'use strict'


window.addEventListener('DOMContentLoaded', () => {
	
	
//!Меню бургер
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
	const headerList = document.querySelector('.header__list');
	const headerItem = document.querySelectorAll('.header__item');
	const headerBurger = document.querySelector('.header__burger');

	headerBurger.addEventListener('click', () => {
		headerBurger.classList.toggle('header__burger_active');
		headerList.classList.toggle('header__list_active');
	});

	headerItem.forEach(item => {
		item.addEventListener('click', () => {
			headerBurger.classList.toggle('header__burger_active');
			headerList.classList.toggle('header__list_active');
		});
	}); 
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //


//!Плавный скрол до элементов с якорем
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //
const anchors = document.querySelectorAll('a[href *="#"]');

for(let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		event.preventDefault();
		const blockID = anchor.getAttribute('href')
		document.querySelector('' + blockID).scrollIntoView({
			behavior: "smooth",
			block: "start"
		});
	});
}
// // // // // // // // // // // // // // // // // // // // //// // // // // // // // // // // // // // // // //




});