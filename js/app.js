// ====================
// Learniverse App
// ====================
import { db } from "../firebase/config.js";

import {
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

async function createTestUser() {

    try {

        await setDoc(
            doc(db, "users", "test-user"),
            {
                username: "Player1",
                xp: 0,
                level: 1,
                streak: 0,
                gems: 0
            }
        );

        console.log(
            "User created!"
        );

    } catch (error) {

        console.error(error);

    }

}

createTestUser();
// XP
let xp = Number(localStorage.getItem("xp")) || 0;

// Streak
let streak = Number(localStorage.getItem("streak")) || 0;

// Last study day
let lastStudy = localStorage.getItem("lastStudy");

// Level system
function calculateLevel(xp) {
    return Math.floor(xp / 100) + 1;
}

// Update UI
function updateStats() {
    const xpElement = document.getElementById("xp");
    const streakElement = document.getElementById("streak");
    const levelElement = document.getElementById("level");

    if (xpElement) xpElement.textContent = xp;
    if (streakElement) streakElement.textContent = streak;
    if (levelElement) levelElement.textContent = calculateLevel(xp);
}

// Add XP
function addXP(amount) {
    xp += amount;

    localStorage.setItem("xp", xp);

    updateStats();
}

// Start Learning Button
const startBtn = document.getElementById("startBtn");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    window.location.href = "lesson.html";
});
}

// Course Cards
document.querySelectorAll(".course-card")
.forEach(card => {

    card.addEventListener("click", () => {

        const courseName =
            card.querySelector("h3").textContent;

        alert(
            `Opening ${courseName} course...`
        );

    });

});

// Initialize
updateStats();