import { BaseQueryApi, FetchArgs } from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';
import { UserSecretStorageService } from '@/shared/lib/helpers/userSecretStorage';
import { userActions } from '@/entities/User/model/slice/userSlice';
import { baseQuery } from './baseQuery';

const AUTH_ERROR_CODES = new Set([401]);
const mutex = new Mutex();

export const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions);

    if (typeof result?.error?.status === 'number' && AUTH_ERROR_CODES.has(result?.error?.status as number)) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            await UserSecretStorageService.clear();
            api.dispatch(userActions.logout());
            release();
        } else {
            await mutex.waitForUnlock();
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};
