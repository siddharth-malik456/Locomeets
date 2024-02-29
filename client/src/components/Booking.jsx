import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Calendar } from "@mantine/dates";
import TimeSlot from "./TimeSlot";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Booking({ service }) {
  const [selected, setSelected] = useState([]);
  const [selectDate, setSelectDate] = useState();
  const [selectedSlot, setSelectedSlot] = useState([]);
  const [bookingData, setBookingData] = useState();
  const bookedSlots = service?.bookings;
  const params = useParams();
  useEffect(() => {
    const fetchBookings = async () => {
      const bookings = await axios.get(
        `http://localhost:3000/services/${service._id}`
      );
      setBookingData(bookings.data);
    };
    console.log("This is ");
    console.log(selectedSlot);
    console.log(selectDate);
    console.log("-------------");

    fetchBookings();
  }, []);
  const handleSelect = (date) => {
    console.log(bookingData);
    setSelectDate(date);
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selected.length < 1) {
      setSelected((current) => [...current, date]);
    }
  };
  const onSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBooking = async () => {
    const bookingData = {
      user: service.author._id,
      service: service._id,
      date: selectedDate,
      bookedSlot: selectedSlot,
    };
    const request = await axios.post(
      `http://localhost:3000/booking`,
      bookingData
    );
    console.log(request);
  };
  return (
    <>
      <h1 className=" text-3xl font-bold text-center">Booking</h1>
      <div className="py-2 my-2 px-4 mx-4 flex ">
        <div className="w-1/2">
          <p className="font-semibold text-xl mt-4 text-center">Choose date</p>
          <div className="flex justify-center">
            <Calendar
              getDayProps={(date) => ({
                selected: selected.some((s) => dayjs(date).isSame(s, "date")),
                onClick: () => handleSelect(date),
              })}
            />
          </div>
        </div>
        <div className="w-1/2">
          <p className="font-semibold text-xl mt-4 text-center">
            Choose time slot
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {bookingData &&
              bookedSlots.map((slot, index) => {
                let disabled = false;
                console.log(bookingData);
                bookingData.forEach((booking) => {});
                return (
                  <TimeSlot
                    time={slot}
                    onSelect={onSelect}
                    key={index}
                    disabled={disabled}
                  />
                );
              })}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleBooking}
          className="border-2 border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] active:bg-white active:text-[#BC6C25] hover:text-white px-6 py-2 rounded-md mb-8"
        >
          Book now
        </button>
      </div>
    </>
  );
}
