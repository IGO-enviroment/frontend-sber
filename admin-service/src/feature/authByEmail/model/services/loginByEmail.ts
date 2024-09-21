import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApiConfig } from '@/app/providers/store/config/types';
import { getTokenByEmail } from '@/entities/User/api/userApi';
import { getUser } from '@/entities/User/model/services/getUser';
import { getLoginPassword } from '../selectors/getLoginPassword/getLoginPassword';
import { actions } from '../actions';
import { getLoginEmail } from '../selectors/getLoginByEmail/getLoginByEmail';

export const loginByEmail = createAsyncThunk<void, void, ThunkApiConfig<string>>(
    'login/loginByEmail',
    async (_, thunkApi) => {
        const { dispatch, getState } = thunkApi;
        dispatch(actions.request());
        try {
            const email = getLoginEmail(getState());
            const password = getLoginPassword(getState());
            await dispatch(getTokenByEmail({ email, password })).unwrap();
            await dispatch(getUser()).unwrap();
        } catch {
            dispatch(actions.failure('Ошибка при авторазиции'));
            throw new Error('Ошибка при авторазиции');
        }

        return undefined
    },
);
