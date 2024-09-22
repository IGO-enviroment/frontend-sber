import { Role } from '@/entities/User';
import ForbiddenPage from '@/pages/ForbiddenPage/ui/ForbiddenPage';
import { LoginPage } from '@/pages/LoginPage';
import OrganizationApprovePage from '@/pages/OrganizationApprovePage/ui/OrganizationApprovePage';
import { StudentInvatationPage } from '@/pages/StudentInvatationPage/ui/StudentInvatationPage.async';
import UniversityAcceptancePage from '@/pages/UniversityAcceptancePage/ui/UniversityAcceptancePage';
import UniversityApprovePage from '@/pages/UniversityApprovePage/ui/UniversityApprovePage';
import {RouteProps} from "react-router-dom";


export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  hasLayout?: boolean;
  roles?: Role[];
};

export enum AppRoutes {
  LOGIN = "login",
  NOT_FOUND = "not-found",
  FORBIDDEN = "forbidden",
  STUDENT_INVATATION = 'student-invatation',
  UNIVERSITY_ACCEPTANCE_PAGE = 'university-acceptance',
  UNIVERSITY_CREATION_PAGE = 'university-creation',
  ORGANIZATION_CREATION_PAGE = 'organization-creation',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.STUDENT_INVATATION]: "student-invitation",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.UNIVERSITY_ACCEPTANCE_PAGE]: 'university-acceptance',
  [AppRoutes.UNIVERSITY_CREATION_PAGE]: 'university-creation',
  [AppRoutes.ORGANIZATION_CREATION_PAGE]: 'organization-creation',
  [AppRoutes.NOT_FOUND]: "*",
};

export const Config: AppRoutesProps[] = [
  {
    path: RoutePaths['university-acceptance'],
    element: <UniversityAcceptancePage />,
    hasLayout: true,
  },
  {
    path: RoutePaths['organization-creation'],
    element: <OrganizationApprovePage></OrganizationApprovePage>,
    hasLayout: true,
  },
  {
    path: RoutePaths['university-creation'],
    element: <UniversityApprovePage />,
    hasLayout: true,
  },
  {
    path: RoutePaths['student-invatation'],
    element: <StudentInvatationPage></StudentInvatationPage>,
    hasLayout: true
    // authOnly: true,
  },
  {
    path: RoutePaths.login,
    element: <LoginPage />,
    authOnly: false,
  },
  {
    path: RoutePaths.forbidden,
    element: <ForbiddenPage />,
    authOnly: true,
  },
  {
    path: RoutePaths["not-found"],
    element: 'not-found'
  },
];
