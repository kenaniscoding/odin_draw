document.addEventListener('DOMContentLoaded', () => {
  const DEFAULTGRID = 67; // the funny meme
  let BASEAREA = 670;
  let MAX = 100;
  let MIN = 16;
  let MAXCOLOR = 256;
  const content = document.createElement("div");
  content.classList.add("content");
  const manualDiv = document.querySelector("#manualDiv")
  const gridButton = document.querySelector("#gridButton");
  const log = document.querySelector("#log");
	
	function randColorNum() {
	    return Math.floor(Math.random() * 256);
	}

	function randomRGB() {
	    return `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`;
	}

	function createBox(num) {
		let size = BASEAREA / Math.sqrt(num)
		for(var i=0; i < num; i++){
		    var nwDiv = document.createElement('div');
		    nwDiv.id = 'r'+i;
		    nwDiv.className = 'child';
		    nwDiv.style.width = size + "px"
		    nwDiv.style.height = size + "px"
		    nwDiv.addEventListener("mouseover", e => e.target.style.backgroundColor = `rgb(${randColorNum()},${randColorNum()},${randColorNum()})`)
		    manualDiv.appendChild(nwDiv);
		}
	}
	function deleteBox(){
		while (manualDiv.firstChild){
			manualDiv.removeChild(manualDiv.firstChild);
		}      
	}

 	createBox(DEFAULTGRID);

  gridButton.addEventListener("click", () => {
    while (true){
      let newSize = window.prompt("Input grid min=16 and max=100: ");
      const conditionTrue = (newSize <= MAX)&&(newSize >=MIN);
      if (conditionTrue){
        log.innerText = `Changed the grid to ${newSize}`;
	deleteBox();
 	createBox(newSize);
        break;
      }
    }
  });

});
