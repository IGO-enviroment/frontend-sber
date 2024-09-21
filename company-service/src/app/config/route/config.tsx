import {createBrowserRouter, RouteProps} from "react-router-dom";
import { BaseLayout } from "../../../shared/layouts/base-layout";
import { LoginPage } from "../../../pages/login";
import { Practices } from "../../../pages/practices";


export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};



export const Config = createBrowserRouter([
  {
    path: '',
    element: <BaseLayout/>,
    children: [  {
      path: 'practices',
      element: <Practices/>,
      children: [
        {
          path: ":practicesID",
          element: 'dd',
          children : [
            {
              path: "candidates",
              element: 'ff',
              children: [
                {
                  path: ':candidatesID',
                  element: 'fooo'
                }
              ]
            }, 
            {
              path: 'interns',
              element: 'fff'
            }
          ]
        }
      ]
    },
    {
      path: 'profile',
      element: <div>profile</div>,
    },
    {
      path: "not-found",
      element: 'not-found'
    },]
  },
  {
    path: 'login',
    element: <LoginPage/>,
  },
  {
    path: 'sign-up',
    element: <LoginPage/>,
  },
]);