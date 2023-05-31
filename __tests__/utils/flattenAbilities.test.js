import flattenAbilities from '../../src/utils/flattenAbilities';

describe('flattenAbilities()', () => {
  test('flattens the abilities object to an array of strings', () => {
    const start = [
      { ability: { name: 'test 1' } },
      { ability: { name: 'test 2' } },
      { ability: { name: 'test 3' } },
    ];

    expect(flattenAbilities(start)).toEqual([
      'test 1',
      'test 2',
      'test 3',
    ]);
  });
});