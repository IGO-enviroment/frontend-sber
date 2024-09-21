import { baseApi } from '@/shared/api/baseApi';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage';
import { type Token } from '@/shared/types';
import { type User } from '../model/types/user';
import { Login } from '../model/types/login';

const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.query<User, undefined>({
            query: () => ({
                url: '/api/auth',
            }),
        }),
        getTokenByEmail: build.mutation<Token, Login>({
            query: (initialValues) => ({
                url: '/api/auth',
                method: 'POST',
                body: initialValues,
            }),
            transformResponse: async (response: Token) => {
              await UserSecretStorageService.save(response);
              return response;
          },
        }),
    }),
});

export const getUserQuery = userApi.endpoints.getUser.initiate;
export const getTokenByEmail = userApi.endpoints.getTokenByEmail.initiate;
