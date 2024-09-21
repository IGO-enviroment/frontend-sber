import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkApiConfig } from '@/app/providers/store/config/types';
import { getUserQuery } from '../../api/userApi';
import { actions } from '../actions';

export const getUser = createAsyncThunk<void, void, ThunkApiConfig<void>>('user/getUser', async (_, thunkApi) => {
    const { dispatch } = thunkApi;
    dispatch(actions.requestUser());
    try {
        const user = await dispatch(getUserQuery(undefined)).unwrap();
        dispatch(actions.successUser(user));
    } catch {
      dispatch(actions.failureUser('Произошла ошибка'));
    }
});
