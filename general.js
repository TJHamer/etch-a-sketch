
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

window.addEventListener("mouseover", function(e){
	if(e.target.className != "cell") return;
	//console.log(e);

	const idNum = e.target.id;
	const cell = document.querySelector("#"+idNum)
	//console.log(cell+" test");
	cell.classList.add("cellBlack");
})








