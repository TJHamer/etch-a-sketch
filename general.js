
const canvasSize = 8;


const canvas = document.querySelector("#canvas");






for (var i=0;i<canvasSize;i++){

	const row = document.createElement("div");

	row.classList.add("row");
	canvas.appendChild(row);


	for(var j=0;j<canvasSize;j++){
		const cell = document.createElement("div");
		const idNum = i*canvasSize+j;
		cell.classList.add("cell");
		cell.id = "id" + idNum.toString();
		row.appendChild(cell);

	}

}

var colour = "black";
var red = 0;
var green = 0;
var blue = 0;
var shade = 0;
var blackButton = true;
var colourButton = false;
var shadeButton = false;

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








