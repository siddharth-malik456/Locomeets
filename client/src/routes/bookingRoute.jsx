import { Image } from "@mantine/core";
import React from "react";
const processSlot = (slot) => {
  let f = slot[0];

  return `${slot[0]} - ${slot[1]}`;
};
const BookingRoute = () => {
  // Dummy data for booked services
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
    // Add more dummy data as needed
  ];

  return (
    <div className="container mx-auto py-8">
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
              <h2 className="text-xl font-bold mb-2">
                {booking.service.heading}
              </h2>
              <p className="text-gray-700 mb-4">
                {booking.service.description}
              </p>
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

export default BookingRoute;
