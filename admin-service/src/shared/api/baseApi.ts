import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from './baseQueryWithReauth';

export const baseApi = createApi({
    reducerPath: 'api',
    tagTypes: ['practice', 'organizations', 'university'],
    baseQuery: baseQueryWithReauth,
    endpoints: () => ({}),
});
