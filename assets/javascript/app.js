var questionBank = [
    {
        question: "Which country is NOT in Asia?",
        choice1: "Algeria",
        choice2: "Syria",
        choice3: "Japan",
        choice4: "Isreal",
        answer: "Algeria"
    }, {
        question: "Which country is in Europe?",
        choice1: "Algeria",
        choice2: "Iran",
        choice3: "Greece",
        choice4: "Chad",
        answer: "Greece"
    }, {
        question: "Which country is in Africa?",
        choice1: "Indonesia",
        choice2: "Russia",
        choice3: "Egypt",
        choice4: "Thailand",
        answer: "Egypt"
    }, {
        question: "Which country is Tokyo in?",
        choice1: "China",
        choice2: "Japan",
        choice3: "South Korea",
        choice4: "North Korea",
        answer: "Japan"
    }, {
        question: "Which country is Tirana in?",
        choice1: "Bosnia",
        choice2: "Romania",
        choice3: "Estonia",
        choice4: "Albania",
        answer: "Albania"
    }, {
        question: "Which city is capital of Romania?",
        choice1: "Istanbul",
        choice2: "Kiev",
        choice3: "Bucharest",
        choice4: "Rome",
        answer: "Bucharest"
    }, {
        question: "Which city is capital of Turkey?",
        choice1: "Ankara",
        choice2: "Istanbul",
        choice3: "Moscow",
        choice4: "Paris",
        answer: "Ankara"
    }, {
        question: "Which city is capital of New Zealand?",
        choice1: "Sydney",
        choice2: "Melbourne",
        choice3: "Wellington",
        choice4: "Cape Town",
        answer: "Wellington"
    }, {
        question: "Which city is capital of Austria?",
        choice1: "Vienna",
        choice2: "Melbourne",
        choice3: "Sydney",
        choice4: "Wellington",
        answer: "Vienna"
    }, {
        question: "Which city is NOT a capital of South Africa?",
        choice1: "Cape Town",
        choice2: "Bloemfontein",
        choice3: "Abuja",
        choice4: "Pretoria",
        answer: "Abuja"
    }];

var showQuestion;
var time;
var seconds = 30;
var questionCounter = 0;
var questionFrame = $("<div>");
var answer = "";
var correct = 0;
var incorrect = 0;
var unanswered = 0;




$("#start").on("click", startGame);
$(".container").on("click", "h5", answerReveal);
$('#restart').click(function() {
    location.reload();
});



function secondsLeft() {
    seconds--;
    $("#time").html("<h2>Time Remaining: " + seconds + " seconds</h2>");



}


function displayQuestion() {

    $("#trivia-container").empty();
    $("#time").html("<h2>Time Remaining: " + seconds + " seconds</h2>");

    time = setInterval(secondsLeft, 1000);

    $(questionFrame).append("<h3>" + questionBank[questionCounter].question + "</h3>");
    $(questionFrame).append("<h5 " + "ans= " + questionBank[questionCounter].choice1 + ">" + questionBank[questionCounter].choice1 + "</h5>");
    $(questionFrame).append("<h5 " + "ans= " + questionBank[questionCounter].choice2 + ">" + questionBank[questionCounter].choice2 + "</h5>");
    $(questionFrame).append("<h5 " + "ans= " + questionBank[questionCounter].choice3 + ">" + questionBank[questionCounter].choice3 + "</h5>");
    $(questionFrame).append("<h5 " + "ans= " + questionBank[questionCounter].choice4 + ">" + questionBank[questionCounter].choice4 + "</h5>");
    $("#trivia-container").append(questionFrame);

    answer = questionBank[questionCounter].answer;

    showQuestion = setTimeout(displayBlank, 30 * 1000);


}

function answerReveal() {

    clearTimeout(showQuestion);
    clearInterval(time);
    seconds = 30;


    if ($(this).attr("ans") === answer) {
        $("#trivia-container").empty();

        $("#trivia-container").html("<h3><br>Correct!</h3>");
        correct++;




    } else {
        $("#trivia-container").empty();

        $("#trivia-container").html("<h3><br>Wrong!<br><br> The answer was " + answer + "</h3>");
        incorrect++;



    }
    setTimeout(nextQuestion, 3000);
    console.log($(this).attr("ans"));

}

function displayBlank() {
    clearInterval(time);
    seconds = 30;

    $("#trivia-container").empty();

    $("#trivia-container").html("<h3><br>Time is Up!<br><br> The answer is " + answer + "</h3>");
    unanswered++;


    setTimeout(nextQuestion, 3000);
}

function nextQuestion() {
    $("#trivia-container").empty();
    questionCounter++;
    $(questionFrame).empty();
    if (questionCounter === questionBank.length) {

        $("#time").empty();

        $("#trivia-container").append("<h3>Correct: " + correct + "</h3>");
        $("#trivia-container").append("<h3>Incorrect: " + incorrect + "</h3>");
        $("#trivia-container").append("<h3>Unanswered: " + unanswered + "</h3>");

        $("#restart").append("<h2>Start Over?</h2>");

        return;

    }


    displayQuestion();





}

function startGame() {
    


    displayQuestion();


}


function stopGame() {


}

