import { useQuery } from "@tanstack/react-query";
import { customAxiosInstance } from "../axios";
import { SecondParameter } from "../../types";
import { dialogsKeys } from "../query-keys";

export const useGetDialogsList = () =>
  useQuery({
    queryKey: dialogsKeys.list(),
    queryFn: () => getAllDialogs(),
  });

export const getAllDialogs = (
  options?: SecondParameter<typeof customAxiosInstance>,
) => {
  return customAxiosInstance<any[]>(
    { url: `v2/dialogs`, method: "get" },
    options,
  );
};
