import { getRandomThrow, getMatchResult } from './r-p-s.js';

// declare DOM elements in use
const submit = document.getElementById('rpssubmit');
const matchResultMessage = document.getElementById('matchresultmessage');
const wins = document.getElementById('wins');
const losses = document.getElementById('losses');
const draws = document.getElementById('draws');
const radioButtons = document.getElementsByName('rpsinput');

// declare and initialize counter state
let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

// declare variables changing later
let userThrow;
let computerThrow;
let matchResult;
let msg;

// add event listener to play button
submit.addEventListener('click', () => {

    // get match result
    matchResult = playRockPaperScissors();

    // update variables used to update DOM
    if (matchResult === 1) {
        winCounter++;
        msg = 'WIN';
    } else if (matchResult === -1) {
        lossCounter++;
        msg = 'LOSE';
    } else if (matchResult === 0) {
        drawCounter++;
        msg = 'DRAW';
    }

    // update the DOM
    updateMatchResult(msg);
    
});

// set throws to variables for match result message and get match result from import function
function playRockPaperScissors() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            userThrow = radioButtons[i].value;
            computerThrow = getRandomThrow();
            return getMatchResult(userThrow, computerThrow);
        }
    }
}

// update match result message and win/loss/draw counter
function updateMatchResult(msg) {
    wins.textContent = winCounter;
    losses.textContent = lossCounter;
    draws.textContent = drawCounter;
    matchResultMessage.textContent = `You throw ${userThrow}. Computer throws ${computerThrow}. You ${msg}!`;
}