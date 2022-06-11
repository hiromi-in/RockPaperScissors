('use strict');

let playerScore = 0;
let computerScore = 0;
let i = 0;

function gameOver(){
    if (playerScore===5){
        document.getElementById('h2').textContent= 'You did it!! You beat the machine!';
    } else if (computerScore===5){
        document.getElementById('h2').textContent= 'Computer got you this time. Try it again!';
    };
    playerScore = 0;
    computerScore = 0;   
    i = 0;
}

function game(){

       window.addEventListener('click',function(e){

            document.getElementById('h2').textContent = 'Please click one!';

            const playerSelection = (e.target).dataset.janken;
    
            const janken = ['rock','paper','scissors'];
            const computerSelection = janken[Math.floor(Math.random()*janken.length)];
    
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
            
            if (playerScore===5 || computerScore ===5){
            gameOver();
             
            };
        });
   

}

game();

