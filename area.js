const lengthInput = document.querySelectorAll(".length-input");
const areaBtn = document.querySelector(".area-btn");
const outputArea = document.querySelector(".output");

areaBtn.addEventListener("click", calculateArea);

function calculateArea(){
    const finalArea = (Number(lengthInput[0].value) * Number(lengthInput[1].value)/2);
    outputArea.innerText = "The area of the triangle is " + finalArea + " cm²";
}