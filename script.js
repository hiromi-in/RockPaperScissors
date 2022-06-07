('use strict');

function game(){
    for (let i=0; i<5; i++){

const playerSelection = window.prompt('Please pick and type one out of rock, paper or scissors.').toLowerCase();

const janken = ['rock','paper','scissors'];
const computerSelection = janken[Math.floor(Math.random()*janken.length)];

    function playRound(playerSelection, computerSelection) {
        if(playerSelection===computerSelection){
            return 'Tie! Try again :)';
        } else if(playerSelection==='rock'&&computerSelection==='scissors'||playerSelection==='scissors'&&computerSelection==='paper'||playerSelection==='paper'&&computerSelection==='rock'){
            return `You won! ${playerSelection} beats ${computerSelection}. Congratulations!:D`;
        } else{
            return`You lost! ${playerSelection} is beaten by ${computerSelection}. Try again. :)`;
        }
    }
  return `This is the ${i}th challenge. ${console.log(playRound(playerSelection,computerSelection))}`
  }
}

console.log(game())


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

