import React, { useState, useCallback } from "react";
import { Input, Select, Checkbox } from "@mantine/core";
import { IMaskInput } from "react-imask";
import { Group, Text, rem } from "@mantine/core";
import { IconUpload, IconPhoto, IconX } from "@tabler/icons-react";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import indianStates from "../Utility/json/StateAndCities.json";
import Cookies from "universal-cookie";
import axios from "axios";

export default function CreateService() {
  const cookies = new Cookies();
  const uuid = cookies.get("userUid");
  const categories = [
    { value: "arts", label: "Arts" },
    { value: "food", label: "Food" },
    { value: "cultivation", label: "Cultivation" },
    { value: "live-performance", label: "Live Performance" },
  ];
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    price: 0,
  });
  const [startHour, setStartHour] = useState("");
  const [endHour, setEndHour] = useState("");
  const [bookings, setBookings] = useState([]);

  const handleStateChange = (value) => {
    setSelectedState(value);
    setSelectedCity("");
  };
  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };
  const handleCityChange = (value) => {
    setSelectedCity(value);
  };
  const handleAddBooking = useCallback(() => {
    if (
      startHour &&
      endHour < 23 &&
      endHour &&
      startHour < 23 &&
      startHour < endHour
    ) {
      const newBooking = {
        startTime: startHour,
        endTime: endHour,
      };
      setBookings((prevBookings) => [...prevBookings, newBooking]);
      setStartHour("");
      setEndHour("");
    } else if (!startHour || !endHour) {
      alert("Don't be stupid add both start time and end time");
    } else if (startHour > 23 || endHour > 23) {
      alert("Don't be stupid that time does not exist");
    } else {
      alert("Don't be stupid start time should be less than end time");
    }
  }, [startHour, endHour]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const ListService = async () => {
    const request = await axios.get(`http://localhost:3000/users/uid/${uuid}`);
    const bookingArray = bookings.map((obj) => [
      parseInt(obj.startTime),
      parseInt(obj.endTime),
    ]);
    console.log(bookingArray);
    if (request.data.isTourist) {
      alert("you can't list service without having a freelancer account");
    } else {
      const listData = {
        state: selectedState,
        city: selectedCity,
        price: formData.price,
        category: selectedCategory,
        booking: bookingArray,
        heading: formData.heading,
        description: formData.description,
        images: ["nayan", "please", "put", "the", "images"],
      };
      const createResponse = await axios.post(
        `http://localhost:3000/services/${request.data._id}`,
        listData
      );
    }
    console.log(request.data);
  };
  return (
    <div className="flex flex-col text-[#283618]">
      <h1 className=" text-3xl font-bold text-center mb-4">
        List your service
      </h1>
      <div className="flex justify-between gap-16">
        <div className="flex flex-col w-1/2">
          <label className="font-semibold">Service name</label>
          <input
            type="text"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="border border-[#C9D1DA] rounded-md py-1 mb-2 active:outline-none active:border-[#C9D1DA] px-2 outline-none "
          />
          <label className="font-semibold mt-4">Description</label>
          <textarea
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-[#C9D1DA] rounded-md py-1 mb-2 active:outline-none active:border-[#C9D1DA] px-2 outline-none "
          ></textarea>
          <div className="flex justify-between mt-4">
            <div className="flex justify-center items-center gap-16">
              <label className="font-semibold">State</label>
              <Select
                placeholder="Select State"
                data={Object.keys(indianStates).map((state) => ({
                  value: state,
                  label: state,
                }))}
                searchable
                value={selectedState}
                onChange={handleStateChange}
                nothingFoundMessage="Nothing found..."
              />
            </div>
            <div className="flex justify-center items-center gap-12">
              <label className="font-semibold" htmlFor="city">
                City
              </label>
              <Select
                placeholder="Select City"
                data={
                  selectedState
                    ? indianStates[selectedState].map((city) => ({
                        value: city,
                        label: city,
                      }))
                    : []
                }
                searchable
                value={selectedCity}
                onChange={handleCityChange}
                nothingFoundMessage="Nothing found..."
                disabled={!selectedState}
              />
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex justify-center items-center gap-8">
              <label className="font-semibold" htmlFor="category">
                Category
              </label>
              <Select
                placeholder="Select Category"
                data={categories}
                searchable
                value={selectedCategory}
                onChange={handleCategoryChange}
                nothingFoundMessage="Nothing found..."
              />
            </div>
            <div className="flex justify-center items-center gap-6">
              <label className="font-semibold">Price</label>
              <br />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="border border-[#C9D1DA] py-0.5 rounded-md mb-2active:outline-none active:border-[#C9D1DA] px-2 outline-none w-full"
              />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h1 className="font-semibold">Select Your slots</h1>
          <div className="flex gap-8 mt-2">
            <div className="flex items-center gap-2">
              <label className="font-semibold" htmlFor="startHour">
                Session start:
              </label>
              <input
                type="number"
                id="startHour"
                min="0"
                max="23"
                value={startHour}
                className="border border-[#C9D1DA] rounded-md py-1 active:outline-none active:border-[#C9D1DA] px-2 outline-none "
                onChange={(e) => setStartHour(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <label className="font-semibold" htmlFor="endHour">
                Session end:
              </label>
              <input
                type="number"
                id="endHour"
                min="0"
                max="23"
                className="border border-[#C9D1DA] rounded-md py-1 active:outline-none active:border-[#C9D1DA] px-2 outline-none "
                value={endHour}
                onChange={(e) => setEndHour(e.target.value)}
              />
            </div>
            <div>
              <button
                className="bg-[#283618] text-white px-2 py-1 rounded-md border border-[#283618] hover:bg-white hover:border-[#283618] hover:text-[#283618] active:bg-[#283618] active:text-white"
                onClick={handleAddBooking}
              >
                Add session
              </button>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <h3 className="font-semibold text-center">Booked Slots</h3>
            {bookings.length ? (
              <ul className="flex gap-2 flex-wrap">
                {bookings.map((booking, index) => (
                  <li
                    key={index}
                    className="border-2 border-[#283618] text-[#283618] px-2 rounded-md"
                  >
                    {booking.startTime} - {booking.endTime}
                  </li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <button
        onClick={ListService}
        className="bg-[#283618] text-white px-2 py-1 rounded-md border border-[#283618] hover:bg-white hover:border-[#283618] hover:text-[#283618] active:bg-[#283618] active:text-white mt-4"
      >
        Submit
      </button>
    </div>
  );
}
