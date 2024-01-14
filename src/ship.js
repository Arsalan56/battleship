export default function Ship(len) {
    const length = len;
    let hits = 0;
    const hit = () => {
        hits++;
    };

    const getHits = () => hits;
    const isSunk = () => hits >= length;
    const getLength = () => length;

    return { getLength, getHits, isSunk, hit };
}
