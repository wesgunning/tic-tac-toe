// 3x3 Board in console
const gameboard = (() => {
    const arr = [
        ['','',''],
        ['','',''],
        ['','','']];
    /* const rows = 3;
    const columns = 3;
    const build = () => {
        for (let i=0; i<rows; i++) {
            arr[i] = [];
            for (let j=0; j<columns; j++) {
                arr[i].push(' ');
            }
        }
        console.log(arr);
    }; */
    const rows = 3;
    const columns = 3;
    const build = () => {
        let k = 1;
        for (let i=0; i<rows; i++) {
            for (let j=0; j<columns; j++) {
                document.getElementById(`square_${k}`).textContent= arr[i][j];
                k++;
            }
        }
    };
    return {build};
})();

// Display
const displayController = (() => {
    const remove = (e) => {
        e.remove();
    }
    const playerSelect = () => {
        let container = document.getElementById('board-container');
        let btn1 = document.createElement('button');
        btn1.classList.add('animate__animated','animate__zoomIn');
        btn1.textContent = '1-Player';
        let btn2 = document.createElement('button');
        btn2.classList.add('animate__animated','animate__zoomIn');
        btn2.textContent = '2-Player';
        btn1.id = '1-player';
        btn2.id = '2-player';
        container.append(btn1, btn2);
        btn1.setAttribute('onclick', 'displayController.remove(document.getElementById("2-player")), displayController.remove(this)');
        btn2.setAttribute('onclick', 'displayController.remove(document.getElementById("1-player")), displayController.remove(this), displayController.markerSelect()');
    }
    const board = () => {
        let container = document.getElementById('board-container');
        container.classList.add('animate__animated','animate__zoomIn');
        let div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('gameboard');
        for (let i=1; i<=9; i++) {
            let p = document.createElement('div');
            div.appendChild(p);
            p.id = 'square_' + `${i}`;
            p.setAttribute('onclick', 'console.log(this.id), game.play(this)');
            if (i<7) {
                p.style.borderBottom = "10px solid white";
            }
            if (i%3 !== 0) {
                p.style.borderRight = "10px solid white";
            }
        }
        gameboard.build();
    }
    const markerSelect = () => {
        let container = document.getElementById('board-container');
        let choiceContainer = document.createElement('div');
        choiceContainer.id = 'choice-container';
        choiceContainer.classList.add('animate__animated','animate__zoomIn');
        container.append(choiceContainer);
        let choice = document.createElement('div');
        choice.id = 'choice';
        choice.innerText = 'Player 1: Choose your marker';
        choiceContainer.append(choice);
        let btnContainer = document.createElement('div');
        btnContainer.id = "btn-container";
        choiceContainer.append(btnContainer);
        let markerX = document.createElement('button');
        markerX.innerText = 'X';
        markerX.id = 'markerX';
        let markerO = document.createElement('button');
        markerO.innerText = 'O';
        markerO.id = 'markerO';
        btnContainer.append(markerX, markerO);
        markerX.setAttribute('onclick', 'player1.marker = this.innerText, player2.marker = document.getElementById("markerO").innerText, displayController.remove(document.getElementById("choice-container")), displayController.board()');
        markerO.setAttribute('onclick', 'player1.marker = this.innerText, player2.marker = document.getElementById("markerX").innerText, displayController.remove(document.getElementById("choice-container")), displayController.board()');
    }
    return {remove, playerSelect, board, markerSelect};
})();

// Players
const Player = (name, marker) => {
    return {name, marker};
}

const player1 = Player('player1');
const player2 = Player('player2');

// Gameplay
const game = (() => {
    let currentPlayer = player1;
    let turnNumber = 1;
    const play = ((e) => {
        console.log(currentPlayer);
        e.innerText = currentPlayer.marker;
        turnNumber ++;
        console.log(`turnNumber: ${turnNumber}`);
        // Check for winning conditions
        if (turnNumber > 4) {
            if (
                // Row1
                square_1.innerText != "" && square_1.innerText == square_2.innerText && square_2.innerText == square_3.innerText ||
                // Row2
                square_4.innerText != "" && square_4.innerText == square_5.innerText && square_5.innerText == square_6.innerText ||
                // Row 3
                square_7.innerText != "" && square_7.innerText == square_8.innerText && square_8.innerText == square_9.innerText ||
                // Column1
                square_1.innerText != "" && square_1.innerText == square_4.innerText && square_4.innerText == square_7.innerText ||
                // Column2
                square_2.innerText != "" && square_2.innerText == square_5.innerText && square_5.innerText == square_8.innerText ||
                // Column3
                square_3.innerText != "" && square_3.innerText == square_6.innerText && square_6.innerText == square_9.innerText ||
                // Diag top-left to bottom-right
                square_1.innerText != "" && square_1.innerText == square_5.innerText && square_5.innerText == square_9.innerText ||
                // Diag bottom-left to top-right
                square_7.innerText != "" && square_7.innerText == square_5.innerText && square_5.innerText == square_3.innerText
                ) {
                    console.log(currentPlayer.name + ' wins!');
            }
        }
        // Change turn
        if (currentPlayer == player1) {
            currentPlayer = player2;
        }
        else {
            currentPlayer = player1;
        }
    });
    return {play};
})();