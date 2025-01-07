export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
  PROFILE = "profile",
  NOT_FOUND = "not-found",
  LOGIN = "login",
  OVERVIEW = "overview",
  PRACTICES = "practices",
  ORGANIZATION = "organization",
  PERSONAL = "personal",
  APPLICATIONS = "applications",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "",
  [AppRoutes.ABOUT]: "about",
  [AppRoutes.PROFILE]: "/profile",
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.LOGIN]: "/login",
  [AppRoutes.OVERVIEW]: "/overview",
  [AppRoutes.PRACTICES]: "/practices",
  [AppRoutes.ORGANIZATION]: "/organization",
  [AppRoutes.PERSONAL]: "personal",
  [AppRoutes.APPLICATIONS]: "/applications",
}
