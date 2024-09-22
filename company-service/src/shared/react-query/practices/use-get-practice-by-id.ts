import { useQuery } from "@tanstack/react-query";
import { practicesKeys } from "../query-keys";
import { AnyObjectType, IQueryOptions, SecondParameter } from "../../types";
import { customAxiosInstance } from "../axios";
import { PracticesDTO } from "./use-get-all-practices";

export const useGetPracticesById = (id?: string, options?: IQueryOptions<PracticesDTO>) =>
    useQuery(practicesKeys.detail(id), () => getPracticeById(id as string), { enabled: !!id, ...options });

export const getPracticeById = (
    id: string, options?: SecondParameter<typeof customAxiosInstance>
  ) => {
    return customAxiosInstance<PracticesDTO>(
      { url: `/practice/${id}`, method: 'get' },
      options,
    );
  };
