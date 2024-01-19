/* eslint-disable no-param-reassign */
export default function Gameboard(h, w) {
    const board = [];
    const ships = [];
    const getBoard = () => board;
    const allAttacks = [];

    // Store the game board in an array
    for (let i = 0; i < h; i++) {
        board.push([]);
    }
    board.forEach((i) => {
        for (let j = 0; j < w; j++) {
            i[j] = false;
        }
    });

    // Place a ship at (x, y)
    const place = (y, x, ship) => {
        let negative = 2;
        ships.push(ship);
        const currShip = ships[ships.indexOf(ship)];
        for (let i = 0; i < currShip.getLength(); i++) {
            if (x + i > board[y].length) {
                board[y - 1][x - negative++] = ships.indexOf(ship);
            } else {
                board[y - 1][x + i - 1] = ships.indexOf(ship);
            }
        }
    };

    // Receive an attack and increment or store the location accordingly
    const receiveAttack = (y, x) => {
        const grid = board[y - 1][x - 1];
        if (typeof grid === 'number' && grid >= 0) {
            ships[grid].hit();
        }
        allAttacks.push([y - 1, x - 1]);
    };
    // Return an array of missed attacks
    const attackHistory = () => allAttacks;
    // Check if all ships are sunk
    const allSunk = () => ships.every((i) => i.isSunk());
    return { getBoard, place, receiveAttack, attackHistory, allSunk };
}
