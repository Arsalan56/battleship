export default function Game() {
    const start = () => {
        // Make the second board visible
        document.querySelector('.gm2').style.visibility = 'visible';
        document.querySelector('.gm2').style.position = 'static';

        document.querySelector('.cont > div:last-of-type').style.visibility =
            'hidden';
        document.querySelector('.cont > div:last-of-type').style.position =
            'absolute';
    };

    return { start };
}
