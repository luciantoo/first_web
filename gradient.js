var canvas = document.getElementById("background_canvas");
var context = canvas.getContext("2d");

// the starting point of the gradient is top-right and the ending point is bottom-left
var gradient = context.createLinearGradient(canvas.width,0,0,canvas.height);
gradient.addColorStop(0, "#FF1C2E");
gradient.addColorStop(1, "#F7FF1B");

// the actual filling of the canvas
context.fillStyle = gradient;
context.fillRect(0,0,canvas.width,canvas.height);