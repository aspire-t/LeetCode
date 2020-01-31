import sort from '../../code/sort/922'

test('oddSort', () => {
  expect(sort([4, 2, 5, 7, 1, 6])).toEqual([2, 1, 4, 5, 6, 7])
})