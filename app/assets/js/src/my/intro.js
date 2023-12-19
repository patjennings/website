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
			if (e.pageX < docWidth * 0.25) {
				resetEverything(slidesElements);
				hideEverything(slidesElements)
				slidesElements[0].classList.remove('hidden');
				slidesElements[0].classList.add('visible');
				slidesElements[0].parentNode.setAttribute('style', 'left:0; width:100vw;');
				slidesElements[0].setAttribute('style', 'background-position:0 center;')
				const details = slidesElements[0].parentNode.querySelector('.slide--details');
				details.classList.remove('hidden');
				details.classList.add('visible');
			} else if (e.pageX > docWidth * 0.25 && e.pageX < docWidth * 0.5) {

				resetEverything(slidesElements);
				hideEverything(slidesElements)
				slidesElements[1].classList.remove('hidden');
				slidesElements[1].classList.add('visible');
				slidesElements[1].parentNode.setAttribute('style', 'left:0; width:100vw;');
				slidesElements[1].setAttribute('style', 'background-position:0 center;')
				const details = slidesElements[1].parentNode.querySelector('.slide--details');
				details.classList.remove('hidden');
				details.classList.add('visible');
			} else if (e.pageX > docWidth * 0.5 && e.pageX < docWidth * 0.75) {
				resetEverything(slidesElements);
				hideEverything(slidesElements)
				slidesElements[2].classList.remove('hidden');
				slidesElements[2].classList.add('visible');
				slidesElements[2].parentNode.setAttribute('style', 'left:0; width:100vw;');
				slidesElements[2].setAttribute('style', 'background-position:0 center;')
				const details = slidesElements[2].parentNode.querySelector('.slide--details');
				details.classList.remove('hidden');
				details.classList.add('visible');
				// slidesElements[2].querySelector('.slide--details').classList.add('visible');

			} else if (e.pageX > docWidth * 0.75) {
				resetEverything(slidesElements);
				hideEverything(slidesElements)
				slidesElements[3].classList.remove('hidden');
				slidesElements[3].classList.add('visible');
				slidesElements[3].parentNode.setAttribute('style', 'left:0; width:100vw;');
				slidesElements[3].setAttribute('style', 'background-position:0 center;')
				const details = slidesElements[3].parentNode.querySelector('.slide--details');
				details.classList.remove('hidden');
				details.classList.add('visible');
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
		let dtls = e.parentNode.querySelector('.slide--details');
		// console.log(dtls);
		console.log(e.parentNode.querySelector('.slide--details'));
		dtls.classList.remove('visible');
		dtls.classList.add('hidden');

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
function highlightHeading(){
	const heading = document.getElementById('intro--heading')
	heading.classList.remove('dimmed')
	heading.classList.add('highlighted')
}
function dimeHeading(){
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
