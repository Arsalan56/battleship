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

    addListener(0);
    document.querySelector('.gameboard1').addEventListener('click', () => {
        removeListener(document.querySelector('.gameboard1'));
        addListener(1);
        document.querySelector('.gameboard1').addEventListener('click', () => {
            removeListener(document.querySelector('.gameboard1'));
            addListener(1);
            document
                .querySelector('.gameboard1')
                .addEventListener('click', () => {
                    removeListener(document.querySelector('.gameboard1'));
                    addListener(2);
                    document
                        .querySelector('.gameboard1')
                        .addEventListener('click', () => {
                            removeListener(
                                document.querySelector('.gameboard1')
                            );
                            addListener(2);

                            document
                                .querySelector('.gameboard1')
                                .addEventListener('click', () => {
                                    removeListener(
                                        document.querySelector('.gameboard1')
                                    );
                                    addListener(3);
                                    document
                                        .querySelector('.gameboard1')
                                        .addEventListener('click', () => {
                                            console.log('done');
                                            removeListener(
                                                document.querySelector(
                                                    '.gameboard1'
                                                )
                                            );
                                        });
                                });
                        });
                });
        });
    });
})();
