// import bubbleAnimation from "./my/bubbleAnimation.js";
import spriteAnimation from "./my/spriteAnimation.js";
// import {bubbleImage, bubbleLoop, bubbleStop} from "./my/bubbleAnimation.js";
import mosaique from "./my/mosaique.js";
import customSelect from "./my/customSelect.js";
import menu from "./my/menu.js";
import {introHandler, introImagesSlider} from "./my/intro.js";

const bubbles = {
    src: "assets/images/bubblesAnimation.svg",
    container: "bubblesAnimation",
    width: 540,
    height : 540,
    columns : 9,
    frames : 90,
    fps : 30
}

const computers = {
    src: "assets/images/computersAnimation.png",
    container: "computersAnimation",
    width: 480,
    height : 480,
    columns : 9,
    frames : 200,
    fps : 24
}

window.onload = function(){
    const homeLayout = document.querySelector(".layout-home")
    const projectsLayout = document.querySelector(".layout-projects")
    const introPresentation = document.getElementById("intro-presentation")
    let bubblesAnim, computersAnim;
    menu();

    if(projectsLayout){
	mosaique();
	customSelect();
    }
    if(homeLayout){
	bubblesAnim = new spriteAnimation(bubbles.src, bubbles.container, bubbles.width, bubbles.height, bubbles.columns, bubbles.frames, bubbles.fps);
	// computersAnim = new spriteAnimation(computers.src, computers.container, computers.width, computers.height, computers.columns, computers.frames, computers.fps);
    }
    
    window.onresize = function() {
	projectsLayout !== null ? mosaique() : null;
	homeLayout !== null ? introHandler() : null;
    }

    introPresentation.addEventListener("mouseover", function(){
	// bubblesAnim.loop();
    });
    introPresentation.addEventListener("mouseout", function(){
	bubblesAnim.stop();
    });
    
    homeLayout !== null ? introImagesSlider() : null;
}
