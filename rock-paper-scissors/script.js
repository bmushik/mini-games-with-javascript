let inputWinCounter = 0;
let outputWinCounter = 0;
let inputValue = 0;
let clickable = true;
document.getElementById("assignButton").addEventListener("click", function () {
    inputValue = parseInt(document.getElementById("inputValue").value);
    if (inputValue < 0) {
      alert("Please enter a valid number!");
        inputValue = 0; 
    }
    reset();
});

function makeChoice(playerChoice) {
    const possibleValues = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * possibleValues.length);
    const getCpuChoice = possibleValues[randomIndex];

    const squareElements = document.querySelectorAll(".square");
    squareElements.forEach(element => {
        element.style.backgroundColor = "#b4be89";
    });
    const cpuChoiceElement = document.getElementById("cpu" + getCpuChoice.charAt(0).toUpperCase() + getCpuChoice.slice(1));
    cpuChoiceElement.style.backgroundColor = "#e0be99";

    const playerChoiceElement = document.getElementById("player" + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    playerChoiceElement.style.backgroundColor = "#e0be99";
    checkRoundWinner(playerChoice, getCpuChoice, inputValue)
}

function checkRoundWinner(yourChoice, cpuChoice, numberToWin) {
    if (!clickable) {
        return;
    }
    if (yourChoice === cpuChoice) {
        document.getElementById("draw").style.display = "flex";
        document.getElementById("win").style.display = "none";
        document.getElementById("lose").style.display = "none";
    } else if (
        (yourChoice === 'paper' && cpuChoice === 'rock') ||
        (yourChoice === 'rock' && cpuChoice === 'scissors') ||
        (yourChoice === 'scissors' && cpuChoice === 'paper')
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
    while (numberToWin != 0) {
        if (inputWinCounter == numberToWin) {
            document.getElementById("win-final").style.display = "flex";
            askAgain()
            break;
        } else if (outputWinCounter == numberToWin) {
            document.getElementById("lose-final").style.display = "flex";
            askAgain()
            break;
        } else {
            return;
        }
    }
}
function reset() {
    clickable = true;
    inputWinCounter = 0;
    outputWinCounter = 0;
    const resetElements = document.querySelectorAll(".reset-elements");
    resetElements.forEach(element => {
        element.style.display = "none";
    });
    document.getElementById("againButton").style.display = "none";
    updateScoreDisplay()
}

function updateScoreDisplay() {
    var scoreDiv = document.getElementById("scoreDiv");
    var content = "YOU: " + inputWinCounter + ", " + "CPU: " + outputWinCounter;
    scoreDiv.innerHTML = content;
}

function askAgain() {
    clickable = false;
    const pElements = document.querySelectorAll(".score-table");
    pElements.forEach(element => {
        element.style.display = "none";
    });
    document.getElementById("againButton").style.display = "flex";
}
