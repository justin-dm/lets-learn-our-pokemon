import sortPokemonTypes from '../../src/utils/sortPokemonTypes';

describe('sortPokemonTypes', () => {
  test('should sort by slot', () => {
    const start = [
      { slot: 2 },
      { slot: 4 },
      { slot: 3 },
      { slot: 1 }
    ];

    expect(start.sort(sortPokemonTypes)).toEqual([
      { slot: 1 },
      { slot: 2 },
      { slot: 3 },
      { slot: 4 },
    ]);
  });
});