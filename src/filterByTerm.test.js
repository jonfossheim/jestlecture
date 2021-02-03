const filterByTerm = require('./filterByTerm');

test('it should filter array by a search term (api)', () => {
   const array = [
      { id: 1, url: 'www.link.dev' },
      { id: 2, url: 'www.bjeldeincorporated.dev' },
      { id: 3, url: 'www.my-api.dev' },
   ];
   const output = [{ id: 3, url: 'www.my-api.dev' }];

   expect(filterByTerm(array, 'api')).toEqual(output);
   expect(filterByTerm(array, 'API')).toEqual(output);
});
