import { baseApi } from '@/shared/api/baseApi';
import { University } from '../model/types/university';
import { UniversityStatus } from '../model/types/universityStatus';

const applicationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getUniversity: build.query<University[], void>({
        query: () => ({
              url: '/university',
              params: {
                status: "pending",
              }
          }),
          providesTags: ['university'],
      }),
      changeUniversityStatus: build.mutation<void, UniversityStatus & {id: string}>({
          query: (initialValues) => ({
              url: `/university/${initialValues.id}`,
              method: 'PATCH',
              body: {...initialValues},
          }),
          invalidatesTags: (_, error) => (error ? [] : ['university']),
      }),
    }),
});

export const getUniversityQuery = applicationApi.useGetUniversityQuery;
export const changeApplicationStatus = applicationApi.useChangeUniversityStatusMutation;
