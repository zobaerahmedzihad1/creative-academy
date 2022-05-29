import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  // console.log(typeof id);

  const [services, setServices] = useState();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/farhan-nahid/creative-academy/main/public/allServices.json "
    )
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const selectedServices = services.find(
    (service) => service.id === Number(id)
  );

  console.log(selectedServices);

  return (
    <div>
      <h2>Service Detail.</h2>
    </div>
  );
};

export default ServiceDetail;
