import formatPokemonName from '../../src/utils/formatPokemonName';

describe('formatPOkemonName()', () => {
  test('returns empty string when name is falsey', () => {
    expect(formatPokemonName(undefined)).toBe('');
    expect(formatPokemonName(null)).toBe('');
    expect(formatPokemonName(0)).toBe('');
    expect(formatPokemonName(false)).toBe('');
  });

  test('capitalizes the first letter', () => {
    expect(formatPokemonName('eevee')).toBe('Eevee');
    expect(formatPokemonName('Pikachu')).toBe('Pikachu');
  });
});