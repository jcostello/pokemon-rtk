import { addPokemonToCaughtList } from "../store/store"

export const addPokemonToCaughtListService = (
  dispatch,
  caughtPokemons,
  newPokemon
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const existingPokemon = caughtPokemons.find(
        (pokemon) => pokemon.name === newPokemon.name
      )

      if (!existingPokemon) dispatch(addPokemonToCaughtList(newPokemon))

      resolve()
    }, 500)
  })
}
