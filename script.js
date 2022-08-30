('use strict');

var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 2000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#fff',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#bbb',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '-30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#fff',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});



bar.animate(1.0, function(){
    $("splash_text").fadeOut(10);
    $(".loader_cover-up").addClass("coveranime");
    $(".loader_cover-down").addClass("coveranime");
    $("#splash").fadeOut();
    $("#container").fadeIn();
})



let playerScore = 0;
let computerScore = 0;
//let i = 0;
document.getElementById('y_point').textContent = playerScore;
document.getElementById('c_point').textContent = computerScore;
const BtnReset = `<p><button id='reset'>Reset</button></p>`;


function gameOver(){
    if (playerScore===5){
        document.getElementById('message').textContent= 'You did it!! You beat the machine!';
        document.getElementById('message').insertAdjacentHTML('beforeend',BtnReset);
    } else if (computerScore===5){
        document.getElementById('message').textContent= 'Computer got you this time. Try it again!';
        document.getElementById('message').insertAdjacentHTML('beforeend',BtnReset);    
    };
        
}

function reset(){
    document.getElementById('reset').onclick = function(){
    playerScore = 0;
    computerScore = 0;
    i = 0;
    document.getElementById('y_point').textContent = playerScore;
    document.getElementById('c_point').textContent = computerScore;
    };
};


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
                    
                }  else if (playerSelection==='rock'&&computerSelection==='paper'||playerSelection==='scissors'&&computerSelection==='rock'||playerSelection==='paper'&&computerSelection==='scissors'){
                    computerScore += 1;
                    document.getElementById('c_point').textContent = computerScore;
                    return`You lost! ${playerSelection} is beaten by ${computerSelection}. Try again. :)`;

                } else {
                    return `Rock, paper or scissors? Please pick your cat!`
                }
            }
            //i += 1;
            this.document.getElementById('message').textContent= `${playRound(playerSelection,computerSelection)}`;
            
            if (playerScore===5 || computerScore ===5){
            gameOver();
            reset();
            };
              
        });
   

}


game();
