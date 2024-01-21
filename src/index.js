import './style.css';
import Gameboard from './gameboard';
import Ship from './ship';

(() => {
    const mainBoard = Gameboard(10, 10);
    const board2 = document.querySelector('.gameboard2');

    // function to fill in the grid
    const fillBox = (parent) => {
        for (let i = 0; i < 10; i++) {
            const box = document.createElement('div');
            box.setAttribute('data', i + 1);
            for (let j = 0; j < 10; j++) {
                const boxchild = document.createElement('div');
                boxchild.setAttribute('data', j + 1);
                box.appendChild(boxchild);
            }
            parent.appendChild(box);
        }
    };
    fillBox(document.querySelector('.gameboard1'));
    fillBox(board2);

    // Change axis button event listener
    document.querySelector('div button').addEventListener('click', () => {
        mainBoard.changeAxis();
    });

    document.querySelectorAll('.gameboard1 div div').forEach((i) => {
        i.addEventListener('mouseover', () => {
            mainBoard.previewPlace(
                i.parentElement.getAttribute('data'),
                i.getAttribute('data'),
                4
            );
        });
    });
})();
