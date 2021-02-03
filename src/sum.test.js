const sumModule = require('./sum');
const sum = sumModule.sum;
const sum3 = sumModule.sum3;

test('properly add two numbers', () => {
   expect(sum(4, 2)).toBe(6);
});

test('properly add three numbers', () => {
   expect(sum3(4, 2, 1)).toBe(7);
});
