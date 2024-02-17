/* eslint-disable no-param-reassign */
import './style.css';
import Gameboard from './gameboard';
import Ship from './ship';
import Game from './gameloop';

(() => {
    const mainBoard = Gameboard(10, 10);
    const board1 = document.querySelector('.gameboard1');
    const board2 = document.querySelector('.gameboard2');
    let isPlaced = false;

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
    fillBox(board1);
    fillBox(board2);

    // Change ship axis when the button is clicked
    document
        .querySelector('.cont > div > button')
        .addEventListener('click', () => {
            mainBoard.changeAxis();
            document.querySelectorAll('.preview').forEach((i) => {
                i.classList.remove('preview');
            });
        });
    const addListener = (n) => {
        const values = [];
        document.querySelectorAll('.gameboard1 div div').forEach((i) => {
            i.addEventListener('mouseover', () => {
                mainBoard.previewPlace(
                    i.parentNode.getAttribute('data'),
                    i.getAttribute('data'),
                    5 - n
                );
            });
            i.addEventListener('click', () => {
                document.querySelectorAll('.preview').forEach((j) => {
                    if (j.classList.contains('placed')) {
                        values.push(true);
                    } else {
                        values.push(false);
                    }
                });
                if (!values.includes(true)) {
                    isPlaced = true;
                    mainBoard.place(
                        i.parentNode.getAttribute('data'),
                        i.getAttribute('data'),
                        Ship(5 - n)
                    );
                    document.querySelectorAll('.preview').forEach((j) => {
                        j.classList.add('placed');
                    });
                } else {
                    isPlaced = false;
                }
            });
        });
    };

    const removeListener = (node) => {
        const clone = node.cloneNode(true);
        const parent = node.parentNode;
        parent.removeChild(node);
        parent.appendChild(clone);
    };

    // Check to see if the previewing ship is in a placed ship's location
    // addListener(0);
    // function addEvent(n) {
    //     document.querySelector('.gameboard1').addEventListener('click', () => {
    //         if (isPlaced) {
    //             removeListener(document.querySelector('.gameboard1'));
    //             if (n < 4) {
    //                 addListener(Math.floor(n));
    //                 // Allow the user to place 2 of the size 3 ships
    //                 if (n >= 2 && n < 3 && isPlaced) {
    //                     addEvent(n + 1 / 2);
    //                 } else if (isPlaced) {
    //                     addEvent(n + 1);
    //                 } else {
    //                     addEvent(n);
    //                 }
    //             } else {
    //                 // If all ships are placed, start the game loop
    //                 console.log(mainBoard.getBoard());
    //                 Game().start(mainBoard);
    //             }
    //         } else if (n === 2) {
    //             addListener(n - 1);
    //         } else if (n === 3) {
    //             addListener(Math.floor(n - 0.5));
    //         } else if (n === 4) {
    //             addListener(3);
    //         } else {
    //             addListener(n);
    //         }
    //     });
    // }

    // addEvent(1);

    Game().start(mainBoard);
})();
