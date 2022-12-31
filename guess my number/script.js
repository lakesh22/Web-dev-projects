'use strict';
let guess = Math.trunc(Math.random()*20)+1;
//document.querySelector(".number").textContent = guess;
let score = 20;
let h=0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };

document.querySelector('.check').addEventListener('click',function(){
    let value = Number(document.querySelector('.guess').value);
    if(value==guess) {displayMessage('🎉 Correct answer');
    document.querySelector('.number').textContent = guess;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    if(score>h) {
        h=score;
        document.querySelector('.highscore').textContent=h;}
}
    else if(value<guess) {
        displayMessage('too low');
        score--;
    }
    else if(value>guess) {
        displayMessage('too high');
        score--;
}
    else  displayMessage('No number entered');
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    guess = Math.trunc(Math.random()*20)+1;
  
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
