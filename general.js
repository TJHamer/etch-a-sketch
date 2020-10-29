
const canvas = document.querySelector("#canvas"); //select canvas

//css deafult colour values
var red = 0;
var green = 0;
var blue = 0;
var shade = 0;

//button values
var blackButton = true;
var colourButton = false;
var shadeButton = false;


document.getElementById("gridSizeButton").addEventListener("click",function(){
	
	//delete old canvas and create a new one with the user defined dimensions
	deleteCanvas(); //clear current canvas
	createBlankCanvas(); //add new canvas
})

function deleteCanvas(){

	//select all elements with class "cell" and remove. Allows for creation of new canvas in same place.
	const cell = Array.from(document.querySelectorAll(".cell"));
	cell.forEach(cell => cell.remove());

}

function createBlankCanvas(){
	//function to create a new canvas, an n x n table of cells that can be coloured

	
	var canvasSize = $("#gridSize").val();//get user-defined grid size  //original code: document.getElementById("gridSize").value
	for (var i=0;i<canvasSize*canvasSize;i++){//iterate n^2 times to create enough cells to fill the canvas. Assign attributes.

		const cell = $("<div>") //original code: document.createElement("div");
		const idNum = i;
		cell.addClass("cell") //original code: cell.classList.add("cell");
			.width((400/canvasSize)-2 +"px")//original code: cell.style.width = (400/canvasSize)-2 +"px"; //cell width and height should be a ratio of the canvas size and number of cells
			.height((400/canvasSize)-2 +"px")//original code: cell.style.height = (400/canvasSize)-2 +"px";//these can be improved by taking sizes (width/height/border width) from css file
			.attr('id', "id" + idNum.toString());//original code: cell.id = "id" + idNum.toString();
		
		$("#canvas").append(cell);//canvas.appendChild(cell);

	}

}

createBlankCanvas();





//probably a better way of assigning these, using the value of the button or id
document.getElementById("blackButton").addEventListener("click", function(){
	//reassign buttons depending on which one was selected
	blackButton = true;
	colourButton = false;
	shadeButton = false;
})
document.getElementById("colourButton").addEventListener("click", function(){
	//reassign buttons depending on which one was selected
	blackButton = false;
	colourButton = true;
	shadeButton = false;
})

document.getElementById("shadeButton").addEventListener("click", function(){
	//reassign buttons depending on which one was selected
	blackButton = false;
	colourButton = false;
	shadeButton = true;	
})

document.getElementById("clearButton").addEventListener("click", function(){

	const cell = Array.from(document.querySelectorAll(".cell"));
	cell.forEach(cell => cell.style.backgroundColor = "white");
	cell.forEach(cell => cell.style.opacity = 1);

})


//when hovering over a cell, depending on which option has been selected 
//the cell should be coloured either black, multicoloured or shaded(opacity)
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











