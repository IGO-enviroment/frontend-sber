import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { practicesKeys, signUpKeys } from '../query-keys';
import { SecondParameter } from '../../types';
import { customAxiosInstance } from '../axios';
import { AxiosError } from 'axios';

export const useCreatePractices = (options?: UseMutationOptions<unknown, AxiosError, CreatePracticeDTO>) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createPractice,
    ...options,
    onSuccess: (data, attribute, context) => {
      queryClient.invalidateQueries(practicesKeys.lists);
      options?.onSuccess?.(data, attribute, context);
    },
  });
};

export const createPractice = (createPracticeDTO: CreatePracticeDTO, options?: SecondParameter<typeof customAxiosInstance>) => {
  return customAxiosInstance(
    { url: `/organization`, method: 'post', headers: { 'Content-Type': 'application/json' }, data: createPracticeDTO },
    options,
  );
};

export interface CreatePracticeDTO {
  title: string
  description: string
  work_schedule: string,
  competencies: string[]
  limit: number,
  start_at?: Date | string,
  university_id: number
}
