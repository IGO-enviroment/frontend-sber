import { userReducer } from '@/entities/User/model/slice/userSlice';
import { loginReducer } from '@/feature/authByEmail/model/slice/loginSlice';
import { baseApi } from '@/shared/api/baseApi';
import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  user: userReducer,
  loginForm: loginReducer,
  [baseApi.reducerPath]: baseApi.reducer,
})

export function createReduxStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
          serializableCheck: false,
      }).concat(baseApi.middleware),
    devTools: true,
  });

  return store;
}

export type Store = ReturnType<typeof createReduxStore>;

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];