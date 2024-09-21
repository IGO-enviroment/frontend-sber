import { StateSchema } from '@/app/providers/store/config/types';

export const getLoginEmail = (state: StateSchema) => state?.loginForm?.email || '';
