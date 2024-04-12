const questions = [
    {
        question : "Who is the Prime minister of India?",
        answers: [
            { text : "Revanth Reddy", correct : false},
            { text : "Indra Gandhi", correct : false},
            { text : "Narendra Modi", correct : true},
            { text : "Rahul Gandhi", correct : false},
        ]
    },
    {
        question : "Who is the CM of Telangana?",
        answers: [
            { text : "Revanth Reddy", correct : true},
            { text : "Jagan Mohan Reddy", correct : false},
            { text : "K.C.R", correct : false},
            { text : "Rahul Gandhi", correct : false},
        ]
    },
    {
        question : "Full Stack Development includes?",
        answers: [
            { text : "Frontend Development", correct : false},
            { text : "Backend Development", correct : false},
            { text : "Both A and B", correct : true},
            { text : "None", correct : false},
        ]
    },
    {
        question : "Which platform is best for Coding?",
        answers: [
            { text : "Codera", correct : true},
            { text : "GeeksforGeeks", correct : false},
            { text : "W3school", correct : false},
            { text : "Mdn Web Docs", correct : false},
        ]
    },
    {
        question : "Which is the Capital of Telangana?",
        answers: [
            { text : "Delhi", correct : false},
            { text : "Mumbai", correct : false},
            { text : "Hyderabad", correct : true},
            { text : "Bengaluru", correct : false},
        ]
    },

];

const quizquestion = document.querySelector(".questions");
const answerbtn = document.querySelector(".ansbtn");
const nextbtn = document.querySelector(".nxtbtn");
let questionnumber = 0;
let score = 0;
function startquiz(){
    questionnumber =0;
    score = 0;
    nextbtn.innerHTML = "Next";
    showQuestions();
}
function showQuestions(){
    resetstate()
    let currentquestion = questions[questionnumber];
    let questionno = questionnumber + 1;
    quizquestion.innerHTML = questionno + ". " + currentquestion.question;

    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerbtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectanswer);
    });
};

function resetstate(){
    nextbtn.style.display = "none";
    while(answerbtn.firstChild){
        answerbtn.removeChild(answerbtn.firstChild);
    }
}

function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerbtn.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextbtn.style.display = "block";
}

startquiz();