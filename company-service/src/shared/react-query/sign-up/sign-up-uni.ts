import { useMutation, UseMutationOptions, useQueryClient } from '@tanstack/react-query';
import { SecondParameter } from '../../types';
import { customAxiosInstance } from '../axios';
import { AxiosError } from 'axios';

export const useSignUpUni = (options?: UseMutationOptions<unknown, AxiosError, SignUpDTO>) => {
  return useMutation({
    mutationFn: postSignUp,
    ...options,
    onSuccess: (data, attribute, context) => {
      options?.onSuccess?.(data, attribute, context);
    },
  });
};

export const postSignUp = (signUpDTO: SignUpDTO, options?: SecondParameter<typeof customAxiosInstance>) => {
  return customAxiosInstance(
    { url: `/university`, method: 'post', headers: { 'Content-Type': 'application/json' }, data: signUpDTO },
    options,
  );
};

export interface SignUpDTO {
  inn: string;
  name: string;
  phone_number: string;
  email: string;
}
