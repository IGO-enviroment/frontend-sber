import { baseApi } from '@/shared/api/baseApi';
import { Application } from '../model/types/application';
import { ApplicationStatus } from '../model/types/applicationStatus';

const applicationApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
      getApplication: build.query<Application[], void>({
        query: () => ({
              url: '/practice',
              params: {
                status: 'pending'
              }
          }),
          providesTags: ['practice'],
      }),
      changeApplicationStatus: build.mutation<void, ApplicationStatus & { id: string}>({
          query: (initialValues) => ({
              url: `/practice/${initialValues.id}`,
              method: 'PATCH',
              body: {...initialValues},
          }), 
          invalidatesTags: (_, error) => (error ? [] : ['practice']),
      }),
    }),
});

export const getApplicationQuery = applicationApi.useGetApplicationQuery;
export const changeApplicationStatus = applicationApi.useChangeApplicationStatusMutation;
