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
      const newBooking = [startHour, endHour];
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
        workingDays: [0, 1, 0, 0, 1, 1, 1],
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="heading">Heading:</label>
      <input
        type="text"
        id="heading"
        name="heading"
        value={formData.heading}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="images">Images:</label>
      <input
        type="text"
        id="images"
        name="images"
        value={formData.images}
        onChange={handleChange}
      />

      <label htmlFor="workingDays">Working Days:</label>
      <input
        type="number"
        id="workingDays"
        name="workingDays"
        value={formData.workingDays}
        onChange={handleChange}
      />

      <label htmlFor="location">Location:</label>
      <input
        type="text"
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />

      <label htmlFor="state">State:</label>
      <input
        type="text"
        id="state"
        name="state"
        value={formData.state}
        onChange={handleChange}
      />

      <label htmlFor="category">Category:</label>
      <input
        type="text"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
      />

      <label htmlFor="startHour">Start Hour:</label>
      <input
        type="number"
        id="startHour"
        min="0"
        max="23"
        value={startHour}
        onChange={(e) => setStartHour(e.target.value)}
      />

      <label htmlFor="endHour">End Hour:</label>
      <input
        type="number"
        id="endHour"
        min="0"
        max="23"
        value={endHour}
        onChange={(e) => setEndHour(e.target.value)}
      />

      <button type="button" onClick={handleAddBooking}>
        Add
      </button>

      <h3>Bookings:</h3>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking[0]} - {booking[1]}
          </li>
        ))}
      </ul>

      <button type="submit">Submit</button>
    </form>
  );
}
