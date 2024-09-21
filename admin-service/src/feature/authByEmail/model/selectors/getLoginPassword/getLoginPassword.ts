import { StateSchema } from '@/app/providers/store/config/types';

export const getLoginPassword = (state: StateSchema) => state?.loginForm?.password || '';
