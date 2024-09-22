
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage';

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta> =
    fetchBaseQuery({
        baseUrl: 'https://2f89-193-0-185-147.ngrok-free.app/v2',
        prepareHeaders: async (headers) => {
            headers.set("ngrok-skip-browser-warning", "true");
            const token = await UserSecretStorageService.get();
            console.log(token)
            if (token != null) {
                headers.set('Authorization', `Bearer ${token.access_token}`);
            }
            return headers;
        },
    });
