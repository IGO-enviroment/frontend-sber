import { useLocation, Navigate } from "react-router-dom";
import {RoutePaths} from "../../../config/route/config.tsx";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = true;
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePaths.main} state={{ from: location }} replace />;
  }

  return children;
}
