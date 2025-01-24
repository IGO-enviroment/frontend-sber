import { createBrowserRouter, RouteProps } from "react-router-dom";
import { BaseLayout } from "../../../shared/layouts/base-layout";
import { LoginPage } from "../../../pages/login";
import { Practices } from "../../../pages/practices";
import { SignUpPage } from "../../../pages/sign-up";
import { Practice } from "../../../pages/practice";
import { DetailPageLayout } from "../../../shared/layouts/detail-layout";
import { Interns } from "../../../pages/interns";
import { Candidates } from "../../../pages/candidates";
import { SignUpUniPage } from "../../../pages/sign-uo-uni";
import { UIPage } from "../../../pages/ui";
import { ChatListPage } from "../../../pages/dialogs/dialogs";
import { DialogPage } from "../../../pages/dialogs/dialog-page";

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export const Config = createBrowserRouter([
  {
    path: "",
    element: <BaseLayout />,
    children: [
      {
        path: "ui",
        element: <UIPage />,
      },
      {
        path: "practices",
        element: <Practices />,
      },
      {
        path: "practices/:practicesID",
        element: <DetailPageLayout title="Практика" />,
        children: [
          {
            path: "info",
            element: <Practice />,
          },
          {
            path: "candidates",
            element: <Candidates />,
          },
          {
            path: "interns",
            element: <Interns />,
          },
        ],
      },
      {
        path: "dialogs",
        element: <ChatListPage />,
      },
      {
        path: "dialogs/:dialogsID",
        element: <DialogPage />,
      },
      {
        path: "candidates/:candidatID",
        element: "fooo",
      },
      {
        path: "profile",
        element: <div>profile</div>,
      },
      {
        path: "not-found",
        element: "not-found",
      },
    ],
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "sign-up",
    element: <SignUpUniPage />,
  },
]);
