export function introHandler() // Gestion des cells de la mosaïque
{
    const docWidth = window.innerWidth;
    const docHeight = window.innerHeight;
    const introElem = document.querySelector(".intro");
    introElem.setAttribute("style", "width: "+docWidth+"px; height: "+docHeight+"px")

    console.log("intro resized");
}
export function introImagesSlider(){
    let s = 1; // active element
    const tempo = 5000;
    const slidesTexts = document.querySelectorAll(".slide-details");
    const slides = document.querySelectorAll(".slide");
    
    const slidesLength = slides.length;
    s = Math.floor(Math.random()*slidesLength)+1 // randomize active item

    let activeSlidesText = document.getElementById("slide-details-"+s);
    let activeSlide = document.getElementById("slide-"+s);

    display(activeSlidesText, activeSlide);
    const intrv = setInterval(imagesSliding, tempo);

    function display(activeSlidesText, activeSlide){
	// hide all slide's texts
	slidesTexts.forEach(item => {
	    item.setAttribute("class", "slide-details hidden")
	})
	slides.forEach(item => {
	    item.setAttribute("class", "slide hidden")
	})

	// show active slide's text
	activeSlidesText.setAttribute("class", "slide-details visible")
	activeSlide.setAttribute("class", "slide visible")
    }
    
    function imagesSliding() {
	s == slidesLength ? s = 1 : s++; // réinitialisation
	activeSlidesText = document.getElementById("slide-details-"+s);
	activeSlide = document.getElementById("slide-"+s);
	display(activeSlidesText, activeSlide);

	console.log("slide has changed");
    }
}
