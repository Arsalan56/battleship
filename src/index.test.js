/* eslint-disable no-undef */
import Ship from './ship';
import Gameboard from './gameboard';

const tinyShip = Ship(1);
const bigShip = Ship(4);
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
        newBoard.place(3, 4, bigShip);

        expect(newBoard.getBoard()[2][1]).toBe(false);

        expect(newBoard.getBoard()[2][2]).toBe(0);
        expect(newBoard.getBoard()[2][3]).toBe(0);
        expect(newBoard.getBoard()[2][4]).toBe(0);
        expect(newBoard.getBoard()[2][5]).toBe(0);
    });
    test('Board can place ships at multiple locations', () => {
        newBoard.place(1, 2, tinyShip);
        expect(newBoard.getBoard()[0][0]).toBe(false);
        expect(newBoard.getBoard()[0][2]).toBe(false);
        expect(newBoard.getBoard()[0][1]).toBe(1);
    });
    test('Ships can receive attack without problems', () => {
        newBoard.receiveAttack(3, 4);
        expect(bigShip.getHits()).toBe(1);
        expect(bigShip.isSunk()).toBe(false);
    });
    test('All ships are not sunk', () => {
        expect(newBoard.allSunk()).toBe(false);
    });
    test('All ships are sunk', () => {
        newBoard.receiveAttack(3, 3);
        newBoard.receiveAttack(3, 5);
        newBoard.receiveAttack(3, 6);
        expect(newBoard.allSunk()).toBe(true);
    });
});
