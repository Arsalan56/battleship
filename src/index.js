import './style.css';

(() => {
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
    // fillBox(document.querySelector('.gameboard2'));
})();
