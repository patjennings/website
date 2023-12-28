export function adaptSliderImagesSize() {
	const slidesElements = document.querySelectorAll(".slide--image");

	const docWidth = window.innerWidth;
	const docHeight = window.innerHeight;
	const elemWidth = 2560;
	const elemHeight = 1440;
	const elemRatio = elemWidth / elemHeight;
	const docRatio = docWidth / docHeight;

	for (let i = 0; i < slidesElements.length; i++) {
		const slideElement = slidesElements[i];

		let updatedHeight;
		let updatedWidth;
		let updatedLeft;
		let updatedTop;

		updatedLeft = 0 - (docWidth / 4) * i;
		updatedHeight = docHeight;
		updatedWidth = docWidth;

		if (docRatio < elemRatio) {
			slideElement.setAttribute("style", "background-position:" + updatedLeft + "px center; background-size: auto " + updatedHeight + "px;");
		} else if (docRatio > elemRatio) {
			slideElement.setAttribute("style", "background-position:" + updatedLeft + "px center; background-size: " + updatedWidth + "px auto;");
		}
	}
}

export function hoverSliderImage() {
	const slidesElements = document.querySelectorAll(".slide--image");
	const slidesDetailsLinks = document.querySelectorAll(".slide-details")
	dimeHeading();
	resetEverything(slidesElements);
	hideEverything(slidesElements);
	enhanceSlide(slidesElements[0]);

	slidesDetailsLinks.forEach((s, i) => {
		s.addEventListener("mouseover", (e) => {
			dimeHeading();
			resetEverything(slidesElements);
			hideEverything(slidesElements);
			enhanceSlide(slidesElements[i]);
			s.classList.contains('dark') ? changeIntroMode('dark') : changeIntroMode('light')
		})
		s.addEventListener("mouseout", (e) => {
			highlightHeading();
			resetEverything(slidesElements);
		})
	})
}
// tout remettre à opacité moyenne lors du rollout
function resetEverything(elem) {
	elem.forEach((e) => {
		let details = e.parentNode.querySelector(".slide--details");
		details.classList.remove("visible");
		details.classList.add("hidden");
	});
}

export function clickSliderImage() {
	const slidesDetailsLinks = document.querySelectorAll(".slide-details")
	const docHeight = window.innerHeight;
	slidesDetailsLinks.forEach((s) => {
		s.addEventListener("click", g => {

			window.scrollBy({
				top: docHeight,
				left: 0,
				behavior: 'smooth'
			});

			// if (e.pageY > docHeight / 2 && e.pageY < docHeight) {
			// 	const body = document.querySelector('body')
			// 	document.querySelector('body').scrollTo(100, 100);
			// }
		})
	})
}

// tout cacher lorsqu'une slide est active
function hideEverything(elem) {
	elem.forEach((e) => {
		e.classList.add("hidden");
		e.classList.remove("visible");
		e.parentNode.setAttribute("style", "opacity: 0");
	});
}

// au rollover, sur la fiche survolée
function enhanceSlide(slide) {
	slide.classList.remove("hidden");
	slide.classList.add("visible");
	slide.parentNode.setAttribute("style", "left:0; width:100vw;");
	slide.setAttribute('style', slide.getAttribute('style') + 'background-position:0 center;')
	const details = slide.parentNode.querySelector(".slide--details");
	details.classList.remove("hidden");
	details.classList.add("visible");
}

// masquer et montrer à nouveau le nom+titre de l'intro (thomas guesnon, ux…)
function dimeHeading() {
	const heading = document.getElementById("intro--heading");
	heading.classList.add("dimmed");
	heading.classList.remove("highlighted");
}
function highlightHeading() {
	const heading = document.getElementById("intro--heading");
	heading.classList.remove("dimmed");
	heading.classList.add("highlighted");
}

function changeIntroMode(mode) {
	const intro = document.querySelector('.intro');
	const body = document.querySelector('body')
	// console.log(body.classList);
	if (mode == 'light') {
		intro.classList.remove('dark')
		intro.classList.add('light')
		body.classList.remove('theme-dark')
		body.classList.add('theme-light')
	} else if (mode == 'dark') {
		intro.classList.remove('light')
		intro.classList.add('dark')
		body.classList.remove('theme-light')
		body.classList.add('theme-dark')
	} else {
		console.log('mode passed as argument not available');
	}
}