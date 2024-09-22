import { useQuery } from "@tanstack/react-query";
import { practicesKeys } from "../query-keys";
import { AnyObjectType, SecondParameter } from "../../types";
import { customAxiosInstance } from "../axios";

export const useGetAllPractices = () => useQuery({
    queryKey: practicesKeys.list(),
    queryFn: () => getAllPractices()
})

export const getAllPractices = (
    params?: AnyObjectType,
    options?: SecondParameter<typeof customAxiosInstance>,
  ) => {
    return customAxiosInstance<PracticesDTO[]>(
      { url: `/practice`, method: 'get', params },
      options,
    );
  };


  export interface PracticesDTO {
    views: number,
    title: string,
    id: number,
    requests_count: number,
    aprove_requests_count: number,
    limit: number
    description?: string
  }