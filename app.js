const quizData = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
},
{
    question: "Which html tag is used to create a hyperlink?",
    a: "<link>",
    b: "<href>",
    c: "<a>:",
    d: "<hyperlink>",
    correct: "c",
},
{
    question: "Which of the following is not a web component element?",
    a: "<shadow>",
    b: "<menu>",
    c: "<content",
    d: "element",
    correct: "b",
},
{
    question: "Which of the following is used to read a HTML page and render it?",
    a: "Web Server",
    b: "Web Matrix",
    c: "Web Browser",
    d: "None of the above",
    correct: "c",
},
{
    question: "What does <td> stands for?",
    a: "Table database",
    b: "Table data",
    c: "Table directory",
    d: "Table direct row",
    correct: "b",
}, 
{
    question: "Which element is used to give title to a table?",
    a: "Caption",
    b: "Headline",
    c: "Title",
    d: "Heading",
    correct: "a",
}, 
{
    question: "Which tag is used to create an ordered list in a webpage?",
    a: "<ol>",
    b: "<ul>",
    c: "<li>",
    d: "<ol> and <ul>",
    correct: "a",
},
{
    question: "Which HTML tag is used to create a form?",
    a: "<form>",
    b: "<input>",
    c: "<select>",
    d: "<textarea>",
    correct: "a",

},
{

    question: "Which font format is used in web pages?",
    a: "EOT",
    b: "WOFF 2.0",
    c: "WOFF",
    d: "SVG Fonts",
    correct: "c",
},
{
    question: "What is Vue JS?",
    a: "Scripting Language",
    b: "A Framework",
    c: "Programming Language",
    d: "Directives",
    correct: "b",
},
{
    question: "React.js is written in ?",
    a: "C++",
    b: "C",
    c: "Java",
    d: "JavasScript",
    correct: "d",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);
