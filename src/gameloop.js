import Gameboard from './gameboard';
import Ship from './ship';

export default function Game() {
    let mainBoard;
    const oppBoard = Gameboard(10, 10);
    const main = () => {
        let gameOn = true;
        while (gameOn) {
            if (oppBoard.allSunk() || mainBoard.allSunk()) {
                gameOn = false;
            }
        }
    };

    const randomInt = (max) => Math.floor(Math.random() * max);

    const randomBoard = (size) => {
        if (size < 2) {
            return;
        }
        if (randomInt(2) === 0) {
            oppBoard.changeAxis();
        }

        console.log(Math.floor(size));
        oppBoard.place(
            randomInt(10) + 1,
            randomInt(10) + 1,
            Ship(Math.floor(size))
        );
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
        console.log(oppBoard.getBoard());
        // main();
    };
    return { start };
}
