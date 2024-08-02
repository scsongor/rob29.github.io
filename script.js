document.addEventListener("DOMContentLoaded", () => {
  checkProgress();
});

function checkAnswer(challengeNumber) {
  let answerInput = document.getElementById(`answer${challengeNumber}`);
  let answer = answerInput.value.trim().toLowerCase();
  let correctAnswers = [
    "ok",
    "55566688833",
    "flat iron",
    "4123",
    "hashmap",
    "heaven",
    "ysheeblack",
    "otter",
    "potter",
    "pottery",
  ];

  if (answer === correctAnswers[challengeNumber]) {
    localStorage.setItem(`challenge${challengeNumber}Completed`, true);
    yay.play();
    checkProgress();
  } else {
    cow.play();
    setTimeout(function () {
      alert("Try again!");
    }, 1000);
  }
}

function checkProgress() {
  let totalChallenges = 9; // Update as more challenges are added
  let completedChallenges = 0;

  for (let i = 0; i <= totalChallenges; i++) {
    if (localStorage.getItem(`challenge${i}Completed`)) {
      document.getElementById(`challenge${i}`).classList.add("d-none");
      completedChallenges++;
    } else {
      document.getElementById(`challenge${i}`).classList.remove("d-none");
      break;
    }
  }

  if (completedChallenges === totalChallenges + 1) {
    document.getElementById("finalMessage").classList.remove("d-none");
    mp3.pause();
    natasha.play();
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

var yay = document.createElement("audio");
yay.setAttribute("src", "assets/yay.mp3");
yay.load();
document.documentElement.appendChild(yay);

var cow = document.createElement("audio");
cow.setAttribute("src", "assets/cow.mp3");
cow.load();
document.documentElement.appendChild(cow);

var natasha = document.createElement("audio");
natasha.setAttribute("src", "assets/natasha.mp3");
natasha.load();
document.documentElement.appendChild(natasha);
