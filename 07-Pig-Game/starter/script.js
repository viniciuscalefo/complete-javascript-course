'use strict';

//Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const diceImage = document.querySelector('.dice');

const scores = [0, 0];
let currentScore = 0;
let activePalyer = 0;
let playing = true;
//Start Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

function changePlayer() {
  document.getElementById(`current--${activePalyer}`).textContent = 0;
  activePalyer = activePalyer === 0 ? 1 : 0;
  currentScore = 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

function rollDice() {
  if (playing) {
    let number = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceImage.src = `dice-${number}.png`;

    if (number !== 1) {
      currentScore += number;
      document.getElementById(`current--${activePalyer}`).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
}
btnRollDice.addEventListener('click', rollDice);

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePalyer] += currentScore;
    document.getElementById(`score--${activePalyer}`).textContent =
      scores[activePalyer];

    if (scores[activePalyer] >= 10) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePalyer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePalyer}`)
        .classList.remove('player--winner');
    } else {
      changePlayer();
    }
  }
});
