let menuIsVisible = false;

export default function menu() // Gestion du menu
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
