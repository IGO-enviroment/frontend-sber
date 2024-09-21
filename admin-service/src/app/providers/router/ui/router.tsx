import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './require-auth';
import { PageLoader } from '@/widgets/PageLader/ui/PageLoader';
import { AppRoutesProps } from '@/app/config/route/config';
import { RouterConfig } from '@/app/config/route';
import { BaseLayout } from '@/widgets/Layout';

const AppRouter = () => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
      const element = route.hasLayout ? <BaseLayout>{route.element}</BaseLayout> : route.element;

        return (
            <Route
                key={route.path}
                path={route.path}
                element={
                    route.authOnly !== undefined ? (
                        <RequireAuth isAuth={route.authOnly} roles={route.roles}>
                            {element}
                        </RequireAuth>
                    ) : (
                        element
                    )
                }
            />
        );
    }, []);

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>{Object.values(RouterConfig).map(renderWithWrapper)}</Routes>{' '}
        </Suspense>
    );
};

export default memo(AppRouter);
