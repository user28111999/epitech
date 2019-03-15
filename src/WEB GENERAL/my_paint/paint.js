jQuery(function($) {
	/*
	** ----
	** base
	** ----
	**/

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');

	var size = 12;
	var dragging = false;
	var toggle = false;
	var brushB = false;
	var lineB = false;
	var eraserB = false;
	var squareB = false;

	function toolsToggler() {
		brushB = true;
		lineB = false;
		eraserB = false;
		squareB = false;
	}

	context.lineWidth = size * 2;

	/*
	** ------
	** size 
	** ------
	*/

	var setSize = function(newSize) {
		if(newSize < minSize){
			newSize = minSize;
		} else if(newSize > maxSize) {
			newSize = maxSize;
		}
		size = newSize;
		context.lineWidth = size * 2;
		sizeSpan.innerHTML = size;
	}

	var minSize = 1;
	var maxSize = 50;
	var defaultsize = 12;
	var interval = 1;
	var sizeSpan = document.getElementById('sizeval');
	var decsize = document.getElementById('decsize');
	var incsize = document.getElementById('incsize');

	decsize.addEventListener('click', function() {
		setSize(size-interval);
	});
	incsize.addEventListener('click', function() {
		setSize(size+interval);
	});

	setSize(defaultsize);

	/*
	** ------
	** colors 
	** ------
	*/

	var input = document.getElementById('colors');
	var color = input.value;

	context.fillStyle = color;
	context.strokeStyle = color;

	input.onclick = function() {
		function change(e) {
			color = this.value;
			context.fillStyle = color;
			context.strokeStyle = color;
		}
		document.getElementById("colors").onchange = change;
	}

	/*
	** -----
	** brush 
	** -----
	*/

	var brush = document.getElementById("brush");

	function toggleBrush() {
		this.toggle = false;
		var drawP = function(e) {
			if(dragging == true && brushB == true) {
				context.lineTo(e.clientX, e.clientY);
				context.stroke(); // merci romain
				context.beginPath();
				context.arc(e.clientX, e.clientY, size, 0, Math.PI*2);
				context.fill();
				context.beginPath();
				context.moveTo(e.clientX, e.clientY);
			}
		}

		var engage = function(e) {
			context.globalCompositeOperation = 'source-over';
			dragging = true;
			drawP(e);
		}

		var disengage = function() {
			dragging = false;
			context.beginPath();
		}
		canvas.addEventListener('mousedown', engage);
		canvas.addEventListener('mousemove', drawP);
		canvas.addEventListener('mouseup', disengage);
	}

	brush.addEventListener('click', function(e) {
		toolsToggler();
		brushB = true;
		toggleBrush();
	});

	/*
	** ------
	** eraser 
	** ------
	*/

	var eraser = document.getElementById('eraser');

	function toggleEraser() {
		this.toggle = false;

		var drawP = function(e) {
			if(dragging == true && eraserB == true){
				context.lineTo(e.clientX, e.clientY);
				context.beginPath();
				context.moveTo(e.clientX, e.clientY);
			}
		}

		var engage = function(e) {
			dragging = true;
			context.globalCompositeOperation = 'destination-out';
			drawP(e);
		}

		var disengage = function() {
			dragging = false;
			context.beginPath();
		}

		canvas.addEventListener('mousedown', engage);
		canvas.addEventListener('mousemove', drawP);
		canvas.addEventListener('mouseup', disengage);
	}


	eraser.addEventListener('click', function(e) {
		toolsToggler();
		eraserB = true;
		toggleEraser()
	});

	/*
	** -----
	** clear 
	** -----
	*/

	var clearButton = document.getElementById('clear');

	clearButton.addEventListener('click',function() {
		context.clearRect(0, 0, canvas.width, canvas.height);
	});

	/*
	** ----
	** line
	** ----
	*/

	var line = document.getElementById("line");

	function toggleLine() {
		var line = 0;
		var drawP = function(e) {
			if (lineB == true) {
				if (line == 0) {
					clx = e.clientX - canvas.offsetLeft;
					cly = e.clientY - canvas.offsetTop;
					context.moveTo(clx, cly);
					line++;
				} else {
					ulx = e.clientX - canvas.offsetLeft;
					uly = e.clientY - canvas.offsetTop;
					context.globalCompositeOperation = 'source-over';
					context.beginPath();
					context.moveTo(ulx, uly);
					context.lineTo(clx, cly, ulx - clx, uly - cly);
					context.stroke();
					line = 0;
				}
			}
		}
		canvas.addEventListener('mousedown', drawP);
	}

	line.addEventListener('click', function(e) {
		toolsToggler();
		lineB = true;
		toggleLine();
	});

	/*
	** ----
	** square
	** ----
	*/

	var rect = document.getElementById("square");

	function toggleRectangle() {
		var rectangle = 0;
		var drawP = function(e) {
			if(squareB == true) {
				if (rectangle == 0) {
					clx = e.clientX - canvas.offsetLeft;
					cly = e.clientY - canvas.offsetTop;
					context.moveTo(clx, cly);
					rectangle++;
				} else {
					ulx = e.clientX - canvas.offsetLeft;
					uly = e.clientY - canvas.offsetTop;
					context.globalCompositeOperation = 'source-over';
					context.beginPath();
					context.moveTo(ulx, uly);
					context.strokeRect(clx, cly, ulx - clx, uly - cly);
					context.stroke();
					rectangle = 0;
				}
			}
		}
		canvas.addEventListener('mousedown', drawP);
	}

	rect.addEventListener('click', function(e) {
		toolsToggler();
		squareB = true;
		toggleRectangle();
	})
});