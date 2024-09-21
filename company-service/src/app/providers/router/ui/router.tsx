import {  RouterProvider} from "react-router-dom";
import { Config} from "../../../config/route/config.tsx";

export function Router() {
  

  return <RouterProvider router={Config} />;
}
