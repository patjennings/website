let bubble,
    canvas;

// image
export let bubbleImage;
bubbleImage = new Image();

// grab html canvas element
canvas = document.getElementById("bubbleAnimation");

if(canvas){
    canvas.width = 540;
    canvas.height = 540;
}

// define bubble with sprite function
if(canvas){
    bubble = sprite({
	context: canvas.getContext("2d"),
	width: 540,
	height: 540,
	image: bubbleImage,
	columns: 9
    });
}

// sprite function called
function sprite(options){
    var that = {},
	frameIndex = 0,
	framesRow = 0,
        tickCount = 0,
        ticksPerFrame = options.ticksPerFrame || 0,
	numberOfFrames = 90;

    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;
    that.columns = options.columns;

    that.update = function () {	    
        tickCount += 1;

	frameIndex+=1;

	if(frameIndex % that.columns == 0){
	    frameIndex=0;
	    framesRow+=1;
	}
	if(tickCount == numberOfFrames){
	    frameIndex = 0;
	    framesRow = 0;
	    tickCount = 0;
	}
    };
    
    that.render = function(){

	// Clear the canvas
	that.context.clearRect(0, 0, that.width, that.height);

	// context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
	that.context.drawImage(
	    that.image,
	    frameIndex * that.width,
	    framesRow * that.height,
	    that.width,
	    that.height,
	    0,
	    0,
	    that.width,
	    that.height
	);

	console.log("anim is playing");
    }

    return that;
}

export function bubbleLoop(){
    if(canvas){
	window.requestAnimationFrame(bubbleLoop);
	bubble.render();
	bubble.update();
    }
}

export function bubbleStop(){
    if(canvas){
	window.cancelAnimationFrame(bubbleLoop);
    }
}
