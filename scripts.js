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

function rps () {
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

rps();