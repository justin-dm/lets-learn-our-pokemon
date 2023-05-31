import sortBySlot from './sortBySlot';

function flattenTypes(types: rawType[]): string[] {
  return types.sort(sortBySlot).map((t) => t.type.name);
}

function flattenAbilities(abilities: rawAbility[]): string[] {
  return abilities.sort(sortBySlot).map((a) => a.ability.name);
}

function flattenStats(stats: rawStat[]) {
  return stats.map((s) => ({
    name: s.stat.name,
    base: s.base_stat,
  }));
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

type browseRecord = {
  id: number
  order: number
  name: string
  sprite: string
  types: string[]
}

type pokemonRecord = {
  id: number
  order: number
  name: string
  height: number
  weight: number
  sprite: string
  abilities: string[]
  stats: {
    name: string
    base: number
  }[]
  types: string[]
}


type cacheType = {
  browse: Record<string, browseRecord> 
  pokemon: Record<string, pokemonRecord>
  ready: boolean
}

type rawAbility = {
  ability: {
    name: string
  }
  is_hidden: boolean
  slot: number
}

type rawSprites = {
  front_default: string
}

type rawStat = {
  base_stat: number
  stat: {
    name: string
  }
}

type rawType = {
  slot: number
  type: {
    name: string
  }
}

type rawPokemon = {
  abilities: rawAbility[]
  // base_experience: number
  // forms: object[]
  // game_indices: object[]
  height: number
  // held_items: object[]
  id: number
  // is_default: boolean
  // location_area_encounters: string
  // moves: object[]
  name: string
  order: number
  // past_types: object[]
  // species: object
  sprites: rawSprites 
  stats: rawStat[]
  types: rawType[]
  weight: number
}

let cache: cacheType = { browse: {}, pokemon: {}, ready: false };

function cachePokemon({
  id,
  order,
  name,
  height,
  weight,
  abilities,
  stats,
  sprites: { front_default },
  types,
}: rawPokemon) {
  if (!front_default || order === -1) return;

  const browseEntry = {
    id,
    order,
    name,
    sprite: front_default,
    types: flattenTypes(types),
  };

  cache.browse[name] = browseEntry;

  const pokemonEntry = {
    ...browseEntry,
    height,
    weight,
    abilities: flattenAbilities(abilities),
    stats: flattenStats(stats),
  };

  cache.pokemon[name] = pokemonEntry;
}

async function loadPokemonList(listUrl: string) {
  const response = await fetch(listUrl);
  const { next, results } = await response.json();
  const pokemon = await Promise.all(
    results.map(({ url }: { url: string }) => fetch(url).then((r) => r.json()))
  );
  return { next, pokemon };
}

function loadAllTheThings(): Promise<cacheType> {
  const p = new Promise(async (resolve, reject) => {
    if (cache.ready) {
      resolve(cache);
      return;
    }
    let next = BASE_URL;

    console.log('pokeCache: Starting cache hydration...');
    try {
      while(next) {
        const { next: newNext, pokemon } = await loadPokemonList(next);
        pokemon.forEach(cachePokemon);
        next = newNext;
      }

      cache.ready = true;
      console.log('pokeCache: cache is ready!');
      console.log(
        `pokeCache: we have ${Object.values(cache.browse).length} pokemon cached`
      );

      resolve(cache);
    } catch (error) {
      reject(error);
    }
  });

  return p as Promise<cacheType>;
}

export async function getBrowseResponse() {
  const c = await loadAllTheThings();
  return Object.values(c.browse);
}

export async function getPokemonResponse(name: string) {
  const c = await loadAllTheThings();
  return c.pokemon?.[name];
}
