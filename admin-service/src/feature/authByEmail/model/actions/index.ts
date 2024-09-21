import { createAction } from '@reduxjs/toolkit';

const name = 'login';

export const actions = {
    success: createAction(`${name}/success`),
    request: createAction(`${name}/request`),
    failure: createAction<string>(`${name}/failure`),
};
