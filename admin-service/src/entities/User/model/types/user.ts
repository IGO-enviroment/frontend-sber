import { STATUS } from '@/shared/api';
import { Role } from './role';

export interface User {
    id: string;
    roles: Role[];
    fullName?: string;
    email?: string;
    lastLogin?: Date;
}

export interface UserSchema {
    authData?: User;
    userError?: string;
    tokenError?: string;
    userStatus: STATUS;
    isInited: boolean;
}
