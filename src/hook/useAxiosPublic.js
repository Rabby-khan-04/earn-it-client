import axios from "axios";
import { useEffect } from "react";

const axiosPublic = axios.create({
  baseURL: "http://localhost:5000/api/v1",
  withCredentials: true,
});

const useAxiosPublic = () => {
  useEffect(() => {
    const reqInterceptor = axiosPublic.interceptors.request.use(function (
      config
    ) {
      return config;
    });

    const resInterceptor = axiosPublic.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPublic.interceptors.request.eject(reqInterceptor);
      axiosPublic.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return axiosPublic;
};

export default useAxiosPublic;
