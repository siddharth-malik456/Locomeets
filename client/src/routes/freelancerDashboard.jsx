import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const FreelancerDashboard = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/service/${id}`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
    return () => {
      // Add cleanup logic here if needed
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <h1>Freelancer Dashboard</h1>
      <h2>All Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {/* Render booking details here */}
            {/* Example: Booking ID - {booking.id}, Service ID - {booking.service} */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FreelancerDashboard;
