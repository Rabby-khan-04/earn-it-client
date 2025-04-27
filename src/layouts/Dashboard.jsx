import DashboardHeader from "@/components/shared/DashboardHeader/DashboardHeader";
import Footer from "@/components/shared/Footer/Footer";
import useAuth from "@/hook/useAuth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { initializeAuthUser } = useAuth();

  useEffect(() => {
    const unsubscribe = initializeAuthUser();

    return () => unsubscribe();
  }, [initializeAuthUser]);

  return (
    <section className="bg-base-100">
      <DashboardHeader />
      <Outlet />
      <Footer />
    </section>
  );
};

export default Dashboard;
