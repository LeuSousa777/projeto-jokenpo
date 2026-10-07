const result = document.querySelector("#result-message");
const playerScore = document.querySelector("#player-score");
const machineScore = document.querySelector("#machine-score");

let playerScoreValue = 0;
let machineScoreValue = 0;

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
};


const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine());
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber];
}

const playTheGame = (human, machine) => {
    console.log(`Human: ${human} | Machine: ${machine}`);

    if (human === machine) {
        result.innerHTML = "Deu empate!";
   } else if (
        (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
        (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
        (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
    ) {
        playerScoreValue++;
        playerScore.innerHTML = playerScoreValue;
        result.innerHTML = "Você ganhou!"
    } else {
        machineScoreValue++;
        machineScore.innerHTML = machineScoreValue;
        result.innerHTML = "Você perdeu!"
    }
}
   