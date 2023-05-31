import sortPokemonTypes from './sortPokemonTypes';

import { PokemonType } from '@/types/PokemonTypes';

export default function flattenPokemonTypes(types: PokemonType[]) { 
  return [...types].sort(sortPokemonTypes).map(({ name: { name } }) => name);
}