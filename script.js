// const newDiv = document.createElement("div");
// newDiv.style.color = "blue";
// newDiv.style.cssText = "color: blue; background: black;";
// newDiv.setAttribute("style", "color: blue; background: black");
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector("#container");
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = "This is the glorious text-content!";

  container.appendChild(content);
  const gridButton = document.querySelector("#gridButton");
  const log = document.querySelector("#log");
  gridButton.addEventListener("click", () => {
    let min = 16;
    let max = 100;
    while (true){
      let newSize = window.prompt("Input grid min=16 and max=100: ");
      const conditionTrue = (newSize <= max)&&(newSize >=min);
      if (conditionTrue){
        log.innerText = `Changed the grid to ${newSize} x ${newSize}`;
        break;
      }  
    }
 });
});
