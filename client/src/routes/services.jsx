import React from "react";
import ServicesSidebar from "../components/ServicesSidebar";
import AllServices from "../components/AllServices";

export default function Services() {
  return (
    <div className="flex  mt-28 gap-16">
      <ServicesSidebar />
      <AllServices />
    </div>
  );
}
