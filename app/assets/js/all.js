let menuIsVisible = false;

window.onload = function(){
    const homeLayout = document.querySelector(".layout-home")
    mosaicHandler();
    menuHandler();

    window.onresize = function() {
	mosaicHandler();
	homeLayout !== null ? introHandler() : null;
    }
    
    homeLayout !== null ? introImagesSlider() : null;
}

function menuHandler() // Gestion du menu
{
    const menu = document.getElementById("site-menu");

    menu.onclick = function(e){
	e.stopPropagation();
	if(menuIsVisible){
	    setTimeout(function(){
		menu.setAttribute("class", "hidden");
		menuIsVisible = false;
	    }, 75);
	} else {
	    menu.setAttribute("class", "visible");
	    menuIsVisible = true;
	}
    }

    window.onclick = function(){
    	if(menuIsVisible){
	    setTimeout(function(){
		menu.setAttribute("class", "hidden");
    		menuIsVisible = false;
	    }, 75)

    	} 
    }
}

function mosaicHandler() // Gestion des cells de la mosaïque
{
    const body = document.body;
    const docWidth = window.innerWidth-56; // largeur totale
    
    const step = 256; // responsive step
    const o = Math.floor(docWidth/step); // l'operateur de division
    const s = Math.floor(docWidth/o); // taille du carre de grille

    // Position de la mosaique (integrée dans le contenu principal, qu'on veut remettre à pleine largeur)
    const container = document.getElementById("mosaique");
    const parent = document.querySelector(".content");
    let parentXPosition;
    parent ? parentXPosition = (parent.getBoundingClientRect().x)-8 : null;
    parent ? container.setAttribute("style", "margin-left:-"+parentXPosition+"px") : null
    
    const items = document.querySelectorAll(".mosaic-item");

    items.forEach(item => {
	item.setAttribute("style", "width:"+s+"px; height:"+s+"px;")
    });
    console.log("mosaique resized");
}
function introHandler() // Gestion des cells de la mosaïque
{
    const docWidth = window.innerWidth;
    const docHeight = window.innerHeight;
    const introElem = document.querySelector(".intro");
    introElem.setAttribute("style", "width: "+docWidth+"px; height: "+docHeight+"px")

    console.log("intro resized");
}
function introImagesSlider(){
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
