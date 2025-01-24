import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SecondParameter } from '../../types';
import { customAxiosInstance } from '../axios.ts';

export const useSignUpUni = (options?: UseMutationOptions<SignInResponse, AxiosError, SignInDTO>) => {
  return useMutation({
    mutationFn: postSignUp,
    ...options,
    onSuccess: (data, attribute, context) => {
      options?.onSuccess?.(data, attribute, context);
    },
  });
};

export const postSignUp = (signInDTO: SignInDTO, options?: SecondParameter<typeof customAxiosInstance>) => {
  console.log(signInDTO)
  return customAxiosInstance<SignInResponse>(
    { url: `/v2/users`, method: 'post', headers: { 'Content-Type': 'application/json' }, data: signInDTO },
    options,
  );
};

export interface SignInDTO {
  email: string;
  password: string;
}

export interface SignInResponse {
  access_token: string
}