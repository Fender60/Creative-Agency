	"use strict"
	window.onload = movingMenu;
	const burger = document.querySelector('.header__burger');
	if(burger) {
		const burgerRightMenu = document.querySelector('.header__list-burger');
		burger.addEventListener('click', function(e){
			document.body.classList.toggle('_lock');
			burger.classList.toggle('active');
			burgerRightMenu.classList.toggle('active');
		});
	}

	//===================ПЕРЕНОС МЕНЮ=============================================

	const menuListOriginal = document.querySelector('.menu__list');
	const burgerList = document.querySelector('.header__list-burger__list');
	const items = menuListOriginal.querySelectorAll('li');
	
	window.addEventListener('resize', movingMenu);
	 function movingMenu(){
		const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
		for(let i =items.length - 1; i >= 0; i--) {
			if(viewport_width <= 1023) {
					if(!items[i].classList.contains('done')) {
						burgerList.insertBefore(items[i], burgerList.children[0]);
						items[i].classList.add('done');
					}
			} else {
				if(items[i].classList.contains('done')) {
					menuListOriginal.insertBefore(items[i], menuListOriginal.children[0]);
					items[i].classList.remove('done');
				}
			}
		}
	};

