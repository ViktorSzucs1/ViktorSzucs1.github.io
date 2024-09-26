const questions = [
    { term: 'Cidal', definition: 'Causing death', options: ['Causing death', 'Vomiting', 'Cell', 'Tumor/mass'] },
    { term: 'Cyste', definition: 'Cell', options: ['Excision removal', 'Cell', 'Study of', 'Instrument to view'] },
    { term: 'Emesis', definition: 'Vomiting', options: ['Vomiting', 'Artificial opening', 'Slow', 'Excessive'] },
    // Add more terms here following the same format
];

let currentQuestion = 0;

document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("restartButton").addEventListener("click", restartQuiz);

function startQuiz() {
    document.getElementById("quizContainer").classList.remove("hidden");
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("homeButton").classList.add("hidden");
    document.getElementById("restartButton").classList.remove("hidden");
    displayQuestion();
}

function restartQuiz() {
    currentQuestion = 0;
    startQuiz();
}

function displayQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById("question").innerText = "You've completed the quiz!";
        document.getElementById("optionsContainer").innerHTML = "";
        return;
    }

    let question = questions[currentQuestion];
    document.getElementById("question").innerText = `What does ${question.term} mean?`;

    let optionsHTML = '';
    question.options.forEach((option, index) => {
        optionsHTML += `<button class="color${(index % 4) + 1}">${option}</button>`;
    });

    document.getElementById("optionsContainer").innerHTML = optionsHTML;

    document.querySelectorAll("#optionsContainer button").forEach((button, index) => {
        button.addEventListener("click", () => {
            if (question.options[index] === question.definition) {
                alert("Correct!");
            } else {
                alert("Wrong answer, try again.");
            }
            currentQuestion++;
            displayQuestion();
        });
    });
}
