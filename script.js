



function playGame() {
    function getComputerChoice() {
        //choice between 1 and 3
        choice = Math.floor(Math.random() * 3 + 1);
    
        if (choice == 1) {
            return "rock"
        } else if (choice == 2) {
            return "paper"
        } else if (choice == 3) {
            return "scissors"
        }
    }
    
    function getHumanChoice() {
        let choice = prompt("enter an option (rock, paper, or scissors):")
        if (choice.toLowerCase() == "rock" || choice.toLowerCase() == "scissors" || choice.toLowerCase() == "paper") {
            return choice.toLowerCase()
        } 
        else {
            console.log('invalid choice, please try again')
            while (true) {
                let choice = prompt("Please try again, enter an option (rock, paper, or scissors):")
                if (choice.toLowerCase() == "rock" || choice.toLowerCase()== "scissors" || choice.toLowerCase() == "paper") {
                    return choice.toLowerCase()
                } else {
                    console.log('invalid choice, please try again')
                }
        
            }
        }
        
    }
    

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return `Tie: ${humanChoice} ties ${computerChoice}`
        } 
        else if ((humanChoice == 'rock' && computerChoice == 'scissors') || (humanChoice == 'scissors' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock')) {
            humanScore++;
            return `Win: ${humanChoice} beats ${computerChoice}`
        } else {
            computerScore++;
            return `Lose: ${computerChoice} beats ${humanChoice}`
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }

    if (humanScore > computerScore) {
        console.log(`Congrats, you won ${humanScore} to ${computerScore}`)
    } else if (humanScore == computerScore) {
        console.log(`You tied ${humanScore} to ${computerScore}`)
    } else {
        console.log(`You lost ${computerScore} to ${humanScore}`)
    }


}

playGame()
