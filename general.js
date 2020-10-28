
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

document.getElementById("blackButton").addEventListener("click", function(){
	colour = "black";
	console.log(colour);
})
document.getElementById("colourButton").addEventListener("click", function(){
	
	red = 100;
	green = 100;
	blue = 100;

	colour = rgb(red, green, blue);
	console.log(colour);
})



window.addEventListener("mouseover", function(e){
	if(e.target.className != "cell") return;

	const idNum = e.target.id;
	const cell = document.getElementById(idNum)
	console.log(cell);
	cell.style.backgroundColor = "black";
})


document.getElementById("clearButton").addEventListener("click", function(){
	console.log(Array.from(document.querySelectorAll(".cell")));
	const cell = Array.from(document.querySelectorAll(".cell"));

	// cell.forEach(cell => cell.classList.remove("cellBlack"));
	cell.forEach(cell => cell.style.backgroundColor = "white");

})








