/* eslint-disable no-param-reassign */
import './style.css';
import Gameboard from './gameboard';
import Ship from './ship';

(() => {
    const mainBoard = Gameboard(10, 10);
    const board1 = document.querySelector('.gameboard1');
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
        document.querySelectorAll('.gameboard1 div div').forEach((i) => {
            i.addEventListener('mouseover', () => {
                mainBoard.previewPlace(
                    i.parentNode.getAttribute('data'),
                    i.getAttribute('data'),
                    5 - n
                );
            });
            i.addEventListener(
                'click',
                () => {
                    mainBoard.place(
                        i.parentNode.getAttribute('data'),
                        i.getAttribute('data'),
                        Ship(5 - n)
                    );
                    document.querySelectorAll('.preview').forEach((j) => {
                        j.classList.add('placed');
                    });
                },
                { once: true }
            );
        });
    };

    const removeListener = (node) => {
        const clone = node.cloneNode(true);
        const parent = node.parentNode;
        parent.removeChild(node);
        parent.appendChild(clone);
    };

    // Check to see if the previewing ship is in a placed ship's location
    const checkValid = () => {
        // eslint-disable-next-line consistent-return
        document.querySelectorAll('.preview').forEach((i) => {
            console.log(i.classList.contains('placed'));
            if (i.classList.contains('placed')) {
                return false;
            }
        });
        return true;
    };
    addListener(0);

    function addEvent(n) {
        document.querySelector('.gameboard1').addEventListener('click', () => {
            removeListener(document.querySelector('.gameboard1'));
            if (n < 4) {
                addListener(Math.floor(n));
                // Allow the user to place 2 of the size 3 ships
                if (n >= 2 && n < 3) {
                    addEvent(n + 1 / 2);
                } else {
                    addEvent(n + 1);
                }
            } else {
                // All ships are placed
                console.log('done');
            }
        });
    }
    addEvent(1);
})();
