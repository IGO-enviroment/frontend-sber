import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { UserFeature } from "../../../../entities/user"

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useSelector(UserFeature.selectors.data)
  const location = useLocation()

  // if (!auth) {
  //   return <Navigate to={RoutePaths.login} state={{ from: location }} replace />
  // }

  return children
}
