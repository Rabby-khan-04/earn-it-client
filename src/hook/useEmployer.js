import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useEmployer = () => {
  const axiosSecure = useAxiosSecure();

  const { data: isEmployer, isLoading: roleIsLoading } = useQuery({
    queryKey: ["role"],
    queryFn: async () => {
      const res = await axiosSecure.get("/auth/role/employer");
      return res.data.data;
    },
  });

  return [isEmployer, roleIsLoading];
};

export default useEmployer;
