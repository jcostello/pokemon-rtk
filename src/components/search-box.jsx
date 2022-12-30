import { useDispatch, useSelector } from "react-redux"
import { selectSearch } from "../store/selectors/selector"
import { setSearch } from "../store/store"

const SearchBox = () => {
  const search = useSelector(selectSearch)

  const dispatch = useDispatch()

  return (
    <input
      className="mr-5 w-full block rounded-md border border-gray-300 shadow-sm focus:border-indigo-800 focus:ring-indigo-800 sm:text-lg p-2"
      placeholder="Search"
      value={search}
      onChange={(event) => {
        dispatch(setSearch(event.target.value))
      }}
    />
  )
}

export default SearchBox
