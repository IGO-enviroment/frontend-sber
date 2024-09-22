import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { FC, ReactNode, useMemo } from 'react';
import { getUserAuthData } from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData';
import { type Role } from '@/entities/User/model/types/role';
import { getUserRoles } from '@/entities/User/model/selectors/getUserRoles/getUserRoles';
import { RoutePaths } from '../../../config/route/config';

interface RequireAuthProps {
    children: ReactNode;
    isAuth: boolean;
    roles?: Role[];
}

export const RequireAuth: FC<RequireAuthProps> = (props) => {
    const auth = useSelector(getUserAuthData);
    const location = useLocation();
    const userRoles = useSelector(getUserRoles);

    const { children, isAuth, roles } = props;

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }

        return roles.some((requiredRole) => {
            const hasRole = userRoles?.includes(requiredRole);
            return hasRole;
        });
    }, [roles, userRoles]);

    if (!auth && isAuth) {
        return <Navigate to={RoutePaths.login} state={{ from: location }} replace />;
    }

    if (auth && !isAuth) {
      return <Navigate to={`/${RoutePaths['organization-creation']}`} state={{ from: location }} replace />;
  }


    if (!hasRequiredRoles) {
        return <Navigate to={RoutePaths.forbidden} state={{ from: location }} replace />;
    }

    return (
        <>{children}</>
    );
};