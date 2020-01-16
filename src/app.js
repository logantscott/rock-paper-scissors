import { getRandomThrow, checkResult } from './r-p-s.js';

// declare DOM elements in use
const submit = document.getElementById('rpssubmit');
const matchResults = document.getElementById('matchresults');
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
    matchResult = getMatchResult()

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
    updateCounter();
    updateMatchResults(msg);
    
});

// update current win/loss/draw total
function updateCounter() {
    wins.textContent = winCounter;
    losses.textContent = lossCounter;
    draws.textContent = drawCounter;
}

// update match result message
function updateMatchResults(msg) {
    matchResults.textContent = `You throw ${userThrow}. Computer throws ${computerThrow}. You ${msg}!`;
}

// get match results from import function
function getMatchResult() {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            userThrow = radioButtons[i].value;
            computerThrow = getRandomThrow();
            return checkResult(userThrow, computerThrow);
        }
    }
}