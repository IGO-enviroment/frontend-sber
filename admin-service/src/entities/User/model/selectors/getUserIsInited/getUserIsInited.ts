import { StateSchema } from '@/app/providers/store/config/types';

export const getUserInited = (state: StateSchema) => state.user.isInited;
