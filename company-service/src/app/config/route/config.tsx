import { createBrowserRouter, RouteProps } from 'react-router-dom';
import { BaseLayout } from '../../../shared/layouts/base-layout';
import { LoginPage } from '../../../pages/login';
import { Practices } from '../../../pages/practices';
import { SignUpPage } from '../../../pages/sign-up';
import { Practice } from '../../../pages/practice';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const Config = createBrowserRouter([
  {
    path: '',
    element: <BaseLayout />,
    children: [
      {
        path: 'practices',
        element: <Practices />,
      },
      {
        path: 'practices/:practicesID',
        element: <Practice />,
        children: [
          {
            path: '/',
            element: <Practice />
          },
          {
            path: 'candidates',
            element: 'ff',
            children: [
              {
                path: ':candidatesID',
                element: 'fooo',
              },
            ],
          },
          {
            path: 'interns',
            element: 'fff',
          },
          {
            path: 'candidates:candidatID',
            element: 'fooo',
          },
        ],
      },
      {
        path: 'profile',
        element: <div>profile</div>,
      },
      {
        path: 'not-found',
        element: 'not-found',
      },
    ],
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
  {
    path: 'sign-up',
    element: <SignUpPage />,
  },
]);
