('use strict');

let playerScore = 0;
let computerScore = 0;
let i = 0;
document.getElementById('y_point').textContent = playerScore;
document.getElementById('c_point').textContent = computerScore;
let BtnReset = `<p><button id='reset'>Reset</button></p>`

function gameOver(){
    if (playerScore===5){
        document.getElementById('message').textContent= 'You did it!! You beat the machine!';
        document.getElementById('message').insertAdjacentHTML('beforeend',BtnReset);
    } else if (computerScore===5){
        document.getElementById('message').textContent= 'Computer got you this time. Try it again!';
        document.getElementById('message').insertAdjacentHTML('beforeend',BtnReset);    
    };
        
}

//function reset(){
//    if(window.confirm('Would you like to try again?')){
//    playerScore = 0;
//    computerScore = 0;   
//    i = 0;
//    document.getElementById('y_point').textContent = playerScore;
//    document.getElementById('c_point').textContent = computerScore;
//    };
//};


function game(){

      
       window.addEventListener('click',function(e){

            const playerSelection = (e.target).dataset.janken;
    
            const janken = ['rock','paper','scissors'];
            const computerSelection = janken[Math.floor(Math.random()*janken.length)];
    
            function playRound(playerSelection, computerSelection) {
        
                if(playerSelection===computerSelection){
                    return `Tie! ${playerSelection} and ${computerSelection}. Try again :)`;
                } else if(playerSelection==='rock'&&computerSelection==='scissors'||playerSelection==='scissors'&&computerSelection==='paper'||playerSelection==='paper'&&computerSelection==='rock'){
                    playerScore += 1;
                    document.getElementById('y_point').textContent = playerScore;
                    return `You won! ${playerSelection} beats ${computerSelection}. Congratulations!:D`;
                } else{
                    computerScore += 1;
                    document.getElementById('c_point').textContent = computerScore;
                    return`You lost! ${playerSelection} is beaten by ${computerSelection}. Try again. :)`;
                }
            }
            i += 1;
            this.document.getElementById('message').textContent= `This is the ${i}th challenge. ${playRound(playerSelection,computerSelection)}.`;
            
            if (playerScore===5 || computerScore ===5){
            gameOver();
            //reset();
            };
              
        });
   

}

game();