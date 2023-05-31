import { PokemonType } from '@/types/PokemonTypes';

export default function sortPokemonTypes(a: PokemonType, b: PokemonType) {
  if (a.slot < b.slot)
    return -1;

  if (a.slot > b.slot)
    return 1;

  return 0;
}