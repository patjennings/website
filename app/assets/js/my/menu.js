let menuIsVisible = false;
let menu, menuTrigger, overlay;
let items, videos;

export function menuHandler() // Gestion du menu
{
    menu = document.getElementById("site-menu");
    menuTrigger = document.getElementById("site-menu-trigger");
    overlay = document.getElementById("overlay");
    logo = document.getElementById("logo");
    
    menu.setAttribute("class", "hidden");
    overlay.setAttribute("class", "hidden");
    menuTrigger.setAttribute("class", "closed");
    logo.setAttribute("class", "closed");

    // items = document.querySelectorAll(".menu-item");
    videos = document.querySelectorAll(".item-video"); 

    // item.rollover
    // video position 0
    // video start

    videos.forEach(video => {
	video.addEventListener("mouseover", function(e){
	    // video.controls = true;
	    video.currentTime = 0;
	    video.play();
	})
    })
    
    // document.onmousemove = handleMouseMove;

    menuTrigger.onclick = function(e){
	e.stopPropagation();
	if(menuIsVisible){
	    setTimeout(function(){
		menu.setAttribute("class", "hidden");
		overlay.setAttribute("class", "hidden");
		menuTrigger.setAttribute("class", "closed");
		    logo.setAttribute("class", "closed");
		menuIsVisible = false;
	    }, 75);
	} else {
	    menu.setAttribute("class", "visible");
	    overlay.setAttribute("class", "visible");
	    menuTrigger.setAttribute("class", "open");
	        logo.setAttribute("class", "open");
	    menuIsVisible = true;
	}
    }

    window.onclick = function(){
    	if(menuIsVisible){
	    setTimeout(function(){
		menu.setAttribute("class", "hidden");
		overlay.setAttribute("class", "hidden");
		menuTrigger.setAttribute("class", "closed");
		    logo.setAttribute("class", "closed");
    		menuIsVisible = false;
	    }, 75)

    	} 
    }
}

// function handleMouseMove(e){
//     // console.log(e.pageY);

//     if(menuIsVisible == false && e.clientY < 80){
// 	menu.setAttribute("class", "visible");
// 	overlay.setAttribute("class", "visible");
// 	menuIsVisible = true;
//     }
//     else if(menuIsVisible == true && e.clientY > 288){
// 	menu.setAttribute("class", "hidden");
// 	overlay.setAttribute("class", "hidden");
// 	menuIsVisible = false;
//     }
// }
