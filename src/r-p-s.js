// get computer throw - generate 0, 1, or 2 and return that string in array
export function getRandomThrow() {
    return ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
}

// get match result - convert computerThrow to position in array to compare with win/draw/loss array per user input, -1 loss, 0 draw, 1 win
export function getMatchResult(userInput, cpuInput) {
    cpuInput = ['rock', 'paper', 'scissors'].indexOf(cpuInput);

    if (userInput === 'rock') {
        return [0, -1, 1][cpuInput];
    } else if (userInput === 'paper') {
        return [1, 0, -1][cpuInput];
    } else if (userInput === 'scissors') {
        return [-1, 1, 0][cpuInput];
    }
}