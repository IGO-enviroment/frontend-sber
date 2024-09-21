import "./App.css"
import { RouterConfig } from "./config/route"
import { RouterProvider } from "react-router-dom"
import { useSelector } from "react-redux"
import { UserFeature } from "../entities/user"

export function App() {
  const userFetched = useSelector(UserFeature.selectors.wasFetched)

  if (!userFetched) {
    return null //todo loading
  }

  return <RouterProvider router={RouterConfig} />
}
