export function filterReferences(filter){
    const rows = document.querySelectorAll("tr");
    // const items = document.querySelectorAll("td")[4];
    // console.log(items);
    const filterLowercase = filter.toLowerCase();
    console.log(rows);

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
export function resetReferences(){
    const items = document.querySelectorAll(".mosaic-item");

    items.forEach(item => {
	item.classList.remove("hidden");
    });
}
