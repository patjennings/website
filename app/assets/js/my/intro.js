export function introHandler() // Gestion des cells de la mosaïque
{
    const docWidth = window.innerWidth;
    const docHeight = window.innerHeight;
    const introElem = document.querySelector(".intro");
    introElem.setAttribute("style", "width: "+docWidth+"px; height: "+docHeight+"px")
}
export function adaptImagesSize() // Gestion des cells de la mosaïque
{
    const slidesElements = document.querySelectorAll(".slide--element");
    const docWidth = window.innerWidth; // largeur totale
    console.log("resize element");
    
    slidesElements.forEach(slideElement => {

	const docWidth = window.innerWidth;
	const docHeight = window.innerHeight;
	slideElement.setAttribute("width", docWidth+"px");
	const elemWidth = slideElement.clientWidth;
	const elemHeight = slideElement.clientHeight;
	const elemRatio = elemWidth/elemHeight;
	const docRatio = docWidth/docHeight;



	console.log("const docWidth = "+docWidth);
	console.log("const docHeight = "+docHeight);
	console.log("const elemWidth = "+elemWidth);
	console.log("const elemHeight = "+elemHeight);
	console.log("const elemRatio = "+elemRatio);
	console.log("const docRatio = "+docRatio);

	

	if(docRatio > elemRatio){
	    const topPosition = (docHeight/2)-(elemHeight/2);
	    slideElement.removeAttribute("height");
	    slideElement.setAttribute("width", docWidth+"px");
	    slideElement.setAttribute("style", "position: absolute; top:"+topPosition+"px;");
	} else {

	    const leftPosition = (docWidth/2)-(elemWidth/2);
	    slideElement.removeAttribute("width");
	    slideElement.setAttribute("height", docHeight+"px");
	    slideElement.setAttribute("style", "position: absolute; left:"+leftPosition+"px;");
	}

    });
}
export function introImagesSlider(){
    let s = 1; // active element
    const tempo = 5000;
    const slidesTexts = document.querySelectorAll(".slide-details");
    const slides = document.querySelectorAll(".slide");
    
    const slidesLength = slides.length;
    // s = Math.floor(Math.random()*slidesLength)+1 // randomize active item
    s = 6;
    
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
    }
}
