import {combineReducers, configureStore} from '@reduxjs/toolkit';

const rootReducer = combineReducers({})

export function createReduxStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  });

  return store;
}
