const choice = {
    r: 0,
    p: 1,
    s: 2
}

let getComputerChoice = () => 
    Math.floor(Math.random()*3);


let playRound = (playerSelection, comSelection) => {

    if (playerSelection == comSelection) {
        return 2
    }

    else if (playerSelection == 0 && comSelection == 2) {
        return 1;
    }

    else if (playerSelection == 1 && comSelection == 0) {
        return 1;
    }

    else if (playerSelection == 2 && comSelection == 1) {
        return 1;
    }

    else {
        return 0;
    }
}


let decideWinner = (a, b) => {
    if (a > b) {
        return "Player Wins!"
    }
    else {
        return "Com Wins!"
    }
}


function playGame() {
    let playerWins = 0 
    let comWins = 0

    for (let i = 0; i < 3; i++) {

        const playerSelection = prompt("Choice: ")
        const comSelection = getComputerChoice()

        winner = playRound(choice[playerSelection], comSelection)
        switch(winner) {
            case 0: comWins += 1; break;
            case 1: playerWins += 1; break;
            default: 
            i--
                break;
        }
    }

    alert(decideWinner(playerWins, comWins))
}

playGame()