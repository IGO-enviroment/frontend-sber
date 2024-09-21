import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { signUpKeys } from '../query-keys';
import { SecondParameter } from '../../types';
import { customAxiosInstance } from '../axios';
import { AxiosError } from 'axios';

export const useSignUp = (options?: UseMutationOptions<unknown, AxiosError, SignUpDTO>) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postSignUp,
    ...options,
    onSuccess: (data, attribute, context) => {
      queryClient.invalidateQueries(signUpKeys.lists);
      options?.onSuccess?.(data, attribute, context);
    },
  });
};

export const postSignUp = (signUpDTO: SignUpDTO, options?: SecondParameter<typeof customAxiosInstance>) => {
  return customAxiosInstance(
    { url: `/organization`, method: 'post', headers: { 'Content-Type': 'application/json' }, data: signUpDTO },
    options,
  );
};

export interface SignUpDTO {
  inn: string;
  name: string;
  phone_number: string;
  email: string;
}
