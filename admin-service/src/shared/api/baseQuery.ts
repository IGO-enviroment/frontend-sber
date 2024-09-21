
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage';

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta> =
    fetchBaseQuery({
        baseUrl: './',
        prepareHeaders: async (headers) => {
            const token = await UserSecretStorageService.get();
            if (token != null) {
                headers.set('Authorization', `Bearer ${token.token}`);
            }
            return headers;
        },
    });
