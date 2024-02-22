import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CurrDate from "../components/CurrDate";
import CurrTime from "../components/CurrTime";
const baseURL = "http://localhost:3000/";

const Services = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState(null);
  // const {
  //   // location,
  //   _id,
  //   name,
  //   heading,
  //   description,
  //   images,
  //   workingDays,
  //   price,
  //   city,
  //   state,
  //   category,
  //   bookings,
  //   rating,
  // } = {
  //   // location: { latitude: "0000", longitude: "0000" },
  //   // _id: new ObjectId("65d782682b963ee2d16cfff2"),
  //   _id: "65d782682b963ee2d16cfff2",
  //   name: "Aditya Jindal",
  //   heading: "Bronze Beading",
  //   description: "Bronze sculptures and processes",
  //   images: [["/public/bronzeBeading.png"]],
  //   workingDays: [1, 0, 1, 0, 0, 1, 1],
  //   price: 123,
  //   city: "mumbai",
  //   state: "maharastra",
  //   category: "art",
  //   bookings: [
  //     [9, 10],
  //     [12, 13],
  //   ],
  //   rating: 4.3,
  //   __v: 0,
  // };
  const routeParams = useParams();
  // @services-->>  {
  //     location: { latitude: '0000', longitude: '0000' },
  //     _id: new ObjectId('65d782682b963ee2d16cfff2'),
  //     name: 'Nayan',
  //     heading: 'This is a heading',
  //     description: 'A description',
  //     images: [ [Array] ],
  //     workingDays: [
  //       1, 0, 1, 0,
  //       0, 1, 1
  //     ],
  //     price: 123,
  //     city: 'mumbai',
  //     state: 'maharastra',
  //     category: 'art',
  //     bookings: [ [Array], [Array] ],
  //     __v: 0
  //   }
  // ]
  useEffect(() => {
    axios
      .get(baseURL + `services/${routeParams.service_id}`)
      .then((response) => {
        console.log(response.data);
        setServices(response.data[0]);
      });
    return;
  }, []);
  return (
    <div className="flex flex-col bg-red-100 pl-20 pr-20 py-10 min-h-screen items-between gap-y-10">
      <p className="capitalize font-medium text-slate-600">
        <Link to="/">Home</Link>
        <Link onClick={() => navigate(-1)}> {services?.city}</Link> /{" "}
        <span className="font-bold">{services?.category}</span>
      </p>
      <div className="flex justify-around ">
        <div className="max-w-[30%]">
          {/* implement Images component later */}
          <img src={services?.images[0][0]} alt="error loading image" />
        </div>
        <div className="flex flex-col gap-y-3">
          <p className="capitalize text-slate-600 font-semibold tracking-wide">
            {services?.category}
          </p>
          <h1 className="text-5xl font-semibold text-slate-700">
            {services?.name}
          </h1>
          <h2 className="text-3xl font-semibold text-slate-700">
            {services?.heading}
          </h2>
          <p className="text-slate-600 italic font-medium">
            Rating: {services?.rating}/5
          </p>
          <p className="text-xl font-semibold text-slate-700">
            {services?.description}
          </p>
          {/* <p>{long_description}</p> */}
          <h2 className="text-xl font-semibold text-slate-700">
            What time best works for you?
          </h2>
          <CurrDate workingDays={services?.workingDays} />
          <h2 className="text-xl font-semibold text-slate-700">
            Select time slots:
          </h2>
          <CurrTime bookings={services?.bookings} />
        </div>
      </div>
    </div>
  );
};

export default Services;
