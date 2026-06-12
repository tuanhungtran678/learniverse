let lessons = [];
let currentQuestion = 0;
let selected = false;

// Elements
const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const progressEl = document.getElementById("progress");

// Load lessons
async function loadLessons() {
    try {
        const course =
    localStorage.getItem("selectedCourse")
    || "english";

const response =
    await fetch(
        `data/${course}.json`
    );
        lessons = await response.json();

        showQuestion();
    } catch (error) {
        questionEl.textContent =
            "Failed to load lessons.";

        console.error(error);
    }
}

// Show current question
function showQuestion() {

    selected = false;
    nextBtn.disabled = true;

    const lesson = lessons[currentQuestion];

    questionEl.textContent =
        lesson.question;

    answersEl.innerHTML = "";

    lesson.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.addEventListener("click", () => {
            selectAnswer(button, index);
        });

        answersEl.appendChild(button);

    });

    updateProgress();
}

// Select answer
function selectAnswer(button, index) {

    if (selected) return;

    selected = true;

    const lesson = lessons[currentQuestion];

    const buttons =
        document.querySelectorAll(".answer");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (index === lesson.correct) {

        button.classList.add("correct");

        addXP(10);

    } else {

        button.classList.add("wrong");

        buttons[lesson.correct]
            .classList.add("correct");

    }

    nextBtn.disabled = false;
}

// XP System
function addXP(amount) {

    let xp =
        Number(localStorage.getItem("xp")) || 0;

    xp += amount;

    localStorage.setItem("xp", xp);

}

// Progress Bar
function updateProgress() {

    const percent =
        (currentQuestion / lessons.length) * 100;

    progressEl.style.width =
        `${percent}%`;

}

// Next Question
nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if (currentQuestion >= lessons.length) {

        progressEl.style.width = "100%";

        completeLesson();

        return;
    }

    showQuestion();

});

// Complete Lesson
function completeLesson() {

    updateStreak();

    questionEl.innerHTML =
        "🎉 Lesson Complete!";

    answersEl.innerHTML = `
        <p style="text-align:center;">
            Great job! You finished this lesson.
        </p>
    `;

    nextBtn.textContent =
        "Back Home";

    nextBtn.onclick = () => {
        window.location.href =
            "index.html";
    };

}

// Streak System
function updateStreak() {

    const today =
        new Date().toDateString();

    const lastStudy =
        localStorage.getItem("lastStudy");

    let streak =
        Number(localStorage.getItem("streak")) || 0;

    if (lastStudy !== today) {

        streak++;

        localStorage.setItem(
            "streak",
            streak
        );

        localStorage.setItem(
            "lastStudy",
            today
        );

    }

}

// Start
loadLessons();