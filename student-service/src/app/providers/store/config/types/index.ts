import {
  AnyAction, CombinedState, EnhancedStore, ReducersMapObject,
} from '@reduxjs/toolkit';
import { Reducer } from 'redux';
import { AxiosInstance } from 'axios';
import { UserState } from '@/entities/user';
import { LoginSchema } from '@/features/auth-by-email';
import { ProfileSchema } from '@/features/edit-profile/model/types';

export type StateSchema = {
    // sync
    user: UserState;

    // async
    loginByUserName?: LoginSchema;
    profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>,
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
   reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkApiConfig<E>{
    rejectValue: E,
    extra: ThunkExtraArg,
    state: StateSchema,
}
