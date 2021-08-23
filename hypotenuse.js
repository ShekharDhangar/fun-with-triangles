const inputlength = document.querySelectorAll(".angle-input");
const hypotenuseBtn = document.querySelector(".calculateHypotenuse-btn");
const outputHypotenuse = document.querySelector(".output");



function calculateSumOfSqr(a,b){
    return (Math.pow(a,2)+Math.pow(b,2));
}

function calculateHypotenuse(){
    if( (inputlength[0].value=="") || (inputlength[1].value=="") ){
        outputHypotenuse.innerText = "Please fill both input box";
        
    }else if( (inputlength[0].value<0) || (inputlength[1].value<0) ){
        outputHypotenuse.innerText = "Please enter positive Integer";
    }else{
        const sqrAns = calculateSumOfSqr(Number(inputlength[0].value),Number(inputlength[1].value));
        const finalANS = Math.sqrt(sqrAns);
        outputHypotenuse.innerText = "The length of the hypotenuse is "+ finalANS+" cm";
    }

}
    hypotenuseBtn.addEventListener("click" , calculateHypotenuse);