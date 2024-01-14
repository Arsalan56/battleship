/* eslint-disable no-undef */
import ship from './ship';

const tinyShip = ship(1);

describe('ship function', () => {
    test('Ship does not start sunk', () => {
        expect(tinyShip.isSunk()).toBe(false);
    });
    test('Increment the amount of times ship is hit', () => {
        tinyShip.hit();
        console.log(tinyShip.hits);
        expect(tinyShip.getHits()).toEqual(1);
    });
    test('ship is sunk after hit enough times', () => {
        expect(tinyShip.isSunk()).toBe(true);
    });
});
