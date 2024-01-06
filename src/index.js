import './style.css';

(() => {
    const container = document.querySelector('.gameboard');

    for (let i = 0; i < 10; i++) {
        const box = document.createElement('div');
        box.setAttribute('data', i + 1);
        container.appendChild(box);

        for (let j = 0; j < 10; j++) {
            const boxchild = document.createElement('div');
            boxchild.setAttribute('data', j + 1);
            box.appendChild(boxchild);
        }
    }
})();
