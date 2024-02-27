import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";

export default function AllServices() {
  const Services = [{ img: "" }];
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get("http://localhost:3000/services");
        setServices(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-semibold mb-8">Services</h1>
      <div className="flex flex-wrap gap-24">
        {services.map((service) => {
          return <ServiceCard service={service} />;
        })}
      </div>
    </div>
  );
}
