const cloneArray = require('./cloneArray');

test('properly clones array', () => {
   const array = [1, 2, 3, 4, 5];
   //expect(cloneArray(array)).toBe(array);

   expect(cloneArray(array)).toEqual(array);
});
