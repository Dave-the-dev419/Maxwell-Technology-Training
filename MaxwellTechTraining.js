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
var choice7 = document.getElementById("longer");
for (let index = 0; index < questions.length; index++) {
    var question = questions[index];
    response = question.response;
    for (let i = 0; i < response.length; i++) {
        const r = response[i];
        // const previous = choices[index - 1];
            if (choices[index].id === "longer") {
                choice7.innerHTML +=  '<button class="choice2" style="background-color:#a103039b" onclick="selectMany(event);">' + r + '</button>';
            }   
            else {
                choices[index].innerHTML += '<button class="choice1" onclick="changeColor(event);">' + r + '</button>';
            }    
    }
}

for (var index = 0; index < questions.length; index++) {
    if(choices[index].id !== "first") {
        choices[index].innerHTML += '<a href="#" style="margin: 115px 35px auto" class="leftArrow" onclick="onRewind();">back</a>';
    }
}

var n = 0;
function onSelection() {
    // Hides the introduction
    document.getElementById('intro').style.display = 'none';
    var otherBtns = document.getElementsByClassName("choice1");

    // get a list of all questions
    var appears = document.getElementsByClassName("choices");

    // Makes the nth question visible
    appears[n].classList.add('visible');

    // Only do this if n is greater than 0 (i.e. if we are not on the first question)
    if(n > 0) {
        // This stops the user from going to the
        // next question if no response is chosen
        if (otherBtns[n].style.backgroundColor != "rgb(255, 255, 255)") {
            alert("Please chooose a response");
            appears[n].classList.remove('visible');
            return;
        } else {
            appears[n-1].classList.remove('visible');
        }
    }
    
    // Increment n
    n++;
}

function onRewind() {
    var appears = document.getElementsByClassName("choices");
    appears[n-1].classList.remove('visible');

    appears[n-2].classList.add('visible');
    
    n--;
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
    var otherBtns = document.getElementsByClassName("choice1");
    var appears = document.getElementsByClassName("choices");
    clicked.style.backgroundColor = "#fff"; // change background color of target
    
    // This loops through the collection of elements and changes their color
    for (var i = 0; i < otherBtns.length; i++) {
        otherBtns[i].style.backgroundColor = "#a103039b";
        otherBtns[i].style.color = "black";  
        
        // This code will make sure that a button  
        // already clicked reverts to its
        // original color
        if (clicked  !== otherBtns) {
            clicked.style.backgroundColor = "#fff";
            var condition = document.getElementsByClassName("choices");
            
            
            if (clicked.style.backgroundColor === "rgb(255, 255, 255)") {
                condition[1].classList.remove("visible");
            }
        }
    }
}

// This selects the 7th question and allows
// the user to select multiple buttons
function selectMany(c) {
    var question7 = c.target;
    console.log(question7.style.backgroundColor);
    //
    if (question7.style.backgroundColor != "rgb(255, 255, 255)") {
         question7.style.backgroundColor = "#fff";
        } else {
         question7.style.backgroundColor = "#a103039b";
        }
}
    