import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import useAuth from "@/hook/useAuth";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  const { initializeAuthUser } = useAuth();

  useEffect(() => {
    const unsubscribe = initializeAuthUser();

    return () => unsubscribe();
  }, [initializeAuthUser]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
