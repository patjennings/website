var $grid;

window.onload = function(){
    initFade();
    $("#preloader").fadeOut("slow");
    initMasonry();
    setTimeout(function(){
	$grid.masonry('reloadItems');}, 200); // Force le reload pour remédier ua problème des cartes qui n'ont pas de height
}

// $(document).ready(function(){
//   initFade();
//   $("#preloader").fadeOut("slow");
//   initMasonry();
//   setTimeout(function(){
// 	       $grid.masonry('reloadItems');}, 200); // Force le reload pour remédier ua problème des cartes qui n'ont pas de height
// });

function initMasonry(){
    $grid = $('.grid').masonry({
	// options
	itemSelector: '.grid-item',
	columnWidth: '.grid-sizer',
	percentPosition: true,
	transitionDuration: 0
    });
}

function initFade() {
    console.log("here");
    $('#wrapper').fadeIn(); // on fadeIn le body quand le doc est chargé
    $('body').css("overflow-y", "scroll"); // on rétablit le overflow normal pour le body (désactivé dans CSS)
    $('.card').click(function(){
	url = $(this).attr('id') + '.php';
	$('#wrapper').fadeOut(function(){
            // on écrit l'url/redirige après que le contenu ait fadedOut
            window.location = url;
	});
    });
    loadPage();
};


function loadPage(){
    var items = new Array;
    var i = 0;
    $('.e-content p img').each(function(){
	$(this).attr('id', 'item-'+i);
	$(this).attr('class', 'faded--image');
	i++;
	console.log(this);
    });
    /*
    $('.e-content p img').each(function(){
	// Waypoint est un plugin qui permet de déclencher une action quand l'élément est atteint dans le viewport
	if(this.id !== 'item-0'){ // on rend la première image visible
	    var waypoint = new Waypoint({
		element: document.getElementById(this.id),
		handler: function(direction) {
		    //TweenMax.to(this.element, 0.5, {opacity: 1, top: "-20px"});
		    $(this.element).addClass("-in-view");
		},
		offset: '50%'
	    })
	}
	
    });
*/
}
