const add5 = require('./myfunc.js');

console.log(add5)

describe("test for add5", () => {
    test('adds 5  to given number', () => {
        expect(add5(1)).toBe(6);
    });
});
