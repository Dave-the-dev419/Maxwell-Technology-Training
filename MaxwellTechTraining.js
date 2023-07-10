var Questions = {
    questionOne: {
        question: "What are your Career Objectives?",
        response: ["International Certification", "Job", "Expand my Knowledge"]
    },
    questionTwo: {
        question: "Are you currently employed?",
        response: ["Yes", "No"]
    },
    questionThree: {
        question: "Do you have any short-term travel plans?",
        response: ["yes", "no"]
    },
    questionFour: {
        question: "What is your curernt level of formal education?",
        response: ["O' level", "A' level", "Associate degree", "Undergraduate degree", "Postgraduate degree"]
    },
    questionFive: {
        question: "Does your work schedule permit a rigid time allocation",
        response: ["Yes", "No"]
    },
    questionSix: {
        question: "What background or skills do you have in I.T? Select all that apply.",
        response: ["Microsoft Office", "Design Suites Creative (Adobe, etc)", "Programming", "Digital marketing",
                    "Data Science", "Hardware", "Cyber Security"]
    },
    questionSeven: {
        question: "How many years of experience do you have in IT?",
        response: ["1-5", "6-10", "10+"]
    },
    questionEight: {
        question: "Do you have any relevant certifications?",
        response: ["Yes", "No"]
    }
};

function onSelection() {
    var chosenBtn = document.getElementById("question1");
    var newColor = chosenBtn.getElementsByTagName("button");
    for (var i = 0; i < newColor.length; i++) {
        newColor[i].style.backgroundColor = "white";
        newColor[i].style.Color = "red";
    }
}