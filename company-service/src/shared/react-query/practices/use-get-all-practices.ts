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
    return customAxiosInstance(
      { url: `/practices`, method: 'get', params },
      options,
    );
  };