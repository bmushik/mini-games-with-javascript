let inputWinCounter = 0;
let outputWinCounter = 0;
function makeChoice(playerChoice) {
  const cpuChoice = getCpuChoice(playerChoice);
    const squareElements = document.querySelectorAll(".square");
    squareElements.forEach(element => {
        element.style.borderColor = "#F7C5CC";
    });
    const cpuChoiceElement = document.getElementById("cpu" + cpuChoice.charAt(0).toUpperCase() + cpuChoice.slice(1));
    cpuChoiceElement.style.borderColor = "#CC313D";

    const playerChoiceElement = document.getElementById("player" + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    playerChoiceElement.style.borderColor = "#CC313D";
    checkRoundWinner(playerChoice, cpuChoice)
}

function getCpuChoice(choice) {
  const random = Math.random();
  if (random < 0.65) {
    if (choice=="rock") {
      return "paper";
    } else if (choice=="paper") {
      return "scissors";
    } else if (choice=="scissors") {
      return "rock";
    }
  } else if (random < 0.75) {
    return choice;
  } else {
    const possibleValues = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * possibleValues.length);
    return possibleValues[randomIndex];
  }
}

function checkRoundWinner(yourChoice, cpusChoice) {
    if (yourChoice === cpusChoice) {
        document.getElementById("draw").style.display = "flex";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "none";
    } else if (
        (yourChoice === 'paper' && cpusChoice === 'rock') ||
        (yourChoice === 'rock' && cpusChoice === 'scissors') ||
        (yourChoice === 'scissors' && cpusChoice === 'paper')
    ) {
        inputWinCounter++;
        document.getElementById("win").style.display = "flex";
        document.getElementById("draw").style.display = "none";
        document.getElementById("lose").style.display = "none";
    } else {
        outputWinCounter++;
        document.getElementById("lose").style.display = "flex";
        document.getElementById("draw").style.display = "none";
        document.getElementById("win").style.display = "none";
    }
    updateScoreDisplay()
}

function updateScoreDisplay() {
    var scoreDiv = document.getElementById("scoreDiv");
    if (outputWinCounter >= 20 && outputWinCounter %20 ===0) {
      var content = "YOU " + inputWinCounter + " | " + "CPU " + ":D";
    } else {
      var content = "YOU " + inputWinCounter + " | " + "CPU " + outputWinCounter;
    }
    scoreDiv.innerHTML = content;
}

function reset() {
    inputWinCounter = 0;
    outputWinCounter = 0;
    const resetElements = document.querySelectorAll(".reset-elements");
    resetElements.forEach(element => {
        element.style.display = "none";
    });
    updateScoreDisplay()
}
