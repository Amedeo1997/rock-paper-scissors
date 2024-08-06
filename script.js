let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getEmoji(choice) {
    switch (choice) {
        case "rock":
            return "✊";
        case "paper":
            return "✋";
        case "scissors":
            return "✌️";
        default:
            return "";
    }
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const humanEmoji = getEmoji(humanChoice);
    const computerEmoji = getEmoji(computerChoice);
    const resultMessage = document.getElementById('result-message');
    const humanScoreDisplay = document.getElementById('human-score');
    const computerScoreDisplay = document.getElementById('computer-score');

    if (humanChoice === computerChoice) {
        resultMessage.textContent = `It's a tie! Both chose ${humanChoice} ${humanEmoji}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore++;
        resultMessage.textContent = `You win! ${humanChoice} ${humanEmoji} beats ${computerChoice} ${computerEmoji}`;
    } else {
        computerScore++;
        resultMessage.textContent = `You lose! ${computerChoice} ${computerEmoji} beats ${humanChoice} ${humanEmoji}`;
    }

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;

    if (humanScore + computerScore >= 5) {
        if (humanScore > computerScore) {
            resultMessage.textContent += " You win the game! 🎉";
        } else if (computerScore > humanScore) {
            resultMessage.textContent += " Computer wins the game! 🤖";
        } else {
            resultMessage.textContent += " The game is a tie! 🤝";
        }
        // Reset scores for a new game
        humanScore = 0;
        computerScore = 0;
    }
}
