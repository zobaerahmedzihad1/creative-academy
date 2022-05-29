import axios from "axios";
import { useEffect, useState } from "react";

const useServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios
      .get("services.json")
      .then((response) => setServices(response.data))
      .catch((error) => console.log(error.message));
  }, []);
  return [services];
};
export default useServices;
