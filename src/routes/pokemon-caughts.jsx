import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import PokemonCounter from "../components/pokemon-counter"
import PokemonList from "../components/pokemon-list"
import { selectCaughtPokemons } from "../store/selectors/selector"

const PokemonCaughts = () => {
  const pokemons = useSelector(selectCaughtPokemons)

  return (
    <>
      <div className="search-container">
        <Link className="back-link" to="/">
          &#x3c; &#x3c; Back
        </Link>
        <h1 className="w-full">Caughts</h1>
        <PokemonCounter />
      </div>
      <PokemonList pokemons={pokemons} />
    </>
  )
}

export default PokemonCaughts
