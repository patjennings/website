// gestion du scroll du menu
export default function scroll(){
    const header = document.getElementById("site-header");
    console.log(header);
    window.onscroll = function (e) {  
        // called when the window is scrolled.  
        console.log(window.pageYOffset);
    } 
}
