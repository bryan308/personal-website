function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
        alert ('CORRECT!') // ALERT
    }
    else {
        alert ('INCORRECT') //ALERT
    }
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
// answer checker 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

Question.prototype.isWrongAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your score: " + quiz.score + "</h2>";
    if(quiz.score >= 8) {
        gameOverHTML += "<h2>SARAP TAMES!</h2>";
    }
    if(quiz.score <= 7) {
        gameOverHTML += "<h2>ULITIN MO NG MADALE MO</h2>";
    }
    if(quiz.score == 0) {
        gameOverHTML += "<h2>ITLOG:)</h2>";
    }
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question(" It is an electronic, programmable device used to store, process and retrieve data?", ["Smartphone", "Computer","Hard drive", "Calculator"], "Computer"),
    new Question(" It is a type of computer that is normally used for engineering and scientific applications?", ["Mainframes", "Supercomputer", "Minicomputer", "Workstation"], "Supercomputer"),
    new Question(" It is a type of computer typically used as small or midrange servers performing business and scientific applications?", ["Supercomputer", "Mainframes","Minicomputer", "Laptop"], "Minicomputer"),
    new Question(" It is a type of computer that is portable and suitable for mobile use?", ["Workstation", "Supercomputer", "Mainframes", "Laptop"], "Laptop"),
    new Question(" It is considered as the nervous system or the backbone of the computer?", ["Sockets", "Processor", "Motherboard", "Chipsets and controllers"], "Motherboard"),
    new Question(" A computer option that is providing one or more services to serve other computers and devices?", ["Client", "Terminal", "Workstation", "Server"], "Server"),
    new Question(" This is a chip that acts as an interface between the main memory, the CPU and other components?", ["BIOS", "Microchip", "Northbridge", "Southbridge"], "Northbridge"),
    new Question(" A term used to describe the combination of the Northbridge and the Southbridge?", ["Peripheral Device", "Chipsets", "Output Device", "CPU"], "Chipsets"),
    new Question(" It is an expansion card that converts data input into visual display?", ["Input device", "Video Card", "Audio adapter", "LAN Card"], "Video Card"),
    new Question(" This memory is used inside the computer to hold programs and data while it is running?", ["RAM", "ROM", "BIOS", "CMOS"], "RAM")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();