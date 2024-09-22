import { baseApi } from "../../../shared/api"
import { Practice } from "../types.ts"

export const practicesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPractices: build.query<Practice[], Record<string, string>>({
      query: (params) => ({
        url: "/practices",
        params,
      }),
    }),
    getPractice: build.query<Practice, string | undefined>({
      query: (id) => ({
        url: `/practice/${id}`,
      }),
    }),
    sendApplication: build.mutation<undefined, string | undefined>({
      query: (id) => ({
        url: "/practice-invite",
        method: "POST",
        body: {
          id,
        },
      }),
    }),
  }),
})

export const {
  useGetPracticesQuery,
  useGetPracticeQuery,
  useSendApplicationMutation,
} = practicesApi
