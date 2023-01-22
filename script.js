'use strict';
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const dice = document.querySelector('.dice');

let currentSco = 0;
let play = true;
let activePlayer = 0
let score = [0,0]

document.querySelector('.dice').style.display = 'none';

btnRoll.addEventListener('click', function () {
    if(play) {
  const randomDice = Math.floor(Math.random() * 6) + 1;
  dice.src = `dice${randomDice}.png`;

  document.querySelector('.dice').style.display = 'block';

  if (randomDice !== 1) {
    document.querySelector(`#current--${activePlayer}`).textContent = currentSco += randomDice;
  } else {
    
    switchPlayer ()
    
  }
}
});

function switchPlayer () {
   
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
      currentSco = 0;
      activePlayer = activePlayer === 0 ? 1 : 0;

      player0.classList.toggle('player--active');
      player1.classList.toggle('player--active');
}

btnHold.addEventListener('click', function () { 
    if(play) {
    
    score[activePlayer] += currentSco;
    document.querySelector(`#score--${activePlayer}`).textContent =
    score[activePlayer];
   
   if (score[activePlayer] >= 100) {
      play = false;
      dice.style.display = 'none';

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }

})


btnNew.addEventListener('click', function () {
  document.querySelector('#current--0').innerText = 0;
  document.querySelector('#current--1').innerText = 0;
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('#score--0').innerText = 0;
  document.querySelector('#score--1').innerText = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');

  score = [0,0];
  currentSco = 0;
  activePlayer = 0;
  play = true;
});


