# Etch-A-Sketch
Learning to code in HTML/CSS/JS by creating an "online" etch-a-sketch.

Future Improvements:

Overhaul the UI - 
currently the UI is extremely basic as there was much more of a focus on the functionality of the page. Future work should look to make the page more aesthetically pleasing and improvement my understanding of CSS

createBlankCanvas - 
This function could be improved by programatically assigning the values used in the cell size calculation, looking at the css values of the canvas height and width, and the cells border size

button event listeners:
I imagine there is a better way to implement which button has been selected which determines which ink to display (black/colour/shade)

clear canvas button:
Was unsure whether to use the deleteCanvas function or to just make the cells white (oringal code). I chose to make the cells white for now, as I wasn't what would happen if someone changed the cell count without submitting and then pressed clear instead. Only a small issue and easy to implement if I decide to change this

mouseover event listener:
I could make this a function, but right now I'm tired and it's not too large. I also can't think of a good name for the function right now.
