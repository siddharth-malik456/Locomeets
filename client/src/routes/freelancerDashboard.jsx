import { Image } from "@mantine/core";
import React, { useState, useEffect } from "react";
const processSlot = (slot) => {
  let f = slot[0];

  return `${slot[0]} - ${slot[1]}`;
};
const FreelancerDashboard = () => {
  const [bookedServices1, setBookedServices1] = useState();

  useEffect(() => {}, []);
  const bookedServices = [
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
      user: {
        firstName: "Nayan",
        lastName: "Ansh Singh",
        nationality: "Argentina",
        email: "nayanansh@gmail.com",
        phoneNumber: "23456789",
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
      user: {
        firstName: "sid",
        lastName: "malik",
        nationality: "Argentina",
        email: "nayanansh@gmail.com",
        phoneNumber: "23456789",
      },
      slotBooked: [14, 16],
      date: "2024-03-20T00:00:00.000Z",
    },
    // Add more dummy data as needed
  ];

  return (
    <div className="w-full py-8">
      <h1 className="text-3xl font-bold mb-4">Booked Services</h1>
      <div className="flex gap-8 flex-col w-full">
        {bookedServices.map((booking) => (
          <div
            key={booking._id}
            className="bg-white flex justify-between rounded-lg shadow-md w-full"
          >
            <div className="w-60 h-60">
              <Image
                src={booking.service.images[0]}
                alt={booking.service.heading}
                className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
              />
            </div>
            <div className="w-1/3 pl-4 pt-4 font-light">
              <h2 class="text-xl md:text-2xl font-bold mb-3">Booking Info</h2>
              <p class="text-base md:text-lg mb-2">
                <span class="font-bold">Service name:</span>{" "}
                {booking.service.heading}
              </p>
              <p class="text-base md:text-lg mb-2">
                <span class="font-bold">Date:</span>{" "}
                {new Date(booking.date).toLocaleDateString()}{" "}
              </p>
              <p class="text-base md:text-lg mb-2">
                <span class="font-bold">Category:</span>{" "}
                {booking.service.category}
              </p>
              <p class="text-base md:text-lg mb-2">
                <span class="font-bold">Slot Reserved:</span>{" "}
                {processSlot(booking.slotBooked)}
              </p>
            </div>
            <div className="w-1/3 pl-4 pt-4">
              <div class=" rounded-lg w-full h-full">
                <h2 class="text-xl md:text-2xl font-bold mb-3">
                  User Information
                </h2>
                <p class="text-base md:text-lg mb-2">
                  <span class="font-bold">Name:</span> {booking.user.firstName}{" "}
                  {booking.user.lastName}
                </p>
                <p class="text-base md:text-lg mb-2">
                  <span class="font-bold">Nationality:</span>{" "}
                  {booking.user.nationality}
                </p>
                <p class="text-base md:text-lg mb-2">
                  <span class="font-bold">Email:</span> {booking.user.email}
                </p>
                <p class="text-base md:text-lg mb-2">
                  <span class="font-bold">Phone Number:</span>{" "}
                  {booking.user.phoneNumber}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancerDashboard;
