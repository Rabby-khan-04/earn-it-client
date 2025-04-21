import axios from "axios";
import { useEffect, useState } from "react";

const useCountry = () => {
  const [country, setCountry] = useState("");
  useEffect(() => {
    axios.get("http://ip-api.com/json").then((res) => {
      setCountry(res?.data?.country);
    });
  }, []);

  return country;
};

export default useCountry;
