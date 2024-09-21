import { API } from "../../../shared/api"
import { Login } from "../types.ts"

export const loginApi = (data: { email: string; password: string }) =>
  API.post<Login>("/auth/login", data)
