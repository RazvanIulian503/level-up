// Scroll Reveal 

ScrollReveal().reveal('.reveal', { distance: '100px' });

//Menu toggle

const menuBtn = document.querySelector('.menu-btn');
const phoneMenu = document.querySelector('.menu');
const hamburger = document.querySelector('.menu-btn-burger');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
	if(!showMenu) {
			hamburger.classList.add('open');
			phoneMenu.style.display = 'block';
	
			showMenu = true;
	} else {
			hamburger.classList.remove('open');
			phoneMenu.style.display = 'none';

			showMenu = false;
	}
}


window.addEventListener('mouseup', function(event) {
	let box = document.querySelector('.menu');
	if (event.target != box && event.target.parentNode != box) {
		box.style.display = 'none'
		hamburger.classList.remove('open');
	}
});