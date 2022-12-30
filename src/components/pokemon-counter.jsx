import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { selectCaughtPokemons } from "../store/selectors/selector"

const PokemonCounter = () => {
  const caughtPokemons = useSelector(selectCaughtPokemons)

  return (
    <div className="circle-container">
      <Link className="circle" to="/caughts">
        <div className="circle-content">{caughtPokemons.length}</div>
      </Link>
    </div>
  )
}

export default PokemonCounter
