const angleInput = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector(".btn-is-triangle");
const outputTriangle = document.querySelector(".output");

isTriangleBtn.addEventListener("click", isTriangle);

function isTriangle(){

    if(calculateSumOfAngles()==180){
        outputTriangle.innerText = "Yay!! It forms a Triangle"
    }else{
        outputTriangle.innerText = "oh no!,the angles do not form a Triangle"

    }
}
function calculateSumOfAngles(){
    const sumOfAngles = Number(angleInput[0].value) + Number(angleInput[1].value) + Number(angleInput[2].value);
    return sumOfAngles;
}