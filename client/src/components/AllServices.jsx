import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import axios from "axios";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export default function AllServices() {
  const Services = [{ img: "" }];
  const [services, setServices] = useState([]);
  const params = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  //navigate(0);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        let response;
        const cat = params.category;
        const state = searchParams.get("state");
        //http://localhost:3000/services/category/arts
        if (cat != "all") {
          if (
            cat == "arts" ||
            cat == "food" ||
            cat == "cultivation" ||
            cat == "live-performance"
          ) {
            response = await axios.get(
              `http://localhost:3000/services/filter/${cat}`,
              {
                params: {
                  state: state,
                },
              }
            );
          } else {
            response = await axios.get(
              `http://localhost:3000/services/state/${cat}`,
              {
                params: {
                  state: state,
                },
              }
            );
          }
        } else {
          response = await axios.get("http://localhost:3000/services");
        }
        setServices(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, [params.category, searchParams]);
  console.log("-----------------");
  console.log(params);
  console.log("-----------------");
  return (
    <div className="overflow-x-auto">
      <h1 className="text-2xl font-semibold mb-8">Services</h1>
      <div className="flex flex-wrap gap-24">
        {services.map((service) => {
          return <ServiceCard service={service} key={service._id} />;
        })}
      </div>
    </div>
  );
}
