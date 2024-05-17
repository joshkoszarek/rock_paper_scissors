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

//console.log(getComputerChoice()); 


function getHumanChoice() { 
    let humanChoice = prompt("Enter Rock, Paper, or Scissors"); 
    humanChoice = humanChoice.toLowerCase(); 
    return humanChoice; 
}
//console.log(getHumanChoice()); 

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

console.log(playRound(getHumanChoice(), getComputerChoice()));
