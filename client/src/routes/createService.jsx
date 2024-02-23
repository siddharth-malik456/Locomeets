import React, { useState, useCallback } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export default function CreateService() {
  const uuid = cookies.get("uuid");
  const [formData, setFormData] = useState({
    freelancerUUID: uuid,
    name: "",
    heading: "",
    description: "",
    images: "",
    workingDays: 0,
    location: "vellore",
    price: 0,
    city: "",
    state: "",
    category: "",
  });
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleAddBooking = useCallback(() => {
    if (startHour && endHour) {
      const newBooking = {
        startTime: startHour,
        endTime: endHour,
      };
      setBookings((prevBookings) => [...prevBookings, newBooking]);
      setStartHour("");
      setEndHour("");
    } else {
      alert("Please enter both start and end times.");
    }
  }, [startHour, endHour]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3000/services/`, {
        ...formData,
        bookings,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 flex flex-wrap gap-y-4 mt-12">
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="name"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Heading:
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="description"
            className="mb-2 font-bold text-lg text-gray-900 mt-[-18px]"
          >
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6 mt-[-18px]"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="images"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Images:
          </label>
          <input
            type="text"
            id="images"
            name="images"
            value={formData.images}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="workingDays"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Working Days:
          </label>
          <input
            type="number"
            id="workingDays"
            name="workingDays"
            value={formData.workingDays}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="location"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Location:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="price"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Price:
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="city"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="state"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            State:
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="category"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="startHour"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            Start Hour:
          </label>
          <input
            type="number"
            id="startHour"
            min="0"
            max="23"
            value={startHour}
            onChange={(e) => setStartHour(e.target.value)}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <label
            htmlFor="endHour"
            className="mb-2 font-bold text-lg text-gray-900"
          >
            End Hour:
          </label>
          <input
            type="number"
            id="endHour"
            min="0"
            max="23"
            value={endHour}
            onChange={(e) => setEndHour(e.target.value)}
            className="p-2 border border-gray-300 rounded w-4/6"
          />
        </div>
        <div className="flex justify-center items-center gap-x-4 w-3/6">
          <button
            type="button"
            onClick={handleAddBooking}
            className="border-2 max-w-[240px] mx-auto border-black px-2 py-1 rounded-md text-slate-800 font-semibold uppercase w-5/6"
          >
            Add Time Slot
          </button>
        </div>
        {bookings.length ? (
          <div className="flex justify-center items-center gap-x-4 w-3/6">
            <h3>Bookings:</h3>
            <ul className="flex gap-x-2">
              {bookings.map((booking, index) => (
                <li
                  key={index}
                  className="border-2 border-black flex gap-x-2 p-1 font-medium rounded-md "
                >
                  {booking.startTime} - {booking.endTime}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <></>
        )}
        <div className="flex justify-center items-center gap-x-4 w-full">
          <button
            type="submit"
            className="border-2 max-w-[240px] mx-auto border-black px-2 py-1 rounded-md text-slate-800 font-semibold uppercase w-full bg-[#994D5B] text-white"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}
