
var canvasSize = 8; //number of cells per row and column
const canvas = document.querySelector("#canvas");

var colour = "black";
var red = 0;
var green = 0;
var blue = 0;
var shade = 0;
var blackButton = true;
var colourButton = false;
var shadeButton = false;



document.getElementById("gridSizeButton").addEventListener("click",function(){

	//clear current canvas
	deleteCanvas();


	//add new canvas
	createBlankCanvas();


})

function deleteCanvas(){

	const cell = Array.from(document.querySelectorAll(".cell"));

	cell.forEach(cell => cell.remove());

}

function createBlankCanvas(){

	canvasSize = document.getElementById("gridSize").value;
	for (var i=0;i<canvasSize*canvasSize;i++){

		const cell = document.createElement("div");
		const idNum = i;
		cell.classList.add("cell");
		cell.style.width = (400/canvasSize)-2 +"px";
		cell.style.height = (400/canvasSize)-2 +"px";
		cell.id = "id" + idNum.toString();
		canvas.appendChild(cell);
	}

}

createBlankCanvas();






document.getElementById("blackButton").addEventListener("click", function(){
	blackButton = true;
	colourButton = false;
	shadeButton = false;

})
document.getElementById("colourButton").addEventListener("click", function(){
	blackButton = false;
	colourButton = true;
	shadeButton = false;
	
})

document.getElementById("shadeButton").addEventListener("click", function(){
	blackButton = false;
	colourButton = false;
	shadeButton = true;

	
})



window.addEventListener("mouseover", function(e){
	if(e.target.className != "cell") return;

	const idNum = e.target.id;
	const cell = document.getElementById(idNum)

	if(blackButton == true){
		cell.style.backgroundColor = "rgb(0,0,0)";
	}else if(colourButton == true){

		red = randomvalueRGB();
		green = randomvalueRGB();
		blue = randomvalueRGB();

		cell.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
		cell.style.opacity = 1;
	}else if(shadeButton == true){

		shade = cell.style.opacity;
		shade = (shade == "") ? 1 : shade;
		console.log(shade);
		console.log(parseFloat(shade)+0.2)
		cell.style.opacity = parseFloat(shade)-0.1;
		console.log(shade);

	}
	
})

function randomvalueRGB(){
	//return random value between 0 and 255 for random RGB values
	return(Math.floor(Math.random()*256));
}


document.getElementById("clearButton").addEventListener("click", function(){

	const cell = Array.from(document.querySelectorAll(".cell"));

	cell.forEach(cell => cell.style.backgroundColor = "white");

})








