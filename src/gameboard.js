/* eslint-disable no-param-reassign */
// import Ship from './ship';

import ToInt16 from 'es-abstract/2015/ToInt16';

export default function Gameboard(h, w) {
    const board = [];
    const ships = [];
    let horizontalAxis = true;
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
        if (horizontalAxis) {
            for (let i = 0; i < currShip.getLength(); i++) {
                if (x + i > board[y - 1].length) {
                    board[y - 1][x - negative++] = ships.indexOf(ship);
                } else {
                    board[y - 1][x + i - 1] = ships.indexOf(ship);
                }
            }
        } else {
            for (let i = 0; i < currShip.getLength(); i++) {
                if (y + i > board.length) {
                    board[y - negative++][x - 1] = ships.indexOf(ship);
                } else {
                    board[y + i - 1][x - 1] = ships.indexOf(ship);
                }
            }
        }
    };

    const previewPlace = (y, x, len) => {
        let add = 1;

        if (horizontalAxis) {
            for (let i = 0; i < len; i++) {
                // console.log(x);
                if (parseInt(x, 10) - 1 - i < 0) {
                    document.querySelectorAll(`.gameboard1 > div > div`)[
                        parseInt(y, 10) * 10 + parseInt(x, 10) - 11 + add++
                    ].style.background = 'green';
                } else {
                    document.querySelectorAll(`.gameboard1 > div > div`)[
                        parseInt(y, 10) * 10 + parseInt(x, 10) - 11 - i
                    ].style.background = 'green';
                }
            }
        } else {
            // for (let i = 0; i < len; i++) {
            //     if (y + i > board.length) {
            //         board[y - negative++][x - 1] = ships.indexOf(ship);
            //     } else {
            //         board[y + i - 1][x - 1] = ships.indexOf(ship);
            //     }
            // }
        }
    };
    // Change the axis in which ships are placed. Either horizontal (true) or vertical(false)
    const changeAxis = () => {
        horizontalAxis = !horizontalAxis;
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
    return {
        getBoard,
        place,
        receiveAttack,
        attackHistory,
        allSunk,
        changeAxis,
        previewPlace,
    };
}
