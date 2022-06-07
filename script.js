('use strict');

let guestJanken = window.prompt('Please pick and type one out of rock, paper or scissors.');

let janken = ['rock','paper','scissors'];
let randJanken = janken[Math.floor(Math.random()*janken.length)];

console.log(guestJanken);
console.log(randJanken);