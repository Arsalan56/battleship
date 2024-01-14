/* eslint-disable no-undef */
import Ship from './ship';
import Gameboard from './gameboard';

describe('Ship function', () => {
    const tinyShip = Ship(1);
    test('Ship does not start sunk', () => {
        expect(tinyShip.isSunk()).toBe(false);
    });
    test('Increment the amount of times ship is hit', () => {
        tinyShip.hit();
        expect(tinyShip.getHits()).toEqual(1);
    });
    test('ship is sunk after hit enough times', () => {
        expect(tinyShip.isSunk()).toBe(true);
    });
});

describe('Gameboard function', () => {
    const newBoard = Gameboard(5, 6);
    test('Board is correct size vertically', () => {
        expect(newBoard.getBoard().length).toBe(5);
    });
    test('Board is correct size horizontally', () => {
        expect(newBoard.getBoard()[4].length).toBe(6);
    });
});
