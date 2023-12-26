const questions = [
    {
        question:"----describes the structure of a Web page",
        answers:[
            { text: "html tag", correct:true},
            { text: "body tag", correct:false},
            { text: "!doctype", correct:false},
            { text: "h1 tag", correct:false},

        ]
    },
    {
        question:"----is the standard markup language for creating Web page",
        answers:[
            { text: "html tag", correct:true},
            { text: "body tag", correct:false},
            { text: "!doctype", correct:false},
            { text: "h1 tag", correct:false},

        ]
    },
    {
        question:"A browser does not display the HTML tags, but uses them to determine how to display the document",
        answers:[
            { text: "Yes", correct:true},
            { text: "No", correct:false},
            { text: "Can't say", correct:false},
            { text: "None of these", correct:false},

        ]
    },
    {
        question:"What does the abbreviation HTML stand for?",
        answers:[
            { text: "HyperText Markup Language", correct:true},
            { text: "HighText Markup Language", correct:false},
            { text: "HyperText Markdown Language", correct:false},
            { text: "None of the Above", correct:false},

        ]
    },
    {
        question:"HTML is a link created within which of the following?",
        answers:[
            { text: "Web links", correct:false},
            { text: "Web pages", correct:true},
            { text: "Internet", correct:false},
            { text: "Data", correct:false},

        ]
    },
    {
        question:"How are the webpages linked to each other?",
        answers:[
            { text: "Edges", correct:false},
            { text: "Hyperlinks", correct:true},
            { text: "Links", correct:false},
            { text: "Wi-Fi", correct:false},

        ]
    },
    {
        question:"Html document must always be saved with which of the following?",
        answers:[
            { text: ".html", correct:false},
            { text: ".htm", correct:false},
            { text: ".doc", correct:false},
            { text: "both .html and .htm", correct:true},

        ]
    },
    {
        question:"Which among the following is not an Html tag?",
        answers:[
            { text: "select tag", correct:false},
            { text: "list tag", correct:true},
            { text: "input tag", correct:false},
            { text: "textarea tag", correct:false},

        ]
    },
    {
        question:"ALL HTML tags are enclosed in what?",
        answers:[
            { text: "# and #", correct:false},
            { text: "? and !", correct:false},
            { text: "< and >", correct:true},
            { text: "{ and }", correct:false},

        ]
    },
    {
        question:"To create HTML page, you need _____",
        answers:[
            { text: "Web browser", correct:false},
            { text: "text editor", correct:false},
            { text: "Both [A] and [B]", correct:true},
            { text: "None of the above", correct:false},

        ]
    },
    {
        question:"a and /a are the tags used for ______",
        answers:[
            { text: "Adding image", correct:false},
            { text: "Aligning text", correct:false},
            { text: "Audio-voiced text", correct:false},
            { text: "Adding links to your page", correct:true},

        ]
    },
    {
        question:"The BODY tag is usually used after ______",
        answers:[
            { text: "HTML tag", correct:false},
            { text: "EM tag", correct:false},
            { text: "TITLE tag", correct:false},
            { text: "HEAD tag", correct:true},

        ]
    },
    {
        question:"What does the br tag add to your webpage?",
        answers:[
            { text: "Long break", correct:false},
            { text: "Paragraph break", correct:false},
            { text: "Line break", correct:true},
            { text: "None of the above", correct:false},

        ]
    },
    {
        question:" In HTML, tags that include both on and off tag are called____",
        answers:[
            { text: "comment tag", correct:false},
            { text: "container tag", correct:true},
            { text: "document tag", correct:false},
            { text: "None of the above", correct:false},

        ]
    },
    {
        question:" When is the content of a table shown?",
        answers:[
            { text: "Before the border loads", correct:false},
            { text: "After the table is loaded", correct:true},
            { text: "In pieces as it loads", correct:false},
            { text: "None of the above", correct:false},

        ]
    },
    {
        question:" Defining clickable sub-areas on an image is called",
        answers:[
            { text: "image linking", correct:false},
            { text: "multiple mapping", correct:false},
            { text: "image mapping", correct:true},
            { text: "None of the above", correct:false},

        ]
    },
    {
        question:" What kind of list will ol tags create?",
        answers:[
            { text: "Numbered list", correct:true},
            { text: "Bulleted list", correct:false},
            { text: "Unordered list", correct:false},
            { text: "None of the above", correct:false},

        ]
    },
    {
        question:"  Increasing the cellpadding means __________",
        answers:[
            { text: "Increase the softness of your site", correct:false},
            { text: "Increase the space between cells", correct:false},
            { text: "Increase the distance between cell and content", correct:true},
            { text: "All of the above", correct:false},

        ]
    },
    {
        question:" Any target specified in the BASE element can be overridden on a case-by-case basis by specifying a different target in different forms",
        answers:[
            { text: "Anchor", correct:false},
            { text: "Imagemap", correct:false},
            { text: "Link", correct:false},
            { text: "All of the above", correct:true},

        ]
    },
    {
        question:" If you create an HTML page in word processor,",
        answers:[
            { text: "save it with binary file", correct:false},
            { text: "save it with WMF file", correct:false},
            { text: "save it with ASCII text file", correct:true},
            { text: "All of the above", correct:false},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =0;
let score = 0;
function startQuiz(){
    currentQuestionIndex=0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo +". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const seletedBtn = e.target;
    const isCorrect = seletedBtn.dataset.correct === "true";
    if(isCorrect){
        seletedBtn.classList.add("correct");
        score++;
    }
    else{
        seletedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="playAgain";
    nextButton.style.display="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton();

    }else{
        startQuiz();
    }
})

startQuiz();