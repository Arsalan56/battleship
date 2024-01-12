// /* eslint-disable no-undef */
import ship from './ship';

test('Ship hit increment', () => {
    const create = ship(1);
    expect(create.hit()).toBe(1);
});
