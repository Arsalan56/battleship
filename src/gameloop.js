export default function Game() {
    let mainBoard;

    const main = () => {
        let gameOn = true;
        while (gameOn) {
            if (mainBoard.allSunk()) {
                gameOn = false;
            }
        }
    };

    const randomInt = (max) => Math.floor(Math.random() * max);

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
        // main();
    };
    return { start };
}
