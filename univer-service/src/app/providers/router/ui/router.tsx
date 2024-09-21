import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {AppRouteProps} from "../../../config/route/config.tsx";
import {RouterConfig} from "../../../config/route";

export function Router() {
  const renderWithWrapper = useCallback(
    ({ authOnly, element, ...route }: AppRouteProps) => {
      const page = (
        <div className="page-content">
          <Suspense fallback={null}>{element}</Suspense>
        </div>
      );

      console.log(route.path)

      return (
        <Route
          key={route.path}
          path={route.path}
          element={page}
        />
      );
    },
    []
  );

  return <Routes>{Object.values(RouterConfig).map(renderWithWrapper)}</Routes>;
}
