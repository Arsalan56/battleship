/* eslint-disable no-param-reassign */
export default function Gameboard(h, w) {
    const board = [];

    const getBoard = () => board;

    for (let i = 0; i < h; i++) {
        board.push([]);
    }
    board.forEach((i) => {
        for (let j = 0; j < w; j++) {
            i[j] = false;
        }
    });

    const place = (x, y, len) => {
        let negative = 2;
        for (let i = 0; i < len; i++) {
            if (y + i > board[x].length) {
                board[x - 1][y - negative++] = true;
            } else {
                board[x - 1][y + i - 1] = true;
            }
        }
    };
    return { getBoard, place };
}
