import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import PokemonCaughts from "./routes/pokemon-caughts"
import PokemonDirectory from "./routes/pokemon-directory"
import { store } from "./store/store"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonDirectory />,
  },
  {
    path: "/caughts",
    element: <PokemonCaughts />,
  },
])

function App() {
  return (
    <Provider store={store}>
      <div className="mx-auto max-w-3xl">
        <RouterProvider router={router} />
      </div>
    </Provider>
  )
}

export default App
