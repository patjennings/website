let menuIsVisible = false;
let menu, menuTrigger, overlay, logo;
let items, videos;

export function menuHandler() // Gestion du menu
{
    menu = document.getElementById("site-menu--mobile");
    menuTrigger = document.getElementById("site-menu--mobile-trigger");
    overlay = document.getElementById("overlay");
    logo = document.getElementById("logo");
    
    menu.setAttribute("class", "hidden");
    overlay.setAttribute("class", "hidden");
    menuTrigger.setAttribute("class", "closed");
    logo.setAttribute("class", "closed");

    videos = document.querySelectorAll(".item-video");

    videos.forEach(video => {
	      video.addEventListener("mouseover", function(e){
	          // video.controls = true;
	          video.currentTime = 0;
	          video.play();
	      })
    })

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
