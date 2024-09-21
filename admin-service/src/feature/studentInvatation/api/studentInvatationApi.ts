import { baseApi } from '@/shared/api/baseApi';
import { StudentInvatationFormSchema } from '../model/types/studentInvatationFormSchema';

const studentInvatationApi = baseApi.injectEndpoints({
  endpoints: build => ({
      invite: build.mutation<string, StudentInvatationFormSchema>({
          query: students => ({
              method: 'POST',
              url: 'university/add-students',
              body: students,
          }),
      }),
    }),
  })
  

export const { useInviteMutation } = studentInvatationApi;