const angleInput = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector(".btn-is-triangle");
const outputTriangle = document.querySelector(".output");

isTriangleBtn.addEventListener("click", isTriangle);

function isTriangle(){

    if( (angleInput[0].value<0) || (angleInput[1].value<0) ||(angleInput[2].value<0)){
        outputTriangle.innerText = "Enter a positive Integer"
    }else if( (angleInput[0].value=="") || (angleInput[1].value=="") || (angleInput[2].value=="")){
        outputTriangle.innerText = "Please fill all input box";
    }else if(calculateSumOfAngles()==180){
        outputTriangle.innerText = "Yay!! It forms a Triangle"
    }else{
        outputTriangle.innerText = "oh no!,the angles do not form a Triangle"
    }
}
function calculateSumOfAngles(){
    const sumOfAngles = Number(angleInput[0].value) + Number(angleInput[1].value) + Number(angleInput[2].value);
    return sumOfAngles;
}