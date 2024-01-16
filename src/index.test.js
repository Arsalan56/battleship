/* eslint-disable no-undef */
import Ship from './ship';
import Gameboard from './gameboard';

const tinyShip = Ship(1);
const newBoard = Gameboard(5, 6);

describe('Ship function', () => {
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
    test('Board is correct size vertically', () => {
        expect(newBoard.getBoard().length).toBe(5);
    });
    test('Board is correct size horizontally', () => {
        expect(newBoard.getBoard()[4].length).toBe(6);
    });
    test('Board can place ships at locations correctly', () => {
        newBoard.place(3, 4, 4);
        expect(newBoard.getBoard()[3][3]).toBe(true);
        expect(newBoard.getBoard()[3][4]).toBe(true);
        expect(newBoard.getBoard()[3][5]).toBe(true);
    });
});
