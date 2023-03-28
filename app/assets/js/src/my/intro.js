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

    const docWidth = window.innerWidth;
    const docHeight = window.innerHeight;
    const elemWidth = 2560;
    const elemHeight = 1440;
    const elemRatio = elemWidth/elemHeight;
    const docRatio = docWidth/docHeight;
    
    slidesElements.forEach(slideElement => {

	      let updatedHeight;
	      let updatedWidth;
	      let updatedLeft;
	      let updatedTop;

	      if(docRatio < elemRatio){
	          
	          console.log("docRatio < elemRatio");
	          updatedHeight = docHeight;
	          updatedWidth = docHeight*elemRatio;
	          updatedLeft = (docWidth/2)-(updatedWidth/2);
	          updatedTop = 0;
	          
	      } else if(docRatio > elemRatio){
	          console.log("docRatio > elemRatio");
	          
	          updatedWidth = docWidth;
	          updatedHeight = docWidth/elemRatio;
	          updatedLeft = 0;
	          updatedTop = (docHeight/2)-(updatedHeight/2);

	      }
	      slideElement.removeAttribute("height");
	      slideElement.setAttribute("width", updatedWidth+"px");
	      slideElement.setAttribute("height", updatedHeight+"px");
	      slideElement.setAttribute("style", "position: absolute; top:"+updatedTop+"px; left:"+updatedLeft+"px;");
    });
}
export function introImagesSlider(){
    let s = 1; // active element
    const tempo = 5000;
    const slidesTexts = document.querySelectorAll(".slide-details");
    const slides = document.querySelectorAll(".slide");
    const slidesLength = slides.length;
    // s = Math.floor(Math.random()*slidesLength)+1 // randomize active item
    console.log(slidesTexts);
    s = 5;
    let activeSlidesText = document.getElementById("slide-details-"+s);
    let activeSlide = document.getElementById("slide-"+s);

    display(activeSlidesText, activeSlide);
    const intrv = setInterval(imagesSliding, tempo);

    function display(activeSlidesText, activeSlide){
	      // hide all slide's texts
	      slidesTexts.forEach(item => {
	          item.setAttribute("class", "slide-details hidden")
	      });
	      slides.forEach(item => {
	          item.setAttribute("class", "slide hidden")
	      });

	      // show active slide's text
	      activeSlidesText.setAttribute("class", "slide-details visible");
	      activeSlide.setAttribute("class", "slide visible");
    }
    
    function imagesSliding() {
	      s == slidesLength ? s = 1 : s++; // réinitialisation
	      activeSlidesText = document.getElementById("slide-details-"+s);
	      activeSlide = document.getElementById("slide-"+s);
	      display(activeSlidesText, activeSlide);
    }
}
