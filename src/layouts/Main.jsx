import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import useAuth from "@/hook/useAuth";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Main = () => {
  const { initializeAuthUser } = useAuth();

  useEffect(() => {
    const unsubscribe = initializeAuthUser();

    return () => unsubscribe();
  }, [initializeAuthUser]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
