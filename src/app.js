import { getRandomThrow, checkResult } from './r-p-s.js';

// const rockSelect = document.getElementById('rock');
// const paperSelect = document.getElementById('rock');
// const scissorsSelect = document.getElementById('rock');
const submit = document.getElementById('rpssubmit');

submit.addEventListener('click', () => {
    const selection = document.getElementsByName('rpsinput');
    let roundResult;

    for (let i = 0; i < selection.length; i++) {
        if (selection[i].checked) {
            roundResult = checkResult(selection[i].value, getRandomThrow());
        }
    }

    if (roundResult === 1) {
        console.log('you win');
    } else if (roundResult === -1) {
        console.log('you lose');
    } else if (roundResult === 0) {
        console.log('you draw');
    }
    
});