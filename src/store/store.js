import { configureStore, createSlice } from "@reduxjs/toolkit"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://run.mocky.io/v3/" }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => "dec87687-25cb-47d7-be32-853bfabbc92a",
    }),
  }),
})

export const usePokemonQuery = pokemonApi.endpoints.getPokemon.useQuery

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState: {
    caughtPokemons: [],
    search: "",
  },
  reducers: {
    addPokemonToCaughtList: (state, action) => {
      state.caughtPokemons.push(action.payload)
    },
    setSearch: (state, action) => {
      state.search = action.payload
    },
  },
})

export const { setSearch, addPokemonToCaughtList } = pokemonsSlice.actions

export const store = configureStore({
  reducer: {
    pokemons: pokemonsSlice.reducer,
    pokemonApi: pokemonApi.reducer,
  },
})

store.dispatch(pokemonApi.endpoints.getPokemon.initiate(undefined))
