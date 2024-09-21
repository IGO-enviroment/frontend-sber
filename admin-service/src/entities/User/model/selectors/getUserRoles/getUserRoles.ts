import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store/config/types';
import { Role } from '../../types/role';

export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(Role.Admin)));
export const isUniversityEmployee = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(Role.UniversityEmployee)));
