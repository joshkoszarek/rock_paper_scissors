//console.log("Hey there")

function getComputerChoice(){ 
    let numberChoice = Math.floor(Math.random() * 3) + 1;
    //console.log(numberChoice);
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
    console.log(humanChoice);
    console.log(`Human Score: ${humanScore} Computer Score ${computerScore}`); 
}); 


/*

if (humanChoice != '') { 
    roundResults = playRound(humanChoice, getComputerChoice());
    if (roundResults == 'user wins') { 
        humanScore +=1; 

    }
    else if (roundResults == 'computer wins')
        computerScore +=1;

}
*/



/*
while (humanScore < 5 || computerScore < 5 ) { 
    console.log('forever');
    // Grabs user input from the buttons 
     
    rock_btn.addEventListener("click", () => { 
        alert("Rock button pressed");
        humanChoice = 'rock';
        console.log(humanChoice)
    }); 

     
    paper_btn.addEventListener("click", () => { 
        alert("Paper button pressed");
        humanChoice = 'paper';
        console.log(humanChoice)
    }); 

    scissors_btn.addEventListener("click", () => { 
        alert("Scissors button pressed");
        humanChoice = 'scissors';
        console.log(humanChoice)
    }); 
    /// 
    if (humanChoice != '') { 
        let roundResults = playRound(humanChoice, getComputerChoice());
        if (roundResults == 'user wins') { 
            humanScore +=1; 
        }
        else if (roundResults == 'computer wins')
            computerScore +=1;

    }
    humanChoice = false; 


}

if (humanScore == 5) { 
    console.log('human wins')
}
else { 
    console.log('computer wins')
}
*/


//Paper button event listener 
/*
const paper_btn = document.querySelector("#paper-btn"); 
paper_btn.addEventListener("click", alertMe('paper btn pressed'));

//Scissor button event listener 

const scissors_btn = document.querySelector("#scissors-btn"); 
scissors_btn.addEventListener("click", alertMe('scissors btn pressed'));

*/ 


//console.log(getHumanChoice()); 


//console.log(playRound(getHumanChoice(), getComputerChoice()));

/*
function playGame(){ 
    let humanScore = 0; 
    let computerScore = 0; 

    function playRound(humanChoice, computerChoice){ 
        if (humanChoice === 'rock' && computerChoice === 'paper'){ 
            computerScore += 1; 
            console.log(`You lose! ${computerChoice} beats rock.`); 
        }
        else if (humanChoice === 'paper' && computerChoice === 'scissors'){ 
            computerScore += 1; 
            console.log(`You lose! ${computerChoice} beats paper.`); 
        }
        else if (humanChoice === 'scissors' && computerChoice === 'rock'){ 
            computerScore += 1; 
            console.log(`You lose! ${computerChoice} beats scissors.`); 
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper'){ 
            humanScore += 1; 
            console.log(`Computer loses! Scissors beats ${computerChoice}.`); 
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors'){ 
            humanScore += 1; 
            console.log(`Computer loses! Rock beats ${computerChoice}.`); 
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock'){ 
            humanScore += 1; 
            console.log(`Computer loses! Paper beats ${computerChoice}.`); 
        }
        else 
            console.log('Tie. No Score.');
    }
    
    //playRound(getHumanChoice(), getComputerChoice()); 
    //playRound(getHumanChoice(), getComputerChoice()); 
    //playRound(getHumanChoice(), getComputerChoice()); 
    //playRound(getHumanChoice(), getComputerChoice()); 
    //playRound(getHumanChoice(), getComputerChoice()); 
     
    if (humanScore > computerScore) { 
     return 'You win!';  
    }
    else if (humanScore < computerScore) { 
        return 'You lose. Computer Wins.';
    }
    else 
        return 'Tie'; 
}
*/ 
//console.log(playGame());

/*
function getHumanChoice() { 
    let humanChoice = prompt("Enter Rock, Paper, or Scissors"); 
    humanChoice = humanChoice.toLowerCase(); 
    return humanChoice; 
}
*/ 