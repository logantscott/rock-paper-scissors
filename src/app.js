import { getRandomThrow, getMatchResult } from './r-p-s.js';

// declare DOM elements in use
const submit = document.getElementById('rpssubmit');
const matchResultMessage = document.getElementById('matchresultmessage');
const winTotal = document.getElementById('wins');
const lossTotal = document.getElementById('losses');
const drawTotal = document.getElementById('draws');
const radioButtons = document.getElementsByName('rpsinput');
const radioLabels = document.getElementsByTagName('label');
const userThrowImage = document.getElementById('userthrowimage');
const computerThrowImage = document.getElementById('computerthrowimage');

// declare and initialize counter state
let winCounter = 0;
let lossCounter = 0;
let drawCounter = 0;

// declare variables changing later
let userThrow; // 'rock', 'paper', 'scissors'
let computerThrow; // 'rock', 'paper', 'scissors'
let matchResult; // 0, 1, -1 for draw, win, loss
let msg; // 'WIN', 'LOSE', 'DRAW'

// add event listener to play button
submit.addEventListener('click', () => {
    // get match result
    matchResult = playRockPaperScissors();

    // update counter total and result message to pass to DOM
    processResult();

    // update the DOM with counter and message
    updateMatchResult();
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

// update variables to pass to DOM updates
function processResult() {
    if (matchResult === 1) {
        winCounter++;
        return msg = 'WIN';
    } else if (matchResult === -1) {
        lossCounter++;
        return msg = 'LOSE';
    } else if (matchResult === 0) {
        drawCounter++;
        return msg = 'DRAW';
    }
}

// update match result message and win/loss/draw counter
function updateMatchResult() {
    matchResultMessage.className = '';
    winTotal.textContent = winCounter;
    lossTotal.textContent = lossCounter;
    drawTotal.textContent = drawCounter;
    userThrowImage.src = 'img/' + userThrow + '.png';
    computerThrowImage.src = 'img/' + computerThrow + '.png';
    matchResultMessage.textContent = `You throw ${userThrow}. Computer throws ${computerThrow}. You ${msg}!`;
    matchResultMessage.className = msg;
}


// add styling to labels to make them radio-buttonish
for (let i = 0; i < radioLabels.length; i++) {
    radioLabels[i].addEventListener('click', function(e) {
        clearLabelStyles();
        e.currentTarget.classList.add('test');
    
    });
}

// remove styling from labels to make them radio-buttonish
function clearLabelStyles() {
    for (let i = 0; i < radioLabels.length; i++) {
        radioLabels[i].classList.remove('test');
    }
}