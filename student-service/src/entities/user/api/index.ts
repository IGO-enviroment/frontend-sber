import { API } from "../../../shared/api"
import { User } from "../types.ts"

export const getUserApi = () => API.get<User>("/profile")
