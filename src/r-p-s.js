export function getRandomThrow() {
    const computerThrow = Math.ceil(Math.random() * 3);
    if (computerThrow === 1) return 'rock';
    else if (computerThrow === 2) return 'paper';
    else if (computerThrow === 3) return 'scissors';
}

export function checkResult(userInput, cpuInput) {
    const compare = ['rock', 'paper', 'scissors'].indexOf(cpuInput);

    // console.log(userInput);
    // console.log(cpuInput);

    if (userInput === 'rock') {
        return [0, -1, 1][compare];
    } else if (userInput === 'paper') {
        return [1, 0, -1][compare];
    } else if (userInput === 'scissors') {
        return [-1, 1, 0][compare];
    }
}

