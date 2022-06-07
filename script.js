('use strict');

let guestJanken = window.prompt('Please pick and type one out of rock, paper or scissors.');
guestJanken = guestJanken.toLowerCase();

let janken = ['rock','paper','scissors'];
let randJanken = janken[Math.floor(Math.random()*janken.length)];

console.log(guestJanken);
console.log(randJanken);

if(guestJanken === randJanken){
    console.log('Tie! Try again :)');
} else if(guestJanken==='rock' && randJanken === 'paper'){
    console.log('You lost! Paper beats rock. Try again :) ');
} else if(guestJanken==='rock' && randJanken ==='scissors'){
    console.log('You won! Rock beats scissors. Congratulations!:D');
} else if(guestJanken==='paper' && randJanken === 'rock'){
    console.log('You won! Paper beats rock. Congratulations!:D');
} else if(guestJanken==='paper' && randJanken ==='scissor'){
    console.log('You lost! Scissor beats paper. Try again :)');
} else if(guestJanken==='scissor' && randJanken === 'paper'){
    console.log('You won! Scissor beats paper. Congratulations!:D');
} else if(guestJanken==='scissor' && randJanken === 'rock'){
    console.log('You lost! Rock beats scissor. Try again :)');
}

