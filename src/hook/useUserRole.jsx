import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useUserRole = () => {
  const axiosSecure = useAxiosSecure();

  const { data: role, isLoading: roleLoading } = useQuery({
    queryKey: ["role"],
    queryFn: async () => {
      const res = await axiosSecure.get("/auth/role");
      return res.data.data;
    },
  });

  return [role, roleLoading];
};

export default useUserRole;
