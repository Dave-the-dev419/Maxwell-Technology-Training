var questions = [
    {
        question: "1. What are your Career Objectives?",
        response: ["International Certification", "Job", "Expand my Knowledge"]
    },
    {
        question: "2. Are you currently employed?",
        response: ["Yes", "No"]
    },
   {
        question: "Do you have any short-term travel plans?",
        response: ["yes", "no"]
    },
    {
        question: "How long will your travel last?",
        response: ["0-3 months", "3-12 months", "Over a year"]
    },
    {
        question: "What is your curernt level of formal education?",
        response: ["O' level", "A' level", "Undergraduate degree", "Postgraduate degree"]
    },
    {
        question: "Does your work schedule permit a rigid time allocation",
        response: ["Yes", "No"]
    },
    {
        question: "What background or skills do you have in I.T? Select all that apply.",
        response: ["Microsoft Office", "Design Suites Creative (Adobe, etc)", "Programming", "Digital marketing",
                    "Data Science", "Hardware", "Cyber Security"]
    },
    {
        question: "How many years of experience do you have in IT?",
        response: ["1-5", "6-10", "10+"]
    },
    {
        question: "Do you have any relevant certifications?",
        response: ["Yes", "No"]
    },
];

// This creates the questions within our questionnaire
var durrell_questions = document.getElementsByClassName('durrell_questions');
for (let index = 0; index < durrell_questions.length; index++) {
    var element = durrell_questions[index];
    // This line inserts our questions into the html file
    element.innerHTML = questions[index].question;
    element.style.visibility = "hidden";
    if (element.style.visibility !== "visible") {
        element.style.visibility = "visible";
    }
    //for (var i = 0; i < element.length; i++) {
}

var choices = document.getElementsByClassName('choices');
for (let index = 0; index < questions.length; index++) {
    var question = questions[index];
    response = question.response;
    for (let i = 0; i < response.length; i++) {
        const r = response[i];
        choices[index].innerHTML += '<button class="choice1">' + r + '</button>';
    }
}

/*
var buttonEvent = document.getElementsByClassName("next");
buttonEvent.style.backgroundColor = "black";
*/
function onSelection() {
    var appears = document.getElementById("first");
    var nextAppearance = appears.nextElementSibling;
    appears.remove('id');
    nextAppearance.classList.add('visible');
}
