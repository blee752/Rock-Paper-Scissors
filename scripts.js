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


function rps (p) {
    let compSelection = computerPlay();
    console.log("cpu:" + compSelection);
    let result = game(p, compSelection);
    console.log(result);
    if (result === undefined){
        //update to say tie,
        console.log("tie")
    }
    else if (result === true) {
        //update player score by 1. Change score to player wins
        console.log("player wiin");
    }

    else if (result === false) {
        //update opponent score by 1. Change score to opponent wins
        console.log("player lose");
    }
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
// if redo, reset status of game ui?
