const questions = [
    { term: 'Cidal', definition: 'Causing death' },
    { term: 'Cyste', definition: 'Cell' },
    { term: 'Ectomy', definition: 'Excision removal' },
    { term: 'Emesis', definition: 'Vomiting' },
    { term: 'Logy', definition: 'Study of' },
    { term: 'Oma', definition: 'Tumor/mass' },
    { term: 'Opsy', definition: 'Process of viewing' },
    { term: 'Ostomy', definition: 'Creation of artificial opening' },
    { term: 'Hyper', definition: 'Excessive' },
    { term: 'Scope', definition: 'Instrument of viewing' },
    { term: 'Brady', definition: 'Slow' },
    { term: 'Hypo', definition: 'Deficient' },
    { term: 'Macro', definition: 'Large / Long' },
    { term: 'Patho', definition: 'Disease' },
    { term: 'Post', definition: 'After' },
    { term: 'Pre', definition: 'Before' },
    { term: 'Pseudo', definition: 'False' },
    { term: 'Tachy', definition: 'Fast' },
    { term: 'Dys', definition: 'Abnormal' },
    { term: 'Sphygmomanometer', definition: 'Instrument to measure blood pressure' },
    { term: 'Stethoscope', definition: 'Instrument used to listen to sounds in the body' },
    { term: 'Systolic', definition: 'Pressure in your arteries when your heart beats (top number)' },
    { term: 'Diastolic', definition: 'Pressure of blood in the arteries (bottom number)' },
    { term: 'Body measurements', definition: 'Dimensions of human body' },
    { term: 'Blood pressure', definition: 'The force of circulating blood on the wall of the arteries' },
    { term: 'Brachial artery', definition: 'Major blood vessel supplying blood to upper arm, elbow forearm and arm' },
    { term: 'Pulse', definition: 'The number of times a heart beats in a given amount of time' },
    { term: 'Temperature', definition: 'Degree of heat or coldness of the body' },
    { term: 'Vital signs', definition: 'Measurements of the body’s basic functions' },
    { term: 'Respiration', definition: 'Act of breathing inhaling oxygen exhaling CO2' },
    { term: 'A.C', definition: 'Before meals' },
    { term: 'Bid', definition: 'Twice a day' },
    { term: 'BP', definition: 'Blood Pressure' },
    { term: 'C', definition: 'With' },
    { term: 'DNR', definition: 'Do not resuscitate' },
    { term: 'Dx', definition: 'Diagnosis' },
    { term: 'h.s', definition: 'At bedtime' },
    { term: 'Iv', definition: 'Intravenous' },
    { term: 'NPO', definition: 'Nothing by mouth' },
    { term: 'P.c', definition: 'After meals' },
    { term: 'PRN', definition: 'As needed' },
    { term: 'Qh', definition: 'Every hour' },
    { term: 'Qid', definition: 'Four times a day' },
    { term: 'OTC', definition: 'Over the counter' },
    { term: 'Rx', definition: 'Treatment therapy prescription' },
    { term: 'S', definition: 'Without' },
    { term: 'Stat', definition: 'Immediately' },
    { term: 'Tid', definition: 'Three times a day' },
    { term: 'TPR', definition: 'Temperature pulse respiration' },
    { term: 'Tx', definition: 'Treatment' },
    { term: 'NKA / NDKA', definition: 'No known allergies' },
    { term: 'Hepato', definition: 'Liver' },
    { term: 'Cysto', definition: 'Bladder' },
    { term: 'Osteo', definition: 'Bone' },
    { term: 'Encephal', definition: 'Brain' },
    { term: 'Myo', definition: 'Muscle' },
    { term: 'Gastro', definition: 'Stomach' },
    { term: 'Pneumo', definition: 'Lung' },
    { term: 'Derm', definition: 'Skin' },
    { term: 'Nephro', definition: 'Kidney' },
    { term: 'Cardio', definition: 'Heart' },
    { term: 'Neuro', definition: 'Nerve' },
    { term: 'Artho', definition: 'Joint' },
    { term: 'Phlebo', definition: 'Vein' },
    { term: 'Hosa', definition: 'Health Occupation Students of America' }
];

// Function to shuffle an array (Fisher-Yates Shuffle)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Function to start the quiz
function startQuiz() {
    shuffle(questions); // Shuffle questions
    currentQuestion = 0;
    document.getElementById("quizContainer").classList.remove("hidden");
    document.getElementById("startButton").classList.add("hidden");
    document.getElementById("homeButton").classList.add("hidden");
    document.getElementById("restartButton").classList.remove("hidden");
    displayQuestion();
}

// Function to generate random colors
function getRandomColor() {
    const colors = ['#ff6666', '#66ff66', '#6666ff', '#ffcc66']; // Define your colors here
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to display the current question and options
function displayQuestion() {
    if (currentQuestion >= questions.length) {
        document.getElementById("question").innerText = "You've completed the quiz!";
        document.getElementById("optionsContainer").innerHTML = "";
        return;
    }

    let question = questions[currentQuestion];
    document.getElementById("question").innerText = `What does ${question.term} mean?`;

    // Generate random options
    let allOptions = [question.definition, ...generateRandomOptions(question.definition)];
    shuffle(allOptions); // Shuffle options

    let optionsHTML = '';
    allOptions.forEach(option => {
        optionsHTML += `<button style="background-color: ${getRandomColor()};">${option}</button>`;
    });

    document.getElementById("optionsContainer").innerHTML = optionsHTML;

    document.querySelectorAll("#optionsContainer button").forEach((button, index) => {
        button.addEventListener("click", () => {
            if (allOptions[index] === question.definition) {
                alert("Correct!");
            } else {
                alert("Wrong answer, try again.");
            }
            currentQuestion++;
            displayQuestion();
        });
    });
}

// Function to generate random options (non-duplicates)
function generateRandomOptions(correctAnswer) {
    const randomTerms = questions
        .filter(q => q.definition !== correctAnswer) // Exclude the correct answer
        .map(q => q.definition);
    
    // Shuffle and pick 3 random options
    shuffle(randomTerms);
    return randomTerms.slice(0, 3);
}

// Add event listeners to buttons
document.getElementById("startButton").addEventListener("click", startQuiz);
document.getElementById("restartButton").addEventListener("click", restartQuiz);

function restartQuiz() {
    startQuiz();
}
