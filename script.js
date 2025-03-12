const questions = [
    { question: "من هو الهداف التاريخي لكأس العالم؟", options: ["بيليه", "رونالدو البرازيلي", "ميروسلاف كلوزه", "مارادونا"], answer: "ميروسلاف كلوزه" },
    { question: "كم مرة فاز ريال مدريد بدوري أبطال أوروبا حتى عام 2024؟", options: ["10", "14", "15", "13"], answer: "14" },
    { question: "في أي سنة أُقيم أول كأس عالم؟", options: ["1920", "1930", "1940", "1950"], answer: "1930" },
    { question: "من هو اللاعب الأكثر تتويجًا بالكرة الذهبية؟", options: ["كريستيانو رونالدو", "ليونيل ميسي", "زيدان", "رونالدينيو"], answer: "ليونيل ميسي" },
    { question: "أي منتخب فاز بكأس العالم 2018؟", options: ["البرازيل", "فرنسا", "ألمانيا", "الأرجنتين"], answer: "فرنسا" },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("quiz-container").innerHTML = `<h1>انتهت اللعبة!</h1><p>نتيجتك: ${score}/${questions.length}</p>`;
        document.getElementById("restart").style.display = "block";
        return;
    }
    
    let q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    
    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(btn, option, q.answer);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(button, selected, correct) {
    if (selected === correct) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }
    setTimeout(() => {
        currentQuestionIndex++;
        document.getElementById("score").innerText = `النتيجة: ${score}`;
        loadQuestion();
    }, 1000);
}

function restartGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("quiz-container").innerHTML = `
        <h1>لعبة الأسئلة الكروية</h1>
        <p id="question">تحميل السؤال...</p>
        <div id="options"></div>
        <p id="score">النتيجة: 0</p>
        <button id="restart" onclick="restartGame()" style="display:none;">إعادة اللعب</button>
    `;
    loadQuestion();
}

loadQuestion();