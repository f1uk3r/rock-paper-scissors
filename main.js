let computerCount = 0;
let playerCount = 0;
let roundCount = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');

let gameAnimation = document.querySelector('#game-animation');
let roundResult = document.querySelector('.round-result')

let roundCountId = document.querySelector('#round-count-id');
let playerCountId = document.querySelector('#player-score-id');
let computerCountId = document.querySelector('#computer-score-id');

function main() {
    rock.addEventListener('click', function() {
        let playerSelection = "rock";
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    })
    paper.addEventListener('click', function() {
        let playerSelection = "paper";
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    })
    scissor.addEventListener('click', function() {
        let playerSelection = "scissor";
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    })
}

main()

function computerPlay() {
    let optionArray = ["rock", "paper", "scissor"];
    return optionArray[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper") {
        computerCount++;
        roundCount++;
        gameAnimation.src = "images/rock-paper.gif"
        scoreUpdate();
        roundResult.textContent = "You Lose! Paper beats Rock";
    }
    else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerCount++;
        roundCount++;
        gameAnimation.src = "images/rock-scissor.gif"
        scoreUpdate();
        roundResult.textContent = "You Win! Rock beats Scissors";
    }
    else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerCount++;
        roundCount++;
        gameAnimation.src = "images/paper-scissor.gif"
        scoreUpdate();
        roundResult.textContent = "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerCount++;
        roundCount++;
        gameAnimation.src = "images/paper-rock.gif"
        scoreUpdate();
        roundResult.textContent = "You Win! Paper beats Rock";
    }
    else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerCount++;
        roundCount++;
        gameAnimation.src = "images/scissor-rock.gif"
        scoreUpdate();
        roundResult.textContent = "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerCount++;
        roundCount++;
        gameAnimation.src = "images/scissor-paper.gif"
        scoreUpdate();
        roundResult.textContent = "You Win! Scissor beats Paper";
    }
    else if (playerSelection === "rock" && computerSelection === "rock" ) {
        roundCount++;
        gameAnimation.src = "images/rock-rock.gif"
        scoreUpdate();
        roundResult.textContent = "It's a Draw!, You both chose a Rock";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        roundCount++;
        gameAnimation.src = "images/paper-paper.gif"
        scoreUpdate();
        roundResult.textContent = "It's a Draw!, You both chose a Paper";
    }
    else if (playerSelection === "scissor" && computerSelection === "scissor") {
        roundCount++;
        gameAnimation.src = "images/scissor-scissor.gif"
        scoreUpdate();
        roundResult.textContent = "It's a Draw!, You both chose a Scissors";
    }
    else {
        roundResult.textContent = "Invalid Player Selection";
    }
}


function scoreUpdate() {
    roundCountId.textContent = roundCount;
    playerCountId.textContent = playerCount;
    computerCountId.textContent = computerCount;
}