const inputlength = document.querySelectorAll(".angle-input");
const hypotenuseBtn = document.querySelector(".calculateHypotenuse-btn");
const outputHypotenuse = document.querySelector(".output");



function calculateSumOfSqr(a,b){
    return (Math.pow(a,2)+Math.pow(b,2));
}

function calculateHypotenuse(){
    const sqrAns = calculateSumOfSqr(Number(inputlength[0].value),Number(inputlength[1].value));
    const finalANS = Math.sqrt(sqrAns);
    outputHypotenuse.innerText = "The length of the hypotenuse is "+ finalANS+" cm";
}
    hypotenuseBtn.addEventListener("click" , calculateHypotenuse);