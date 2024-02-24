import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function ServicesSidebar() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedState, setSelectedState] = useState("");
  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];
  return (
    <div className="ml-32 w-60 text-[#283618]">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Browse By</h1>
        <hr className="h-1 bg-[#283618] mb-2" />
        <div className="flex flex-col gap-2 font-light text-xl">
          <Link className="hover:font-bold">All products</Link>
          <Link className="hover:font-bold">Arts</Link>
          <Link className="hover:font-bold">Food</Link>
          <Link className="hover:font-bold">Cultivation</Link>
          <Link className="hover:font-bold">Live Performance</Link>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-semibold mb-2">Filter By</h1>
        <hr className="h-1 bg-[#283618] mb-2" />
        <div className="flex flex-col gap-2 font-light text-xl">
          <div>
            <p>Price</p>
            <div className="flex justify-between w-60 px-4 pt-2">
              <input
                type="number"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
                min={0}
                className="border border-[#283618] w-16 p-1 text-m focus:border-[#283618] focus:outline-none"
              />
              <p>to</p>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
                min={minPrice}
                className="border border-[#283618] w-16 p-1 text-m focus:border-[#283618] focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button className="mt-2 bg-[#283618] text-white text-center px-4 py-0.5 rounded-lg">
                Go
              </button>
            </div>
          </div>
          <p>State</p>
          <select
            className="border border-[#283618] py-1 px-2 focus:border-[#283618] focus:outline-none"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select a state</option>
            {statesOfIndia.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
