import { StateSchema } from '@/app/providers/store/config/types';

export const getLoginError = (state: StateSchema) => state?.loginForm?.error;
