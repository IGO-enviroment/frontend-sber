import { useQuery } from '@tanstack/react-query';
import { requstsKeys } from '../query-keys';
import { customAxiosInstance } from '../axios';
import { AnyObjectType, SecondParameter } from '../../types';

export const useGetRequest = (id: string | undefined) =>
  useQuery({
    queryKey: requstsKeys.list(),
    queryFn: () => getAllRequests(id as string),
    enabled: !!id
  });

export const getAllRequests = (id: string, options?: SecondParameter<typeof customAxiosInstance>) => {
  return customAxiosInstance<ReqyestsDTO[]>({ url: `/requests?practice_id=${id}`, method: 'get' }, options);
};

export interface ReqyestsDTO {
  id: number;
  competencies: string[];
  sex: string;
  birthdate?: Date;
  email: string;
}
