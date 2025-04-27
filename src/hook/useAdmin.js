import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
  const axiosSecure = useAxiosSecure();

  const { data: isAdmin, isLoading: roleIsLoading } = useQuery({
    queryKey: ["role"],
    queryFn: async () => {
      const res = await axiosSecure.get("/auth/role/admin");
      return res.data.data;
    },
  });

  return [isAdmin, roleIsLoading];
};

export default useAdmin;
