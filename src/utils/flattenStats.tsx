import { GetPokemonStat } from '@/queries/getPokemon';

export default function flattenStats(stats: GetPokemonStat[]) {
  return stats.map(({ base_stat, stat: { name } }) => ({
    base: base_stat,
    name 
  }));
}