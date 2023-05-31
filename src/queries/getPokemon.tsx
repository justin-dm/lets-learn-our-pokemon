import { gql } from 'apollo-server-micro';

const GET_POKEMON = gql`
  query getPokemon($pokemonName: String!) {
    pokemon: pokemon_v2_pokemon(where: {name: {_eq: $pokemonName}}) {
      id
      order
      weight
      height
      base_experience
      abilities: pokemon_v2_pokemonabilities {
        ability: pokemon_v2_ability {
          name
        }
      }
      stats: pokemon_v2_pokemonstats {
        base_stat
        stat: pokemon_v2_stat {
          name
        }
      }
      types: pokemon_v2_pokemontypes {
        slot
        name: pokemon_v2_type {
          name
        }
      }
    }
  }
`;

export type GetPokemonAbility = {
  ability: {
    name: string
  }
}

export type GetPokemonStat = {
  base_stat: number
  stat: {
    name: string
  }
}

export type GetPokemonType = {
  slot: Number
  name: {
    name: string
  }
}

type Pokemon = {
  id: number
  order: number
  base_experience: number
  weight: number
  height: number
  abilities: GetPokemonAbility[]
  stats: GetPokemonStat[]
  types: GetPokemonType[]
}

export type GetPokemonResponse = {
  pokemon: Pokemon[]
}

export default GET_POKEMON;