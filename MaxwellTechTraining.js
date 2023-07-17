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
        question: "3. Do you have any short-term travel plans?",
        response: ["Yes", "No"]
    },
    {
        question: "4. How long will your travel last?",
        response: ["0-3 months", "3-12 months", "Over a year"]
    },
    {
        question: "5. What is your curernt level of formal education?",
        response: ["O' level", "A' level", "Undergraduate degree", "Postgraduate degree"]
    },
    {
        question: "6. Does your work schedule permit a rigid time allocation",
        response: ["Yes", "No"]
    },
    {
        question: "7. What background or skills do you have in I.T? Select all that apply.",
        response: ["Microsoft Office", "Design Suites Creative (Adobe, etc)", "Programming", "Digital marketing",
                    "Data Science", "Hardware", "Cyber Security"]
    },
    {
        question: "8. How many years of experience do you have in IT?",
        response: ["1-5", "6-10", "10+"]
    },
    {
        question: "9. Do you have any relevant certifications?",
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
}

var choices = document.getElementsByClassName('choices');
for (let index = 0; index < questions.length; index++) {
    var question = questions[index];
    response = question.response;
    for (let i = 0; i < response.length; i++) {
        const r = response[i];
        choices[index].innerHTML += '<button class="choice1" onclick="changeColor(event)">' + r + '</button>';
        var leftArrow = document.createElement("div");
        if (choices[i] === choices.lastChild) {
            document.remove("a")
        }
    }
}

var navArrow = document.getElementsByClassName("leftArrow");
for (var i = 0 ; i < choices.length; i++) {
    //navArrow.style.display = "none";
    navArrow.innerHTML = choices[i].previousSibling; 
    console.log(navArrow);
}

var n = 0;
function onSelection() {
    // Hides the introduction
    document.getElementById('intro').style.display = 'none';

    // get a list of all questions
    var appears = document.getElementsByClassName("choices");

    // Makes the nth question visible
    appears[n].classList.add('visible');

    // Make the nth - 1 question invisible
    // Only do this if n is greater than 0 (i.e. if we are not on the first question)
    if(n > 0)
        appears[n-1].classList.remove('visible');
    
    // Increment n
    n++;
}

function emailSent() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ndecham06@gmail.com",
        Password : "",
        To : 'Dave.ndecham001@umb.edu',
        From : document.getElementById("email").value,
        Subject : "Maxwell Technologies Training",
        Body : "Name: "  + document.getElementById("firstName").value
            + " " + document.getElementById("lastName").value + "  " + 
            document.getElementById("userQuestions").value
    })
}

function changeColor(e) {
    var clicked = e.target;
    if (clicked === "") {
        alert("Please select response")
        return false;
    }
    else {
        var otherBtns = document.getElementsByClassName("choice1");
        console.log(otherBtns);
        clicked.style.backgroundColor = "#fff"; // change background color of target
        
        // This loops through the collection of elements and changes their color
        for (var i = 0; i < otherBtns.length; i++) {
            otherBtns[i].style.backgroundColor = "#a103039b";
            otherBtns[i].style.color = "black";  
            
            // This code will make sure that the button clicked
            // doesn't change color
            if (clicked  !== otherBtns){
                clicked.style.backgroundColor = "#fff";
            }
        }
    }
}
