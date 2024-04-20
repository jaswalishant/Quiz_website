let questionElement=document.querySelector('.question');
let answerElement=document.querySelector('.ans');
let nextbtn=document.querySelector('.next-btn');

let qindex=0;
let canswer=0;

startQuiz=()=>{
    qindex=0;
    canswer=0;
    nextbtn.innerHTML='Next';
    showQuestion();
}

resetState=()=>{
    nextbtn.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

showQuestion=()=>{
    resetState();
    let cQuestion=questions[qindex];
    let qno=qindex+1;
    questionElement.innerHTML=qno+ '.  '+ cQuestion.question;

    let incorrect=cQuestion.incorrect_answers;
    let correct=cQuestion.correct_answer;
    let options=incorrect;
    options.splice(Math.floor(Math.random()*(incorrect.length + 1)),0,correct);

    cQuestion.incorrect_answers.forEach(options=>{
        let btn=document.createElement("button");
        btn.innerHTML=options;
        answerElement.append(btn);
        btn.classList.add("btn");

        btn.addEventListener("click", selectAnswer=(e)=>{
            let selectbtn=e.target.value;
            let right=false;
            if (options==cQuestion.correct_answer){
                right=true;
                console.log(cQuestion.correct_answer)
                e.target.classList.add('correct');
            }
            else{
                right=false;
                console.log('not right answer')
                e.target.classList.add('incorrect')
            }
        } )
    })
}

function next(){
    qindex=qindex+1;
    console.log(qindex);
        showQuestion()
}
startQuiz()


















start=()=>{
    qindex=0;
    canswer=0;
    showquestion();
}

next=()=>{
    qindex=+1;

    showquestion()
}

resetQ=()=>{
    nextbtn.style.display="none";
    while(answerElement.firstChild){
        answerElement.removeChild(answerElement.firstChild);
    }
}

showquestion=()=>{
    resetQ();

    let currentQ=questions[qindex];
    let Qno=qindex +1;
    questionElement.innerHTML=Qno+ ". " + currentQ.question;

    let correct=currentQ.correct_answer;
    let incorrect=currentQ.incorrect_answers;
    let options=incorrect;
    options.splice(Math.floor(Math.random() * incorrect.length +1),0,correct);
    console.log(options)

    currentQ.incorrect_answers.forEach(options=>{
        let btn= document.createElement('button');
        btn.innerHTML=options;
        answerElement.append(btn);
        btn.classList.add("btn");

        btn.addEventListener("click", select=(e)=>{
            let right=false;
            if(options==currentQ.correct_answer){
                e.target.classList.add("correct")
                right=true
                canswer=+1;
            }
            else{
                e.target.classList.add("incorrect")
                right=false
            }
            nextbtn.style.display="block";
        })
    })


}
start();