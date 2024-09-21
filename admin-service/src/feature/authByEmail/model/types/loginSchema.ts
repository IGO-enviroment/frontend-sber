import { STATUS } from '@/shared/api/status';

export interface LoginSchema {
    email: string;
    password: string;
    status: STATUS;
    error?: string;
}
