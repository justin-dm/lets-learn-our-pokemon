import { GetPokemonAbility } from '@/queries/getPokemon';

export default function flattenAbilities(abilities: GetPokemonAbility[]) {
  return abilities.map(a => a.ability.name);
}