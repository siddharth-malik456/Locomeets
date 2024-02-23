import React from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
const cookies = new Cookies();
const FreelancerDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [touristName, setTouristName] = useState("");
  useEffect(() => {
    console.log("http://localhost:3000/booking/service/" + cookies.get("uuid"));
    axios
      .get("http://localhost:3000/booking/freelancer/" + cookies.get("uuid"))
      .then((data) => {
        console.log(data.data);
        setBookings(data.data);
      });
  }, []);

  return (
    <div>
      <h1 className="w-full text-center text-6xl ">Bookings</h1>
      <ul>
        <div className="flex flex-wrap gap-x-8 pl-20 pr-20">
          {bookings.map((booking) => {
            return (
              <div
                className="flex mx-auto w-[1000px] justify-between bg-red-50 h-52 rounded-xl p-4 gap-x-4 border-2 border-slate-200 mt-8"
                key={booking._id}
              >
                <div>
                  <p>Tourist name : </p>
                  <p>{booking.tourist.name}</p>
                </div>
                <div>
                  <p>Tourist email: </p>
                  <p>{booking.tourist.email}</p>
                </div>
                <div>
                  <p>Service Name: </p>
                  <p>{booking.service.name}</p>
                </div>
                <div>
                  <p>Booked Slot: </p>
                  <p>{booking.bookedSlot.join(" to ")}</p>
                </div>
                <div className="">
                  <p>Date: </p>
                  <p>{booking.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default FreelancerDashboard;
