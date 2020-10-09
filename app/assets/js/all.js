// import bubbleAnimation from "./my/bubbleAnimation.js";
import {bubbleImage, bubbleLoop, bubbleStop} from "./my/bubbleAnimation.js";
import mosaique from "./my/mosaique.js";
import customSelect from "./my/customSelect.js";
import menu from "./my/menu.js";
import {introHandler, introImagesSlider} from "./my/intro.js";

window.onload = function(){
    const homeLayout = document.querySelector(".layout-home")
    const projectsLayout = document.querySelector(".layout-projects")
    const introPresentation = document.getElementById("intro-presentation")
    // mosaique();
    menu();
    // bubbleAnimation();

    // console.log(homeLayout);

    projectsLayout !== null ? mosaique() : null;
    projectsLayout !== null ? customSelect() : null;
    
    homeLayout !== null ? bubbleImage.src = "assets/images/bubblesAnimation.svg" : null;
    homeLayout !== null ? bubbleImage.addEventListener("load", bubbleLoop) : null;

    
    window.onresize = function() {
	projectsLayout !== null ? mosaique() : null;
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
