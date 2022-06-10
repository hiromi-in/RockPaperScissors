('use strict');

let playerScore = 0;
let computerScore = 0;
let i = 0;

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

function game(){
    while(playerScore < 5 && computerScore < 5){

        //const playerSelection = window.prompt('Please pick and type one out of rock, paper or scissors.').toLowerCase();
       const playerSelection = window.addEventListener('click',function(e){
            const playerSelection = e.target;
            playerSelection = playerSelection.dataset.janken;
            return playerSelection 
        }
        )

        const janken = ['rock','paper','scissors'];
        const computerSelection = janken[Math.floor(Math.random()*janken.length)];
       
        playRound(playerSelection,computerSelection)
        
        i += 1;
        
        console.log( `This is the ${i}th challenge. ${playRound(playerSelection,computerSelection)}. Your score is ${playerScore} and computer score is ${computerScore}.`)
        //return `This is the ${i}th challenge. ${playRound(playerSelection,computerSelection)}. Your score is ${playerScore} and computer score is ${computerScore}.`;
        
    }
}

game()

//if(guestJanken === randJanken){
//    console.log('Tie! Try again :)');
//} else if(guestJanken==='rock' && randJanken === 'paper'){
//    console.log('You lost! Paper beats rock. Try again :) ');
//} else if(guestJanken==='rock' && randJanken ==='scissors'){
//    console.log('You won! Rock beats scissors. Congratulations!:D');
//} else if(guestJanken==='paper' && randJanken === 'rock'){
//    console.log('You won! Paper beats rock. Congratulations!:D');
//} else if(guestJanken==='paper' && randJanken ==='scissor'){
//    console.log('You lost! Scissor beats paper. Try again :)');
//} else if(guestJanken==='scissor' && randJanken === 'paper'){
//    console.log('You won! Scissor beats paper. Congratulations!:D');
//} else if(guestJanken==='scissor' && randJanken === 'rock'){
//    console.log('You lost! Rock beats scissor. Try again :)');
//}

