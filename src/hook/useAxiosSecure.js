import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use(function (
      config
    ) {
      const token = localStorage.getItem("access-token");

      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    const resInterceptor = axiosSecure.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        console.error(`Axios Interceptor Error: ${error}`);

        if (
          error.response &&
          (error.response?.status === 401 || error.response?.status === 403)
        ) {
          console.warn("Unauthorized!! Redirection to login...");
          navigate("/auth/login");
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
