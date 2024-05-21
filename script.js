

function getComputerChoice(){ 
    let numberChoice = Math.floor(Math.random() * 3) + 1;
    let computerChoice = undefined;
    if (numberChoice === 1) { 
        return computerChoice = 'rock'; 
    } 
    else if (numberChoice === 2) { 
        return computerChoice = 'scissors';
    }
    else 
        return computerChoice = 'paper';
}

let humanScore = 0; 
let computerScore = 0; 
let humanChoice = ''; 
let roundResults = '';
const rock_btn = document.querySelector("#rock-btn");
const paper_btn = document.querySelector("#paper-btn");
const scissors_btn = document.querySelector("#scissors-btn"); 


/// major functions for game play 

function playRound(humanChoice, computerChoice){ 
    if (humanChoice === 'rock' && computerChoice === 'paper'){ 
        return 'computer wins';
       
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors'){ 
        return 'computer wins'; 
        
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock'){ 
        return 'computer wins'; 
         
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper'){ 
        return 'user wins'; 
        
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors'){ 
        return 'user wins'; 
        
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock'){ 
        return 'user wins'; 
         
    }
    else 
        return 'tie';
        
}

function updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults) { 
    let currentComputerChoice = document.querySelector(".current-computer-choice"); 
    currentComputerChoice.textContent = `${computerChoice}`; 
    let currentComputerScore = document.querySelector("#currentComputerScore"); 
    currentComputerScore.textContent = `${computerScore}`; 
    let currentUserScore = document.querySelector("#currentUserScore"); 
    currentUserScore.textContent = `${humanScore}`; 
    let roundResultsMessage = document.querySelector("#roundResultMessage"); 
    if (roundResults === 'user wins'){ 
        roundResultsMessage.textContent = `${humanChoice} beats ${computerChoice}. You won this round!`; 

    }
    else if (roundResults === 'computer wins'){ 
        roundResultsMessage.textContent = `${computerChoice} beats ${humanChoice}. Computer won this round!`;
    }
    else { 
        roundResultsMessage.textContent = `It's a tie! ${computerChoice} ties ${humanChoice}.`;

    }
}

function checkGameOver(humanScore,computerScore){ 
    let roundResultsMessage = document.querySelector("#roundResultMessage");

    if (humanScore >= 5) { 
        roundResultsMessage.textContent = 'You win the game! Press reset to play again.';
    }
    else if (computerScore >= 5) { 
        roundResultsMessage.textContent = 'The computer beat you! Press reset to play again.'; 

    }
}
//// Button Event Listeners 

rock_btn.addEventListener("click", () => { 
    alert("Rock button pressed");
    humanChoice = 'rock';
    computerChoice = getComputerChoice()
    roundResults = playRound(humanChoice, computerChoice);
    if (roundResults === 'user wins') { 
        humanScore +=1; 

    }
    else if (roundResults === 'computer wins') {
        computerScore +=1;
    }
    updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults);
    checkGameOver(humanScore, computerScore); 
    console.log(humanChoice);
    console.log(`Human Score: ${humanScore} Computer Score ${computerScore}`); 
}); 

 
paper_btn.addEventListener("click", () => { 
    alert("Paper button pressed");
    humanChoice = 'paper';
    computerChoice = getComputerChoice()
    roundResults = playRound(humanChoice, computerChoice);
    if (roundResults === 'user wins') { 
        humanScore +=1; 

    }
    else if (roundResults === 'computer wins'){
        computerScore +=1;
    }
    updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults);
    checkGameOver(humanScore, computerScore);
    console.log(humanChoice);
    console.log(`Human Score: ${humanScore} Computer Score ${computerScore}`); 
    
}); 

scissors_btn.addEventListener("click", () => { 
    alert("Scissors button pressed");
    humanChoice = 'scissors';
    computerChoice = getComputerChoice()
    roundResults = playRound(humanChoice, computerChoice);
    if (roundResults === 'user wins') { 
        humanScore +=1; 

    }
    else if (roundResults === 'computer wins'){
        computerScore +=1;
    }
    updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults);
    checkGameOver(humanScore, computerScore);
    console.log(humanChoice);
    console.log(`Human Score: ${humanScore} Computer Score ${computerScore}`); 
}); 


