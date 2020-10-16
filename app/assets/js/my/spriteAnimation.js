class spriteAnimation {
    constructor(src, container, width, height, columns, frames, fps){
	
	this.src = src;
	this.container = container;
	this.width = width;
	this.height = height;
	this.frames = frames;
	this.columns = columns;
	this.fps = fps;

	this.fpsInterval = 1000 / this.fps;
	this.now;
        this.then = Date.now(); 
        this.startTime = this.then;
	this.elapsed;

	this.canvas = document.getElementById(this.container);

	// bindings
	this.loop = this.loop.bind(this);
	this.stop = this.stop.bind(this);
	this.update = this.update.bind(this);
	this.render = this.render.bind(this);

	// sprite image
	this.spriteImage = new Image();
	this.spriteImage.src = this.src;

	// canvas context
	this.context = this.canvas.getContext("2d");

	// infos anim
	this.frameIndex = 0;
	this.frameCol = 0;
	this.frameRow = 0;
        this.tickCount = 0;

	if (this.canvas){
	    this.setCanvas();
	    this.spriteImage.addEventListener("load", this.loop);
	}

    }

    // set canvas size
    setCanvas(){
	this.canvas.width = this.width;
	this.canvas.height = this.height;
    }
    
    // update frame informations
    update(){
	this.tickCount += 1;
	this.frameCol += 1;

	// switch to next rows
	if(this.frameCol % this.columns == 0){
	    this.frameCol = 0;
	    this.frameRow += 1;
	} 

	// reset all values when anim is ended
	if(this.tickCount == this.frames){
	    this.frameCol = 0;
	    this.frameRow = 0;
	    this.tickCount = 0;
	}
    }

    // render canvas
    render(){
	// Clear the canvas
	this.context.clearRect(0, 0, this.width, this.height);

	// context.drawImage(img, sx, sy, sw, sh, dx, dy, dw, dh)
	this.context.drawImage(
	    this.spriteImage,
	    this.frameCol * this.width,
	    this.frameRow * this.height,
	    this.width,
	    this.height,
	    0,
	    0,
	    this.width,
	    this.height
	);

	console.log("it plays "+this.tickCount);
    }
    
    loop(){
	requestAnimationFrame(this.loop);
	
	this.now = Date.now(); 
        this.elapsed = this.now - this.then;
	
	if (this.elapsed > this.fpsInterval) { 
            this.then = this.now - (this.elapsed % this.fpsInterval);

	    this.update();
	    this.render();
	}
    }

    stop(){
	console.log("animation stoppée");
    	cancelAnimationFrame(this.loop);
    }
}

export default spriteAnimation;
