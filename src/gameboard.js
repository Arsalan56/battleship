/* eslint-disable no-param-reassign */
export default function Gameboard(h, w) {
    const board = [];

    const getBoard = () => board;

    // Store the game board in an array
    for (let i = 0; i < h; i++) {
        board.push([]);
    }
    board.forEach((i) => {
        for (let j = 0; j < w; j++) {
            i[j] = false;
        }
    });

    // Place a ship at (x, y) with a length of len
    const place = (y, x, len) => {
        let negative = 2;
        for (let i = 0; i < len; i++) {
            if (x + i > board[y].length) {
                board[y - 1][x - negative++] = true;
            } else {
                board[y - 1][x + i - 1] = true;
            }
        }
    };

    // Check for whether the attack on (x, y) hit the ship
    const receiveAttack = (y, x) => board[y - 1][x - 1];
    return { getBoard, place, receiveAttack };
}
