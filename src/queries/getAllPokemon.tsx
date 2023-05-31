import { gql } from 'apollo-server-micro';

const GET_ALL_POKEMON = gql`
  query getAllPokemon {
    all: pokemon_v2_pokemon(where: {is_default: {_eq: true}, order: {_gt: 0}}, distinct_on: order) {
      id
      order
      name
      sprites_json: pokemon_v2_pokemonsprites {
        sprites
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

export type GetAllPokemonPokemonType = {
  slot: Number
  name: {
    name: string
  }
}

export type GetAllPokemonPokemon = {
  id: number
  order: number
  name: string
  sprites_json: {
    sprites: string
  }[]
  types: GetAllPokemonPokemonType[]
}

export type GetAllPokemonResponse = {
  all: GetAllPokemonPokemon[]
}


export default GET_ALL_POKEMON;
