const colorBox = document.getElementById("color-box");
const hexCode = document.getElementById("color-code");
const newColorBtn = document.getElementById("new-color-btn");
const copyColorBtn = document.getElementById("copy-color-btn");

function changeColor (){
  let randomNumber = Math.floor(Math.random() * 16777215);
  let colorCode = "#"+ randomNumber.toString(16).padEnd(6, 0);
  hexCode.innerText = colorCode;
  colorBox.style.backgroundColor = colorCode;
  document.body.style.backgroundColor = colorCode;

  copyColorBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(colorCode)
  })
  
}
newColorBtn.addEventListener("click", changeColor);

changeColor()