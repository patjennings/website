import {filterReferences, resetReferences} from "./references.js";

let defaultValue;

export default function customSelect(){
    // console.log("this is it");
    var ll, selectElem, a, b, c;
    
    /* Look for any elements with the class "custom-select": */
    const filters = document.getElementsByClassName("filters");
    const filtersLength= filters.length;

    const filtersActions = document.getElementById("filters-actions--reset");
    filtersActions.setAttribute("class", "hidden");
    
    for (let i = 0; i < filtersLength; i++) {
	selectElem = filters[i].getElementsByTagName("select")[0];
	ll = selectElem.length;
	
	/* For each element, create a new DIV that will act as the selected item: */
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selectElem.options[selectElem.selectedIndex].innerHTML;
	filters[i].appendChild(a);
	
	/* For each element, create a new DIV that will contain the option list: */
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	
	for (let j = 1; j < ll; j++) {
	    
	    /* For each option in the original select element,
	       create a new DIV that will act as an option item: */
	    c = document.createElement("DIV");
	    c.innerHTML = selectElem.options[j].innerHTML;
	    
	    c.addEventListener("click", function(e) {
		/* When an item is clicked, update the original select box,
		   and the selected item: */
		// console.log("salut");
		var y, s, h, sl, yl;
		s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		defaultValue = s[0].innerHTML;
		sl = s.length;
		h = this.parentNode.previousSibling;
		for (let i = 0; i < sl; i++) {
		    if (s.options[i].innerHTML == this.innerHTML) {
			s.selectedIndex = i;
			h.innerHTML = this.innerHTML;
			y = this.parentNode.getElementsByClassName("same-as-selected");
			yl = y.length;
			for (let k = 0; k < yl; k++) {
			    y[k].removeAttribute("class");
			}
			this.setAttribute("class", "same-as-selected");
			break;
		    }
		}
		h.click();
		filterReferences(this.innerHTML); // filtrer la mosaique selon la sélection
		filtersActions.setAttribute("class", "visible");
	    });
	    b.appendChild(c);
	}
	filters[i].appendChild(b);
	a.addEventListener("click", function(e) {
	    
	    /* When the select box is clicked, close any other select boxes,
	       and open/close the current select box: */
	    e.stopPropagation();
	    closeAllSelect(this);
	    this.nextSibling.classList.toggle("select-hide");
	    this.classList.toggle("select-arrow-active");
	});
    }
    function closeAllSelect(elmnt) {
	/* A function that will close all select boxes in the document,
	   except the current select box: */
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
	    if (elmnt == y[i]) {
		arrNo.push(i)
	    } else {
		y[i].classList.remove("select-arrow-active");
	    }
	}
	for (i = 0; i < xl; i++) {
	    if (arrNo.indexOf(i)) {
		x[i].classList.add("select-hide");
	    }
	}
    }

    /* If the user clicks anywhere outside the select box,
       then close all select boxes: */
    document.addEventListener("click", closeAllSelect);

    // reset mosaique
    const resetBtn = document.getElementById("filters-actions--reset");
    resetBtn.addEventListener("click", reset)
}

function reset(){

    const sd = document.getElementsByClassName("select-selected");
    const filtersActions = document.getElementById("filters-actions--reset");
    const sdl = sd.length;
    for (let i = 0; i < sdl; i++) {
	sd[i].innerHTML = defaultValue;
    }
    // console.log(sd[0].innerHTML);
    resetReferences();
    filtersActions.setAttribute("class", "hidden");
}
