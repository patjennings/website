// export function introHandler() // Gestion des cells de la mosaïque
// {
//     const docWidth = window.innerWidth;
//     const docHeight = window.innerHeight;
//     const introElem = document.querySelector(".intro");
//     introElem.setAttribute("style", "width: "+docWidth+"px; height: "+docHeight+"px")
// }
export function adaptSliderImagesSize() // Gestion des cells de la mosaïque
{
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

		// if (docRatio < elemRatio) {
		// } else if (docRatio > elemRatio) {
		// }
		slideElement.setAttribute('style', 'background-position:' + updatedLeft + 'px center;')

	}
}

export function hoverSliderImage() {
	document.addEventListener('mousemove', e => {

		const docWidth = window.innerWidth;
		const docHeight = window.innerHeight;

		const slidesElements = document.querySelectorAll(".slide--image");


		if (e.pageY > docHeight / 2) {
			dimeHeading()
			resetEverything(slidesElements);
			hideEverything(slidesElements)
			if (e.pageX < docWidth * 0.25) {
				enhanceSlide(slidesElements[0])
			} else if (e.pageX > docWidth * 0.25 && e.pageX < docWidth * 0.5) {
				enhanceSlide(slidesElements[1])
			} else if (e.pageX > docWidth * 0.5 && e.pageX < docWidth * 0.75) {
				enhanceSlide(slidesElements[2])
			} else if (e.pageX > docWidth * 0.75) {
				enhanceSlide(slidesElements[3])
			}
		} else {
			highlightHeading();
			adaptSliderImagesSize();
			resetEverything(slidesElements)
			slidesElements.forEach(se => {
				se.classList.remove('hidden');
				se.classList.add('visible');
			})
		}

	});
}
// tout remettre à opacité moyenne lors du rollout
function resetEverything(elem) {
	elem.forEach(e => {
		console.log(e);
		e.classList.remove('hidden');
		e.classList.remove('visible');
		e.parentNode.removeAttribute('style');
		e.setAttribute('style', e.getAttribute('style') + '; opacity: 0.5');
		let details = e.parentNode.querySelector('.slide--details');
		details.classList.remove('visible');
		details.classList.add('hidden');
		const title = e.parentNode.querySelector('.slide--title');
		title.classList.add('visible');
		title.classList.remove('hidden');
	});
}

// tout cacher lorsqu'une slide est active
function hideEverything(elem) {
	elem.forEach(e => {
		e.classList.add('hidden');
		e.classList.remove('visible');
		e.parentNode.setAttribute('style', 'opacity: 0');
	});
}
function enhanceSlide(slide) {
	slide.classList.remove('hidden');
	slide.classList.add('visible');
	slide.parentNode.setAttribute('style', 'left:0; width:100vw;');
	slide.setAttribute('style', 'background-position:0 center;')
	const details = slide.parentNode.querySelector('.slide--details');
	const title = slide.parentNode.querySelector('.slide--title');
	details.classList.remove('hidden');
	details.classList.add('visible');
	title.classList.remove('visible');
	title.classList.add('hidden');
}
function highlightHeading() {
	const heading = document.getElementById('intro--heading')
	heading.classList.remove('dimmed')
	heading.classList.add('highlighted')
}
function dimeHeading() {
	const heading = document.getElementById('intro--heading')
	heading.classList.add('dimmed')
	heading.classList.remove('highlighted')
}

// export function introImagesSlider(){
//     let s = 1; // active element
//     const tempo = 5000;
//     const slidesTexts = document.querySelectorAll(".slide-details");
//     const slides = document.querySelectorAll(".slide");
//     const slidesLength = slides.length;
//     // s = Math.floor(Math.random()*slidesLength)+1 // randomize active item
//     console.log(slidesTexts);
//     s = 5;
//     let activeSlidesText = document.getElementById("slide-details-"+s);
//     let activeSlide = document.getElementById("slide-"+s);
// 
//     display(activeSlidesText, activeSlide);
//     const intrv = setInterval(imagesSliding, tempo);
// 
//     function display(activeSlidesText, activeSlide){
// 	      // hide all slide's texts
// 	      slidesTexts.forEach(item => {
// 	          item.setAttribute("class", "slide-details hidden")
// 	      });
// 	      slides.forEach(item => {
// 	          item.setAttribute("class", "slide hidden")
// 	      });
// 
// 	      // show active slide's text
// 	      activeSlidesText.setAttribute("class", "slide-details visible");
// 	      activeSlide.setAttribute("class", "slide visible");
//     }
//     
//     function imagesSliding() {
// 	      s == slidesLength ? s = 1 : s++; // réinitialisation
// 	      activeSlidesText = document.getElementById("slide-details-"+s);
// 	      activeSlide = document.getElementById("slide-"+s);
// 	      display(activeSlidesText, activeSlide);
//     }
// }
