import { RouterProvider } from "react-router-dom"
import { RouterConfig } from "../../../config/route"

export function Router() {
  return <RouterProvider router={RouterConfig} />
}
