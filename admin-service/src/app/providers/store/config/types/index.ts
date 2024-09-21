import { LoginSchema } from '@/feature/authByEmail/model/types/loginSchema';
import { UserSchema } from '@/entities/User/model/types/user';

export type StateSchema = {
    user: UserSchema;
    loginForm: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;
export interface ThunkApiConfig<E>{
    rejectValue: E,
    state: StateSchema,
}
