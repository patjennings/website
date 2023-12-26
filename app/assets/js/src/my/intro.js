// export function introHandler() // Gestion des cells de la mosaïque
// {
//     const docWidth = window.innerWidth;
//     const docHeight = window.innerHeight;
//     const introElem = document.querySelector(".intro");
//     introElem.setAttribute("style", "width: "+docWidth+"px; height: "+docHeight+"px")
// }
export function adaptSliderImagesSize() {
	// Gestion des cells de la mosaïque
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
	document.addEventListener("mousemove", (e) => {
		const docWidth = window.innerWidth;
		const docHeight = window.innerHeight;

		const slidesElements = document.querySelectorAll(".slide--image");

		if (e.pageY > docHeight / 2 && e.pageY < docHeight) {
			dimeHeading();
			resetEverything(slidesElements);
			hideEverything(slidesElements);
			if (e.pageX < docWidth * 0.25) {
				enhanceSlide(slidesElements[0]);
			} else if (e.pageX > docWidth * 0.25 && e.pageX < docWidth * 0.5) {
				enhanceSlide(slidesElements[1]);
			} else if (e.pageX > docWidth * 0.5 && e.pageX < docWidth * 0.75) {
				enhanceSlide(slidesElements[2]);
			} else if (e.pageX > docWidth * 0.75) {
				enhanceSlide(slidesElements[3]);
			}
		} else {
			highlightHeading();
			adaptSliderImagesSize();
			resetEverything(slidesElements);
		}
	});
}
// tout remettre à opacité moyenne lors du rollout
function resetEverything(elem) {
	elem.forEach((e) => {
		// console.log(e);
		e.classList.remove("hidden");
		e.classList.remove("visible");
		e.parentNode.removeAttribute("style");
		// e.setAttribute('style', e.getAttribute('style') + '; opacity: 0.5');
		let details = e.parentNode.querySelector(".slide--details");
		details.classList.remove("visible");
		details.classList.add("hidden");
		const title = e.parentNode.querySelector(".slide--title");
		title.classList.add("visible");
		title.classList.remove("hidden");
	});
}

export function clickSliderImage() {
	document.addEventListener("click", e => {

		const docWidth = window.innerWidth;
		const docHeight = window.innerHeight;

		const slidesElements = document.querySelectorAll(".slide--image");

		if (e.pageY > docHeight / 2 && e.pageY < docHeight) {
			console.log("ça clique !");
			const body = document.querySelector('body')
			console.log(docHeight);

			document.querySelector('body').scrollTo(100, 100);
			window.scrollBy({
				top: docHeight,
				left: 0,
				behavior: 'smooth'
			});
		}
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
	const title = slide.parentNode.querySelector(".slide--title");
	details.classList.remove("hidden");
	details.classList.add("visible");
	title.classList.remove("visible");
	title.classList.add("hidden");
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
