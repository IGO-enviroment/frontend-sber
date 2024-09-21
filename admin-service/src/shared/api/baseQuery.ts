
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage';

export const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, object, FetchBaseQueryMeta> =
    fetchBaseQuery({
        baseUrl: 'https://caa7-2a03-d000-5101-b51f-d4b9-fcac-dcaa-8b64.ngrok-free.app/v1',
        prepareHeaders: async (headers) => {
            headers.set("ngrok-skip-browser-warning", "true");
            const token = await UserSecretStorageService.get();
            if (token != null) {
                headers.set('Authorization', `Bearer ${token.token}`);
            }
            return headers;
        },
    });
