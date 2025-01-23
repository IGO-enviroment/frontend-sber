import { AnyObjectType, SecondParameter } from '../../types';
import { customAxiosInstance } from '../axios.ts';
import { useQuery } from '@tanstack/react-query';
import { practicesKeys, universityKeys } from '../query-keys.ts';

export const useGetUniversity = () => useQuery({
  queryKey: universityKeys.list(),
  queryFn: () => getAllUniversity()
})

export const getAllUniversity = (
  params?: AnyObjectType,
  options?: SecondParameter<typeof customAxiosInstance>,
) => {
  return customAxiosInstance<PracticesDTO[]>(
    { url: `v2/university?list=1`, method: 'get', params },
    options,
  );
};


export interface PracticesDTO {
  name: string,
  id: number,
}