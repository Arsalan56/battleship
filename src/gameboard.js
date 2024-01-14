/* eslint-disable no-param-reassign */
export default function Gameboard(h, w) {
    const board = [];
    for (let i = 0; i < h; i++) {
        board.push([]);
    }
    board.forEach((i) => {
        for (let j = 0; j < w; j++) {
            i[j] = false;
        }
    });
    const getBoard = () => board;
    return { getBoard };
}
