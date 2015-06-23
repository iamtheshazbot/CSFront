var canvas = document.getElementById("canvas");
if (canvas.getContext) {
	var ctx = canvas.getContext("2d");

	var width = 891.500, height= 891.500, divWidth = width/6, divHeight = height/6;
	ctx.fillStyle = "#3e75ad";
	ctx.fillRect(0,0, width, height);
	ctx.clearRect(divWidth, divHeight, width - (2*divWidth), height - (2*divHeight));
	console.log(height-divHeight);
	console.log(width-divWidth);
	ctx.font = "80px 'RobotoDraft'";
	ctx.fillText("Hiya 7/25", 400, 500);
}

