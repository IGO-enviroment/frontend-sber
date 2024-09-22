import { baseApi } from "../../../shared/api"
import { Organization } from "../types.ts"

export const organizationApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrganization: build.query<Organization, undefined>({
      query: (params) => ({
        url: "/practices",
        params,
      }),
    }),
  }),
})

export const { useGetOrganizationQuery } = organizationApi
