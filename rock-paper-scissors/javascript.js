let score = JSON.parse(localStorage.getItem('message')) || {
    Win: 0,
    Losses: 0,
    Tie: 0
};

updateScore();



function updateScore() {
    document.querySelector('.score-info')
        .innerHTML = (`Win: ${score.Win}. Lose: ${score.Losses}. Tie: ${score.Tie}`);
}

function playGame(playerMove) {

    const computerMove = getComputerMove();

    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lose';
        } else if (computerMove === 'Scissors') {
            result = 'You Win';
        }
    }
    else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You Lose';
        }
    }
    else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose';
        } else if (computerMove === 'Paper') {
            result = 'You Win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    if (result === 'You Win') {
        score.Win += 1;
    }
    else if (result === 'You Lose') {
        score.Losses += 1;
    }
    else if (result === 'Tie') {
        score.Tie += 1;
    }

    localStorage.setItem('message', JSON.stringify(score));

    updateScore();

    document.querySelector('.result-info').innerHTML = result;

    document.querySelector('.move-info').innerHTML = `You <img src="${playerMove}-emoji.png" class="emoji">  
<img src="${computerMove}-emoji.png" class="emoji"> Computer`;

}


function getComputerMove() {

    const randomNum = Math.random();

    let computerMove = '';

    if (0 < randomNum && randomNum < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (1 / 3 < randomNum && randomNum < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (2 / 3 < randomNum && randomNum < 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}