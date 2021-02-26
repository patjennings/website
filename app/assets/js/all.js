// import bubbleAnimation from "./my/bubbleAnimation.js";
import spriteAnimation from "./my/spriteAnimation.js";
// import {bubbleImage, bubbleLoop, bubbleStop} from "./my/bubbleAnimation.js";
import mosaique from "./my/mosaique.js";
import customSelect from "./my/customSelect.js";
import menu from "./my/menu.js";
import {introHandler, introImagesSlider} from "./my/intro.js";
import {presentationHandler} from "./my/presentation.js";

// const bubbles = {
//     src: "assets/images/bubblesAnimation.svg",
//     container: "bubblesAnimation",
//     width: 540,
//     height : 540,
//     columns : 9,
//     frames : 90,
//     fps : 30
// }

const computers = {
    src: "assets/images/computersAnimation.png",
    container: "computersAnimation",
    width: 480,
    height : 480,
    columns : 9,
    frames : 200,
    fps : 24
}


window.onload = function(e){
    // hide loader
    const loadingStatus = document.getElementById("loading-status"); 
    loadingStatus.setAttribute("class", "hidden");   
    const pageBody = document.querySelector(".is-loading")
    pageBody.classList.remove("is-loading")
    
    const homeLayout = document.querySelector(".layout-home")
    const projectsLayout = document.querySelector(".layout-projects")

    let bubblesAnim, computersAnim;
    menu();

    if(projectsLayout){
	mosaique();
	customSelect();
    }
    if(homeLayout){
	presentationHandler();
    }
    
    window.onresize = function() {
	projectsLayout !== null ? mosaique() : null;
	homeLayout !== null ? introHandler() : null;
	homeLayout !== null ? presentationHandler() : null;
    }
    
    homeLayout !== null ? introImagesSlider() : null;
}
