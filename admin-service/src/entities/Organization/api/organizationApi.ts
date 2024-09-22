import { baseApi } from '@/shared/api/baseApi';
import { University } from '../model/types/organization';
import { UniversityStatus } from '../model/types/organizationStatus';

const organizationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getOrganization: build.query<University[], void>({
        query: () => ({
              url: '/organization',
              params: {
                status: "pending",
              }
          }),
        providesTags: ['organizations'],
      }),
      changeOrganizationStatus: build.mutation<void, UniversityStatus & {id: string}>({
          query: (initialValues) => ({
              url: `/organization/${initialValues.id}`,
              method: 'PATCH',
              body: {...initialValues},
          }),
          invalidatesTags: (_, error) => (error ? [] : ['organizations']),
      }),
    }),
});

export const getOrganizationQuery = organizationApi.useGetOrganizationQuery;
export const changeOrganizationStatus = organizationApi.useChangeOrganizationStatusMutation;
