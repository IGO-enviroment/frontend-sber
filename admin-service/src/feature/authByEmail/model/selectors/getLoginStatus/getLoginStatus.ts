import { StateSchema } from '@/app/providers/store/config/types';

export const getLoginStatus = (state: StateSchema) => state?.loginForm?.status;
