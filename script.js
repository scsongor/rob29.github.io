document.addEventListener("DOMContentLoaded", () => {
  checkProgress();
});

function checkAnswer(challengeNumber) {
  let answerInput = document.getElementById(`answer${challengeNumber}`);
  let answer = answerInput.value.trim().toLowerCase();
  let correctAnswers = ["fluffy", "piano"]; // Example answers

  if (answer === correctAnswers[challengeNumber - 1]) {
    alert("Correct!");
    localStorage.setItem(`challenge${challengeNumber}Completed`, true);
    checkProgress();
  } else {
    alert("Try again!");
  }
}

function checkProgress() {
  let totalChallenges = 2; // Update as more challenges are added
  let completedChallenges = 0;

  for (let i = 1; i <= totalChallenges; i++) {
    if (localStorage.getItem(`challenge${i}Completed`)) {
      document.getElementById(`challenge${i}`).classList.add("d-none");
      completedChallenges++;
    } else {
      document.getElementById(`challenge${i}`).classList.remove("d-none");
      break;
    }
  }

  if (completedChallenges === totalChallenges) {
    document.getElementById("finalMessage").classList.remove("d-none");
  }

  updateProgressBar(completedChallenges, totalChallenges);
}

function updateProgressBar(completed, total) {
  let progressPercentage = (completed / total) * 100;
  let progressBar = document.getElementById("progressBar");
  progressBar.style.width = progressPercentage + "%";
  progressBar.setAttribute("aria-valuenow", progressPercentage);
}

var mp3 = document.createElement("audio");
mp3.setAttribute("src", "happybday.mp3");
mp3.load();
document.documentElement.appendChild(mp3);
//mp3.play();

var balloonpop = document.createElement("audio");
balloonpop.setAttribute("src", "assets/pop.mp3");
balloonpop.load();
document.documentElement.appendChild(balloonpop);
