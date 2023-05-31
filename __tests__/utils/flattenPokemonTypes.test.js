import flattenPokemonTypes from '../../src/utils/flattenPokemonTypes';

describe('flattenPokemonTypes()', () => {
  test('flattens the types into an array of strings', () => {
    const start = [
      {
        name: {
          name: 'test 1'
        }
      },
      {
        name: {
          name: 'test 2'
        }
      },
      {
        name: {
          name: 'test 3'
        }
      },
    ];

    expect(flattenPokemonTypes(start)).toEqual([
      'test 1',
      'test 2',
      'test 3',
    ]);
  });
});