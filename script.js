

let humanScore = 0; 
let computerScore = 0; 
let humanChoice = ''; 
let roundResults = '';
const rock_btn = document.querySelector("#rock-btn");
const paper_btn = document.querySelector("#paper-btn");
const scissors_btn = document.querySelector("#scissors-btn"); 
const reset_btn = document.querySelector('#reset-btn');


/// major functions for game play 

function getComputerChoice(){ // grabs a random choice of rock, paper, or scissors
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


function playRound(humanChoice, computerChoice){  // the logic behind a rock paper scissors game
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

function updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults) { // Takes all the logic being computed and displays it to the user
    let currentComputerChoice = document.querySelector(".current-computer-choice"); 
    currentComputerChoice.textContent = `${capitalizeFirstLetter(computerChoice)}`; 
    let currentComputerScore = document.querySelector("#currentComputerScore"); 
    currentComputerScore.textContent = `${computerScore}`; 
    let currentUserScore = document.querySelector("#currentUserScore"); 
    currentUserScore.textContent = `${humanScore}`; 
    let roundResultsMessage = document.querySelector("#roundResultMessage"); 
    if (roundResults === 'user wins'){ 
        roundResultsMessage.textContent = `${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}. You won this round!`; 

    }
    else if (roundResults === 'computer wins'){ 
        roundResultsMessage.textContent = `${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}. Computer won this round!`;
    }
    else { 
        roundResultsMessage.textContent = `It's a tie! ${capitalizeFirstLetter(computerChoice)} ties ${humanChoice}.`;

    }
}

function checkGameOver(humanScore,computerScore){ // How a winner is declared 
    let roundResultsMessage = document.querySelector("#roundResultMessage"); 

    if (humanScore >= 5) { 
        roundResultsMessage.textContent = 'You win the game! Press reset to play again.';
    }
    else if (computerScore >= 5) { 
        roundResultsMessage.textContent = 'The computer beat you! Press reset to play again.'; 

    }
}

function capitalizeFirstLetter(word){ // Allows messages to be printed with correct capitalization
    let arrayOfLetters = word.split(''); 
    arrayOfLetters[0] = arrayOfLetters[0].toUpperCase(); 
    let capitalizedWord = arrayOfLetters.join(''); 
    return capitalizedWord

}


//// Button Event Listeners 

rock_btn.addEventListener("click", () => { // A round is able to be played when pressing the rock button
    
    humanChoice = 'rock';
    computerChoice = getComputerChoice()
    if (humanScore < 5 && computerScore < 5){
        roundResults = playRound(humanChoice, computerChoice);
        if (roundResults === 'user wins') { 
            humanScore +=1; 

        }
        else if (roundResults === 'computer wins') {
            computerScore +=1;
        }
        updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults);
        checkGameOver(humanScore, computerScore);

    }
    
   
}); 

 
paper_btn.addEventListener("click", () => { // A round is able to be played when pressing the paper button
    
    humanChoice = 'paper';
    computerChoice = getComputerChoice()
    if (humanScore < 5 && computerScore < 5) { 
        roundResults = playRound(humanChoice, computerChoice);
        if (roundResults === 'user wins') { 
            humanScore +=1; 

        }
        else if (roundResults === 'computer wins'){
            computerScore +=1;
        }
        updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults);
        checkGameOver(humanScore, computerScore);

    }
    
}); 

scissors_btn.addEventListener("click", () => { // A round is able to be played when pressing the scissor button
    
    humanChoice = 'scissors';
    computerChoice = getComputerChoice()
    if (humanScore < 5 && computerScore < 5) { 
        roundResults = playRound(humanChoice, computerChoice);
        if (roundResults === 'user wins') { 
            humanScore +=1; 

        }
        else if (roundResults === 'computer wins'){
            computerScore +=1;
        }
        updateDisplay(computerScore, humanScore, computerChoice, humanChoice, roundResults);
        checkGameOver(humanScore, computerScore);
        
    }
  
}); 

reset_btn.addEventListener("click", () => {  // Allows the user to reset the game
    humanScore = 0; 
    computerScore = 0; 
    let currentComputerScore = document.querySelector('#currentComputerScore'); 
    let currentUserScore = document.querySelector('#currentUserScore'); 
    let roundResultsMessage = document.querySelector('#roundResultMessage'); 
    let computerChoice = document.querySelector('.current-computer-choice'); 
    currentComputerScore.textContent = '0'; 
    currentUserScore.textContent = '0'; 
    roundResultsMessage.textContent = ''; 
    computerChoice.textContent = '';
})


