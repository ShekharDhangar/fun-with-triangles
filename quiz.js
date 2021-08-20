const quizForm = document.querySelector('.quiz-form');
const submitBtn= document.querySelector('.submit-btn')
const quizOutput = document.querySelector(".output");

const correctAnswers = ["90°" ,"right angled"];
function calculateQuizAns(){
    let score = 0;
    let index = 0;
    const resultdata = new FormData(quizForm);
    for(let entry of resultdata.values()){
        if(entry === correctAnswers[index]){
            score++;
        }
        index++;
    }
    quizOutput.innerText = "Your Score is "+ score;
}
submitBtn.addEventListener( 'click' , calculateQuizAns)