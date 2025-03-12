let currentQuestion = 0;
let score = 0;

const questions = [
    {
        question: "ما هي عاصمة مصر؟",
        correctAnswer: 1, // الإجابة الصحيحة هي الخيار الأول (القاهرة)
        options: ["القاهرة", "الرياض", "دمشق", "بيروت"]
    },
    {
        question: "من هو مؤسس علم الفضاء؟",
        correctAnswer: 2, // الإجابة الصحيحة هي الخيار الثاني
        options: ["إينشتاين", "جاليليو", "نيوتن", "داروين"]
    }
];

function loadQuestion() {
    if (currentQuestion < questions.length) {
        const q = questions[currentQuestion];
        document.getElementById("question-text").textContent = q.question;
        const answersList = document.getElementById("answers");
        answersList.innerHTML = '';
        q.options.forEach((answer, index) => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.textContent = answer;
            button.className = 'answer';
            button.onclick = () => checkAnswer(index + 1); // أرسل الرقم الصحيح للإجابة
            li.appendChild(button);
            answersList.appendChild(li);
        });
    } else {
        document.getElementById("result").textContent = `انتهت الأسئلة! نتيجتك: ${score} من ${questions.length}`;
    }
}

function checkAnswer(selected) {
    const q = questions[currentQuestion];
    if (selected === q.correctAnswer) {
        score++;
        alert("إجابة صحيحة!");
    } else {
        alert("إجابة خاطئة!");
    }
    currentQuestion++;
    loadQuestion();
}

loadQuestion();
