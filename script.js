document.addEventListener('DOMContentLoaded', () => {
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
