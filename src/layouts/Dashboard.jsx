import useAuth from "@/hook/useAuth";
import { useEffect } from "react";

const Dashboard = () => {
  const { initializeAuthUser } = useAuth();

  useEffect(() => {
    const unsubscribe = initializeAuthUser();

    return () => unsubscribe();
  }, [initializeAuthUser]);

  return <div>Dashboard</div>;
};

export default Dashboard;
