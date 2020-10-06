export default function mosaic() // Gestion des cells de la mosaïque
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
