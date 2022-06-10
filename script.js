('use strict');

let playerScore = 0;
let computerScore = 0;
let i = 0;


function game(){
       


       window.addEventListener('click',function(e){
            const playerSelection = (e.target).dataset.janken;
       
        console.log(playerSelection);

        const janken = ['rock','paper','scissors'];
        const computerSelection = janken[Math.floor(Math.random()*janken.length)];
       
        console.log(computerSelection);

        function playRound(playerSelection, computerSelection) {
    
            if(playerSelection===computerSelection){
                return `Tie! ${playerSelection} and ${computerSelection}. Try again :)`;
            } else if(playerSelection==='rock'&&computerSelection==='scissors'||playerSelection==='scissors'&&computerSelection==='paper'||playerSelection==='paper'&&computerSelection==='rock'){
                playerScore += 1;
                return `You won! ${playerSelection} beats ${computerSelection}. Congratulations!:D`;
            } else{
                computerScore += 1;
                return`You lost! ${playerSelection} is beaten by ${computerSelection}. Try again. :)`;
            }
        }
        
        i += 1;
      
        this.document.getElementById('message').textContent= `This is the ${i}th challenge. ${playRound(playerSelection,computerSelection)}. Your score is ${playerScore} and computer score is ${computerScore}.`;
        
    })
};

game()

