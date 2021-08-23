const lengthInput = document.querySelectorAll(".length-input");
const areaBtn = document.querySelector(".area-btn");
const outputArea = document.querySelector(".output");

areaBtn.addEventListener("click", calculateArea);

function calculateArea(){
    if((lengthInput[0].value=="") ||(lengthInput[1].value=="")){
        outputArea.innerText = "Please fill both input box";
    }else if( (lengthInput[0].value<0) ||(lengthInput[1].value<0) ){
        outputArea.innerText = "Please enter positive Integer";
    }else{
        const finalArea = (Number(lengthInput[0].value) * Number(lengthInput[1].value)/2);
        outputArea.innerText = "The area of the triangle is " + finalArea + " cm²";
    }
}