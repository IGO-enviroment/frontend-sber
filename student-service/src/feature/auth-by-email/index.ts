import { selectors } from "./model/selectors"
import { loginByEmail } from "./model/services/login-thunk.ts"
import { reducer, actions } from "./model/slice"

export const LoginFeature = {
  reducer,
  actions,
  selectors,
  thunk: { loginByEmail },
}
