import { StateSchema } from '@/app/providers/store/config/types';

export const getUserStatus = (state: StateSchema) => state.user.userStatus;
