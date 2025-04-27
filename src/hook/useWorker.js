import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useWorker = () => {
  const axiosSecure = useAxiosSecure();

  const { data: isWorker, isLoading: roleIsLoading } = useQuery({
    queryKey: ["role"],
    queryFn: async () => {
      const res = await axiosSecure.get("/auth/role/worker");
      return res.data.data;
    },
  });

  return [isWorker, roleIsLoading];
};

export default useWorker;
