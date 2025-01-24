import { useQuery } from '@tanstack/react-query';
import { SecondParameter } from '../../types';
import { customAxiosInstance } from '../axios.ts';

export const useGetUser = () => useQuery({
  queryKey: ['asf'],
  queryFn: () => getUser(),
  retry: 0
});


export const getUser = (options?: SecondParameter<typeof customAxiosInstance>) => {
  return customAxiosInstance<GetUserResponse>({ url: `/v2/users/0`, method: 'get' }, options);
};

interface GetUserResponse {
  id: number,
  email: string,
  first_name?: string,
  last_name?: string,
  middle_name?: string,
  is_organization?: boolean,
  is_university?: boolean,
  is_admin?: boolean,
  sex?: string,
  competencies?: string[]
}