document.addEventListener('DOMContentLoaded', () => {
  const defaultGrid = 67; // or 256 = 16*16
  const content = document.createElement("div");
  content.classList.add("content");
  const manualDiv = document.querySelector("#manualDiv")
  const gridButton = document.querySelector("#gridButton");
	function createBox(num) {
		let size = 670 / Math.sqrt(num)
		for(var i=0; i < num; i++){
		    var nwDiv = document.createElement('div');
		    nwDiv.id = 'r'+i;
		    nwDiv.className = 'child';
		    nwDiv.style.width = size + "px"
		    nwDiv.style.height = size + "px"
		    nwDiv.addEventListener("mouseover", e => e.target.style.backgroundColor = "green")
		    manualDiv.appendChild(nwDiv);
		}
	}
	function deleteBox(){
		while (manualDiv.firstChild){
			manualDiv.removeChild(manualDiv.firstChild);
		}      
	}

 	createBox(defaultGrid);
  const log = document.querySelector("#log");
  gridButton.addEventListener("click", () => {
    let min = 16;
    let max = 100;
    while (true){
      let newSize = window.prompt("Input grid min=16 and max=100: ");
      const conditionTrue = (newSize <= max)&&(newSize >=min);
      if (conditionTrue){
        log.innerText = `Changed the grid to ${newSize}`;
	deleteBox();
 	createBox(newSize);
        break;
      }


    }
 });

});
