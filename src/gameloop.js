import Gameboard from './gameboard';
import Ship from './ship';

export default function Game() {
    let mainBoard;
    const oppBoard = Gameboard(10, 10);
    const allBoxes = document.querySelectorAll('.gameboard2 > div > div');

    const main = () => {
        let gameOn = true;
        while (gameOn) {
            if (oppBoard.allSunk() || mainBoard.allSunk()) {
                gameOn = false;
            }
        }
    };

    const randomInt = (max) => Math.floor(Math.random() * max);

    const showOppBoard = () => {
        const ob = oppBoard.getBoard();
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (ob[i][j] !== false) {
                    // Add the two numbers together by string
                    allBoxes[i * 10 + j].classList.add('placed');
                }
            }
        }
    };

    const checkValid = (y, x, len) => {
        const otherBoard = oppBoard.getBoard();
        let add = 1;
        let subt = 2;
        const horizontalAxis = oppBoard.getAxis();
        const preview = [];
        if (horizontalAxis) {
            for (let i = 0; i < Math.floor(len); i++) {
                if (x - i - 1 < 0) {
                    preview.push(
                        otherBoard[y - 1][parseInt(x, 10) - 1 + add++]
                    );
                } else {
                    preview.push(otherBoard[y - 1][x - i - 1]);
                }
            }
        } else {
            for (let i = 0; i < Math.floor(len); i++) {
                if (parseInt(y, 10) + i > 9) {
                    preview.push(otherBoard[y - subt++][x - 1]);
                } else {
                    preview.push(otherBoard[y - 1 + i][x - 1]);
                }
            }
        }
        return preview.every((i) => i === false);
    };

    const randomBoard = (size) => {
        if (size < 2) {
            return;
        }
        if (randomInt(2) === 0) {
            oppBoard.changeAxis();
        }

        // Implement new code here:
        // If position is valid, then place. Otherwise, loop until
        // a valid location is generated
        let posY = randomInt(10) + 1;
        let posX = randomInt(10) + 1;

        while (!checkValid(posY, posX, size)) {
            posY = randomInt(10) + 1;
            posX = randomInt(10) + 1;
        }
        // if (!checkValid(posY, posX, size)) {
        //     posY = randomInt(10) + 1;
        //     posX = randomInt(10) + 1;
        // }

        oppBoard.place(posY, posX, Ship(Math.floor(size)));
        if (size === 4 || size === 3.5) {
            randomBoard(size - 0.5);
        } else {
            randomBoard(size - 1);
        }
    };

    const start = (gb) => {
        mainBoard = gb;
        // Make the second board visible
        const secBoard = document.querySelector('.gm2');
        const shipPlace = document.querySelector('.cont > div:last-of-type');

        secBoard.style.visibility = 'visible';
        secBoard.style.position = 'static';

        shipPlace.style.position = 'absolute';
        shipPlace.style.visibility = 'hidden';

        document.querySelector('.gameboard1').style.cursor = 'default';
        randomBoard(5);
        // console.log(oppBoard.getBoard());
        showOppBoard();
        console.log(document.querySelectorAll('.placed'));
        // main();
    };

    return { start };
}