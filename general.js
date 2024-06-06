
//css deafult colour values
var red = 0;
var green = 0;
var blue = 0;
var shade = 0;

//button values
var blackButton = true;
var colourButton = false;
var shadeButton = false;


$("#gridSizeButton").on("click",function(){ //original code: document.getElementById("gridSizeButton").addEventListener("click",function(){
	
	//delete old canvas and create a new one with the user defined dimensions
	deleteCanvas(); //clear current canvas
	createBlankCanvas(); //add new canvas
})

function deleteCanvas(){

	//select all elements with class "cell" and remove. Allows for creation of new canvas in same place.
	const cell = Array.from($(".cell")); //original code: const cell = Array.from(document.querySelectorAll(".cell"));
	cell.forEach(cell => cell.remove());

}

function createBlankCanvas(){
	//function to create a new canvas, an n x n table of cells that can be coloured

	
	var canvasSize = $("#gridSize").val();//get user-defined grid size  //original code: document.getElementById("gridSize").value
	for (var i=0;i<canvasSize*canvasSize;i++){//iterate n^2 times to create enough cells to fill the canvas. Assign attributes.

		const cell = $("<div></div>") //original code: document.createElement("div");
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
$("#blackButton").on("click", function(){
	//reassign buttons depending on which one was selected
	blackButton = true;
	colourButton = false;
	shadeButton = false;
	redButton = false;
})
$("#redButton").on("click", function(){
	//reassign buttons depending on which one was selected
	blackButton = false;
	colourButton = false;
	shadeButton = false;
	redButton = true;
})
$("#colourButton").on("click", function(){
	//reassign buttons depending on which one was selected
	blackButton = false;
	colourButton = true;
	shadeButton = false;
	redButton = false;
})

$("#shadeButton").on("click", function(){
	//reassign buttons depending on which one was selected
	blackButton = false;
	colourButton = false;
	shadeButton = true;	
	redButton = false;
})

$("#clearButton").on("click", function(){

	const cell = Array.from($(".cell"));
	cell.forEach(cell => cell.style.backgroundColor = "white");
	cell.forEach(cell => cell.style.opacity = 1);

})


//when hovering over a cell, depending on which option has been selected 
//the cell should be coloured either black, multicoloured or shaded(opacity)
$(window).on("mouseover", function(e){
	if(e.target.className != "cell") return;

	const idNum = e.target.id;
	console.log(`#${idNum}`);
	const cell = $(`#${idNum}`)

	if(blackButton == true){
		cell.css({"background-color": "rgb(0,0,0)"});
	}else if(redButton == true){
		cell.css({"background-color": "rgb(255,0,0)"});
	}else if(colourButton == true){

		red = randomvalueRGB();
		green = randomvalueRGB();
		blue = randomvalueRGB();

		cell.css({"background-color": `rgb(${red},${green},${blue})`,
				  "opacity": "1"});
		// cell.style.opacity = 1;
	}else if(shadeButton == true){

		shade = cell.css("opacity");
		shade = (shade == "") ? 1 : shade;
		shade = parseFloat(shade)-0.1;

		cell.css({"opacity":`${shade}`});


	}
	
})

function randomvalueRGB(){
	//return random value between 0 and 255 for random RGB values
	return(Math.floor(Math.random()*256));
}











