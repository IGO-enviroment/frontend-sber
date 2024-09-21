import {
  createApi,
  EndpointBuilder,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react"
import { BASE_URL } from "../../../../shared/api"

interface Login {
  accessToken: string
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    login: build.mutation<Login, { email: string; password: string }>({
      query: () => ({
        url: "",
      }),
    }),
  }),
})
