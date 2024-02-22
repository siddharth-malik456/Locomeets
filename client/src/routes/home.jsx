import React, { useEffect, useState } from "react";

import axios from "axios";
import Services from "../components/Services";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function Home() {
  const baseURL = "http://localhost:3000/";
  const [allServices, setAllServices] = useState();
  useEffect(() => {
    axios.get(baseURL + `services/`).then((response) => {
      console.log(response.data);
      setAllServices(response.data);
    });
    return;
  }, []);
  const token = cookies.get("token");
  const handleClick = async () => {
    const response = await axios.get("http://localhost:3000/freelancer", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    console.log(response);
  };

  return (
    <div>
      <div className="bg-[#903B4B] h-[74vh]">
        <img src="/public/welcomeImg.png" alt="welcomeImg" className="w-full" />
      </div>

      <Services allServices={allServices} />
    </div>
  );
}
