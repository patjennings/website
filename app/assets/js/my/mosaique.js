export default function mosaique() // Gestion des cells de la mosaïque
{
    const body = document.body;
    const docWidth = window.innerWidth; // largeur totale
    
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
	item.classList.add("visible");
    });
    console.log("mosaique resized");
}
export function filterMosaique(filter){
    const items = document.querySelectorAll(".mosaic-item");
    const filterLowercase = filter.toLowerCase();
    console.log(filterLowercase);

    items.forEach(item => {
	// item.setAttribute("style", "width:"+s+"px; height:"+s+"px;")
	const itemClassesAttr = item.getAttribute("class");
	// console.log(itemClassesAttr);
	const itemClasses = itemClassesAttr.split(' ');
	let isDisplayed = false;
	itemClasses.forEach(i => {
	    // console.log(i);
	    if(i == filterLowercase){
		isDisplayed = true;
	    }
	});
	// console.log(isDisplayed);
	if(isDisplayed){
	    item.classList.remove("hidden");
	    item.classList.add("visible");
	} else {
	    item.classList.remove("visible");
	    item.classList.add("hidden");
	}
	// console.log(itemClasses);
    });
}
export function resetMosaique(){
    const items = document.querySelectorAll(".mosaic-item");

    items.forEach(item => {
	item.classList.remove("hidden");
    });
}
