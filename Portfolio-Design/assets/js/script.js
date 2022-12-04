'use strict';

// add event listener on multiple elements

const addEventOnElements = function (elements, eventType, callback) {
	for (let i = 0, len = elements.length; i < len; i++) {
		elements[i].addEventListener(eventType, callback);
	}
};

// navbar toggle mobile

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

const toggleNavbar = function () {
	navbar.classList.toggle('active');
	overlay.classList.toggle('active');
	document.body.classList.toggle('nav-active');
};

addEventOnElements(navTogglers, 'click', toggleNavbar);

// header
// active header when window scroll down to 100px

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', function () {
	if (window.scrollY > 100) {
		header.classList.add('active');
	} else {
		header.classList.remove('active');
	}
});

// Scroll reveal
const revealElement = document.querySelectorAll('[data-reveal]');
const revealDelayElement = document.querySelectorAll('[data-reveal-delay]');

const reveal = function () {
	for (let i = 0, len = revealElement.length; i < len; i++) {
		if (
			revealElement[i].getBoundingClientRect().top <
			window.innerHeight / 1.2
		) {
			revealElement[i].classList.add('revealed');
		}
	}
};

for (let i = 0, len = revealDelayElement.length; i < len; i++) {
	revealDelayElement[i].style.transitionDelay =
		revealDelayElement[i].dataset.revealDelay;
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);
