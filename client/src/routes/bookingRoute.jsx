import { Image } from "@mantine/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
const processSlot = (slot) => {
  let f = slot[0];

  return `${f[0]} - ${f[1]}`;
};
const BookingRoute = () => {
  const cookies = new Cookies(null, { path: "/" });
  const auth = cookies.get("auth");
  const uid = cookies.get("userUid");
  const [bookedServices, setBookedServices] = useState();
  useEffect(() => {
    const func = async () => {
      const userRes = await axios.get("http://localhost:3000/users/uid/" + uid);
      const userId = userRes.data._id;
      const bookRes = await axios.get(
        "http://localhost:3000/booking/user/" + userId
      );
      const bookingsData = bookRes.data;
      setBookedServices(bookingsData);
      console.log(bookingsData);
    };
    func();
  }, []);
  // Dummy data for booked services
  const bookedServices1 = [
    {
      _id: "1",
      service: {
        heading: "Tour of City Museum",
        description:
          "Explore the fascinating history of our city at the museum.",
        images: ["https://via.placeholder.com/300"],
        price: 25,
        category: "arts",
      },
      slotBooked: [10, 12],
      date: "2024-03-15T00:00:00.000Z",
    },
    {
      _id: "2",
      service: {
        heading: "Cooking Class: Italian Cuisine",
        description:
          "Learn how to cook authentic Italian dishes from a professional chef.",
        images: ["https://via.placeholder.com/300"],
        price: 50,
        category: "food",
      },
      slotBooked: [14, 16],
      date: "2024-03-20T00:00:00.000Z",
    },
  ];

  return (
    <div className="container mx-auto py-8 w-full">
      <h1 className="text-3xl font-bold mb-4">Booked Services</h1>
      <div className="flex space-y-4 flex-col w-full">
        {bookedServices?.map((booking) => (
          <Link to={"/services/one/" + booking.service._id}>
            <div
              key={booking._id}
              className="bg-white flex  rounded-lg shadow-md overflow-hidden w-full"
            >
              <div className="w-60 ">
                <Image
                  src={booking.service.images[0]}
                  alt={booking.service.heading}
                  className=" h-full object-cover rounded-tl-lg rounded-bl-lg"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h2 className="text-3xl font-semibold mb-2">sdfsdf</h2>
                <p className="text-gray-700 mb-4 font-light text-2xl">
                  {booking.service.description}
                </p>
                <p className="text-gray-600 font-semibold text-xl">
                  Date:{" "}
                  <span className="font-normal">
                    {new Date(booking.date).toLocaleDateString()}
                  </span>
                </p>
                <p className="text-gray-600 font-semibold text-xl">
                  Price:{" "}
                  <span className="font-normal">${booking.service.price}</span>
                </p>
                <p className="text-gray-600 font-semibold text-xl">
                  Category:{" "}
                  <span className="font-normal capitalize">
                    {booking.service.category}
                  </span>
                </p>
                <p className="text-gray-600 font-semibold text-xl">
                  Slot Reserved:{" "}
                  <span className="font-normal capitalize p-1 px-2 bg-slate-200 rounded-lg">
                    {processSlot(booking.bookedSlot)}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookingRoute;
