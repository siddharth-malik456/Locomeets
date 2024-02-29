import { Image } from "@mantine/core";
import React from "react";
const processSlot = (slot) => {
  let f = slot[0];

  return `${slot[0]} - ${slot[1]}`;
};
const FreelancerDashboard = () => {
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
    <div className=" mx-auto w-full  py-8">
      <h1 className="text-3xl font-bold mb-4">Booked Services</h1>
      <div className="flex space-y-4 flex-col">
        {bookedServices.map((booking) => (
          <div
            key={booking._id}
            className="bg-white flex  rounded-lg shadow-md overflow-hidden"
          >
            <Image
              src={booking.service.images[0]}
              alt={booking.service.heading}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div class="bg-gray-100 p-4 md:p-6 rounded-lg">
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

              <p className="text-gray-600">
                Date: {new Date(booking.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600">Price: ${booking.service.price}</p>
              <p className="text-gray-600">
                Category: {booking.service.category}
              </p>
              <p className="text-gray-600">
                Slot Reserved:{" "}
                <span className="p-1 px-2 bg-slate-200 rounded-lg ">
                  {" "}
                  {processSlot(booking.slotBooked)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreelancerDashboard;
