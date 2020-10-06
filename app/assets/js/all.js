// import bubbleAnimation from "./my/bubbleAnimation.js";
import {bubbleImage, bubbleLoop, bubbleStop} from "./my/bubbleAnimation.js";
import mosaic from "./my/mosaic.js";
import menu from "./my/menu.js";
import {introHandler, introImagesSlider} from "./my/intro.js";

window.onload = function(){
    const homeLayout = document.querySelector(".layout-home")
    const introPresentation = document.getElementById("intro-presentation")
    mosaic();
    menu();
    // bubbleAnimation();

    console.log(homeLayout);
    
    homeLayout !== null ? bubbleImage.src = "assets/images/bubblesAnimation.svg" : null;
    homeLayout !== null ? bubbleImage.addEventListener("load", bubbleLoop) : null;

    
    window.onresize = function() {
	mosaic();
	homeLayout !== null ? introHandler() : null;
    }

    // introPresentation.addEventListener("mouseover", function(){
    // 	console.log("mouse is over")
    // 	bubbleLoop();
    // });
    // introPresentation.addEventListener("mouseout", function(){
    // 	// bubbleStop();
    // 	console.log("mouse is out")
    // 	window.cancelAnimationFrame(bubbleLoop);
    // });
    
    homeLayout !== null ? introImagesSlider() : null;
}
