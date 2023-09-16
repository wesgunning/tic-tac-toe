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
                console.log(arr[i][j]);
                k++;
            }
        }
    };
    return {arr, build};
})();

