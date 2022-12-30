import { createSelector } from "@reduxjs/toolkit"
import { pokemonApi } from "../store"

export const selectSearch = (state) => state.pokemons.search
export const selectCaughtPokemons = (state) => state.pokemons.caughtPokemons

export const selectPokemons = createSelector(
  (state) => pokemonApi.endpoints.getPokemon.select(undefined)(state)?.data,
  (state) => state.pokemons.search,
  (state) => state.pokemons.caughtPokemons,
  (pokemon, search, caughtPokemons) =>
    (pokemon || [])
      .filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search.toLowerCase())
      )
      .slice(0, 10)
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((pokemon) => {
        return {
          ...pokemon,
          caught: caughtPokemons.find((cp) => cp.name === pokemon.name),
        }
      })
)
