import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Navigate, redirect, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CurrDate from "../components/CurrDate";
import CurrTime from "../components/CurrTime";
import ImageSlider from "../components/ImageSlider";
import Cookies from "universal-cookie";
const baseURL = "http://localhost:3000/";

const Services = () => {
  const cookies = new Cookies();
  const uuid = cookies.get("uuid");
  const navigate = useNavigate();
  const [services, setServices] = useState(null);
  const [booked, setBookings] = useState([]);
  const [isBooked, setIsBooked] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const routeParams = useParams();

  const [SelectedDate, setSelectedDate] = useState(null);
  const handleBooking = async (e) => {
    console.log(uuid);

    const data = {
      tourist_uid: uuid,
      service: routeParams.service_id,
      bookedSlot: selectedTimeSlot,
      date: SelectedDate,
    };
    await axios.post("http://localhost:3000/booking", data);
    navigate("/");
  };
  useEffect(() => {
    axios
      .get(baseURL + `services/${routeParams.service_id}`)
      .then((response) => {
        // console.log(response.data);
        setServices(response.data[0]);
      });
    return;
  }, []);

  useEffect(() => {
    axios.get(baseURL + `booking/`).then((response) => {
      //console.log(response.data);
      const bookings = response.data;
      bookings.forEach((booking) => {
        services?.bookings.forEach((element) => {
          console.log("dsfsfd");
          console.log(element);
          console.log("dsfsfd");

          if (booking.bookedSlot[0] == element[0]) {
            setBookings([...bookings, booking.bookedSlot]);
          }
        });
      });
    });
    return;
  }, [services]);
  console.log("----------");
  console.log(booked[1]);
  return (
    <div className="flex flex-col bg-red-100 pl-20 pr-20 py-10 min-h-screen items-between gap-y-10">
      <p className="capitalize font-medium text-slate-600">
        <Link to="/">Home</Link>
        <Link onClick={() => navigate(-1)}>/ {services?.city}</Link> /{" "}
        <span className="font-bold">{services?.category}</span>
      </p>
      <div className="flex justify-around gap-32">
        <div className="w-[30vw]">
          <ImageSlider images={services?.images} />
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
          <CurrDate
            setSelectedDate={setSelectedDate}
            workingDays={services?.workingDays}
          />
          <h2 className="text-xl font-semibold text-slate-700">
            Select time slots:
          </h2>
          <CurrTime
            selected={selectedTimeSlot}
            setSelected={setSelectedTimeSlot}
            booked={booked[1]}
            bookings={services?.bookings}
          />
        </div>
      </div>
      <button
        onClick={handleBooking}
        className="border-2 max-w-[240px] mx-auto border-black px-2 py-1 rounded-md text-slate-800 font-semibold uppercase"
      >
        BOOK
      </button>
    </div>
  );
};

export default Services;
