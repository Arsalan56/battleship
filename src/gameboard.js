/* eslint-disable no-param-reassign */
// import Ship from './ship';

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
        let add = 1;
        ships.push(ship);
        const currShip = ships[ships.indexOf(ship)];
        if (horizontalAxis) {
            for (let i = 0; i < currShip.getLength(); i++) {
                if (x - i - 1 < 0) {
                    board[y - 1][parseInt(x, 10) - 1 + add++] =
                        ships.indexOf(ship);
                } else {
                    board[y - 1][x - i - 1] = ships.indexOf(ship);
                }
            }
        } else {
            for (let i = 0; i < currShip.getLength(); i++) {
                if (parseInt(y, 10) + i > board.length) {
                    board[y - add++][x - 1] = ships.indexOf(ship);
                } else {
                    board[y - 1 + i][x - 1] = ships.indexOf(ship);
                }
            }
        }
    };

    // Highlight the place the ships would be placed on hover
    const previewPlace = (y, x, len) => {
        if (document.querySelector('.hovering')) {
            document.querySelector('.hovering').classList.remove('hovering');
        }
        document
            .querySelectorAll('.gameboard1>div>div')
            [parseInt(y, 10) * 10 + parseInt(x, 10) - 11].classList.add(
                'hovering'
            );
        let add = 1;

        const allPrevs = document.querySelectorAll('.preview');

        if (allPrevs.length > 0) {
            allPrevs.forEach((i) => {
                i.classList.remove('preview');
            });
        }
        if (horizontalAxis) {
            for (let i = 0; i < len; i++) {
                if (parseInt(x, 10) - 1 - i < 0) {
                    document
                        .querySelectorAll(`.gameboard1 > div > div`)
                        [
                            parseInt(y, 10) * 10 + parseInt(x, 10) - 11 + add++
                        ].classList.add('preview');
                } else {
                    document
                        .querySelectorAll(`.gameboard1 > div > div`)
                        [
                            parseInt(y, 10) * 10 + parseInt(x, 10) - 11 - i
                        ].classList.add('preview');
                }
            }
        } else {
            for (let i = 0; i < len; i++) {
                if (y - 1 + i > 9) {
                    document
                        .querySelectorAll(`.gameboard1 > div > div`)
                        [
                            parseInt(y, 10) * 10 +
                                parseInt(x, 10) -
                                11 -
                                add++ * 10
                        ].classList.add('preview');
                } else {
                    document
                        .querySelectorAll(`.gameboard1 > div > div`)
                        [
                            parseInt(y, 10) * 10 + parseInt(x, 10) - 11 + i * 10
                        ].classList.add('preview');
                }
            }
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
