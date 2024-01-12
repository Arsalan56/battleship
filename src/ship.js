export default function ship(len) {
    const length = len;
    let hits = 0;
    const sunk = false;
    const hit = () => ++hits;
    return { length, hits, sunk, hit };
}
