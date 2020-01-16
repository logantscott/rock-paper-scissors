import { getRandomThrow, checkResult } from './r-p-s.js';

// const rockSelect = document.getElementById('rock');
// const paperSelect = document.getElementById('rock');
// const scissorsSelect = document.getElementById('rock');
const submit = document.getElementById('rpssubmit');

submit.addEventListener('click', () => {
    const selection = document.getElementsByName('rpsinput');
    for (let i = 0; i < selection.length; i++) {
        if (selection[i].checked) {
            checkResult(selection[i].value, getRandomThrow());
        }
    }
    
});