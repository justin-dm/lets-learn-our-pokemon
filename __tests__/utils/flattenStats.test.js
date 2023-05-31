import flattenStats from '../../src/utils/flattenStats';

describe('flattenStats()', () => {
  test('flattens an array of stats objects', () => {
    const start = [
      {
        base_stat: 10,
        stat: {
          name: 'test 1'
        }
      },
      {
        base_stat: 20,
        stat: {
          name: 'test 2'
        }
      },
      {
        base_stat: 30,
        stat: {
          name: 'test 3'
        }
      },
    ];

    expect(flattenStats(start)).toEqual([
      { base: 10, name: 'test 1' },
      { base: 20, name: 'test 2' },
      { base: 30, name: 'test 3' }
    ]);
  });
});