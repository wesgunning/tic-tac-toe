// 3x3 Board in console
const gameBoard = (() => {
    const arr = [];
    const rows = 3;
    const columns = 3;
    const build = () => {
        for (let i=0; i<rows; i++) {
            arr[i] = [];
            for (let j=0; j<columns; j++) {
                arr[i].push(' ');
            }
        }
        console.log(arr);
    };
    return {build};
})();