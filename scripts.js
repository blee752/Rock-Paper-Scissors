function computerPlay () {
    let choice = Math.floor(Math.random() * 3);

    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
 }}

/* function rps () {
   let winner = false;
   let pScore = 0;
    let cScore = 0; 
    let playerSelection;
    let compSelection;

    while(!winner) {
        playerSelection = prompt("Enter what you will play (Rock, Paper, Scissors): ");
        compSelection = computerPlay();
       let result = game(playerSelection.trim().toLowerCase(), compSelection);
       if (result === undefined) {
           console.log("Its a tie!");
            
       }
       else if (result === true) {
            console.log("Player wins!");
            pScore++;
            
        }
       else {
           console.log("Computer wins!");
           cScore++;
            
        }

       if (pScore === 5) {
           winner = true;
           console.log("Player wins the game!");
           console.log("pscore: " + pScore);
       }
       else if (cScore === 5) {
           winner = true;
           console.log("Computer Wins the game!");
           console.log("cSCore: " + cScore);
       }
   }
}   */


let playerScore = 0;
let compScore = 0;

function rps (p) {
    let compSelection = computerPlay();
    const winner = document.querySelector('.results h2');
    updateSelection(p, compSelection);
    console.log("cpu:" + compSelection);
    let result = game(p, compSelection);
    console.log(result);
    if (result === undefined){
        //update to say tie,
        console.log("tie")
        winner.innerHTML = "Tie!"
    }
    else if (result === true) {
        //update player score by 1. Change score to player wins
        console.log("player wiin");
        playerScore++;
        updateScore(true);
        winner.innerHTML = "Player wins this round"
    }

    else if (result === false) {
        //update opponent score by 1. Change score to opponent wins
        console.log("player lose");
        compScore++;
        updateScore(false);
        winner.innerHTML = "Opponent wins this round"
    }
}

function updateSelection (p, c) {
    const pSelection = document.querySelector('.player-selection');
    const cSelection = document.querySelector('.comp-selection');
    pSelection.innerHTML = "Player choice: " + p;
    cSelection.innerHTML = 'Computer Choice: ' + c;
}


function updateScore (player) { 
    if (player) {
        const score = document.querySelector('.player-Score');
        score.innerHTML = "Player: " + playerScore;
        //update player score +1
    }
    else {
        const score = document.querySelector('.cpu-Score');
        score.innerHTML = "Opponent: " + compScore;
        //update cpu score +1
    }

    if (playerScore === 5 || compScore === 5) {
        restartgame();

    }
    /* if (playerScore === 5) { // stub for now, just reset if 5 for now while i finish this
        //pop up window 
    }

    else if (compScore === 5) {
        //pop up window 
    }
 */
    //add a check if score is 5, if 5 popup window to say win or lose, do you want to restart?
    //then call the restart game function
}

function restartgame () {
    playerScore = 0;
    compScore = 0;

     score = document.querySelector('.player-Score');
    score.innerHTML = "Player: " + playerScore;

     score = document.querySelector('.cpu-Score');
    score.innerHTML = "Opponent: " + compScore;
}

function game (p, c) {
    if (
    (p === 'rock' && c === 'scissors') ||
    (p === 'scissors' && c === 'paper') ||
    (p === 'paper' && c === 'rock')) {
        return true;    
    }
    else if (
    (c === 'rock' && p === 'scissors') ||
    (c === 'scissors' && p === 'paper') ||
    (c === 'paper' && p === 'rock')) {
        return false;
    }
    else return undefined;
}

const playerInput = document.querySelectorAll('.pButton');
console.log(playerInput);

playerInput.forEach(playerInput => playerInput.addEventListener('click', (e) => {
    console.log(e.target.alt);
    rps(e.target.alt);
    //function here on click ? to send input into game logic?
}));




//on click, check class? for selection. use pull the class name into game logic function to compare against ai choice
//update player and comp selection to show what they picked, and score div to who one. update score count
//need an event listner to watch the score counters. Once one score hits 5, pop up window to show winner and ask to redo
    //^ above is not possible i believe? Instead, have some global variables that are updated and monitored on game score update
// if redo, reset status of game ui?
