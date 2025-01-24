import { useQuery } from '@tanstack/react-query';
import { dialogsKeys, practicesKeys } from '../query-keys';
import { IQueryOptions, SecondParameter } from '../../types';
import { customAxiosInstance } from '../axios';

export const useGetDialogById = (
  id?: string,
  options?: IQueryOptions<any>,
) =>
  useQuery(dialogsKeys.detail(id), () => getPracticeById(id as string), {
    enabled: !!id,
    ...options,
  });

export const getPracticeById = (
  id: string,
  options?: SecondParameter<typeof customAxiosInstance>,
) => {
  return customAxiosInstance<any>(
    { url: `v2/dialogs/${id}`, method: "get" },
    options,
  );
};
