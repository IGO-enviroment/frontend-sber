import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { LoginFeature } from "../../../../feature/auth-by-email"
import { UserFeature } from "../../../../entities/user"

const rootReducer = combineReducers({
  loginByEmail: LoginFeature.reducer,
  user: UserFeature.reducer,
})

export function createReduxStore() {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: true,
  })

  store.dispatch(UserFeature.thunk.getUser())

  return store
}
