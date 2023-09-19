// 3x3 Board in console
const gameboard = (() => {
    const arr = [
        ['O','O','X'],
        ['X','X','O'],
        ['O','O','X']];
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
        btn1.textContent = '1-Player';
        let btn2 = document.createElement('button');
        btn2.textContent = '2-Player';
        btn1.id = '1-player';
        btn2.id = '2-player';
        container.append(btn1, btn2);
        btn1.setAttribute('onclick', 'displayController.remove(document.getElementById("2-player")), displayController.remove(this)');
        btn2.setAttribute('onclick', 'displayController.remove(document.getElementById("1-player")), displayController.remove(this)');
    }
    const board = () => {
        let container = document.getElementById('board-container');
        let div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('gameboard');
        for (let i=1; i<=9; i++) {
            let p = document.createElement('div');
            div.appendChild(p);
            p.id = 'square_' + `${i}`;
            if (i<7) {
                p.style.borderBottom = "10px solid white";
            }
            if (i%3 !== 0) {
                p.style.borderRight = "10px solid white";
            }
        }
        gameboard.build();
    }
    return {remove, playerSelect, board};
})();

