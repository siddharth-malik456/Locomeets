import dayjs from "dayjs";
import { useState, useEffect } from "react";
import { Calendar } from "@mantine/dates";
import TimeSlot from "./TimeSlot";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import { notifications } from "@mantine/notifications";
export default function Booking({ service }) {
  // const curDate = new Date();
  // const nextDate = curDate.setDate(curDate.getDate() + 1);
  const [selected, setSelected] = useState([]);
  const [selectDate, setSelectDate] = useState();
  const [selectedSlot, setSelectedSlot] = useState([]);
  const [bookingData, setBookingData] = useState();
  const [bookedSlot, setBookedSlot] = useState();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState();
  const navigate = useNavigate();
  const bookedSlots = service?.bookings;
  const params = useParams();
  const cookies = new Cookies(null, { path: "/" });
  const auth = cookies.get("auth");
  const uid = cookies.get("userUid");
  useEffect(() => {
    const fetchBookings = async () => {
      console.log(service._id);
      const bookings = await axios.get(
        `http://localhost:3000/services/${params.id}`
      );
      setBookingData(bookings.data);
    };
    fetchBookings();
  }, []);
  useEffect(() => {
    const func = async () => {
      const res = await axios.get(
        `http://localhost:3000/booking/services/${params.id}`
      );
      const bookings = res.data;
      const temp = [];
      bookings.map((booking) => {
        const date = new Date(booking.date);
        const dateString = date.toString();
        if (temp[dateString]) {
          temp.push({
            [dateString]: [temp[dateString], ...booking.bookedSlot],
          });
        } else {
          temp.push({
            [dateString]: booking.bookedSlot,
          });
        }
      });
      setBookedSlot(temp);
      console.log("temp===");
      console.log(temp);
    };
    func();
  }, []);
  useEffect(() => {
    console.log("This is ");
    console.log(selectedSlot);
    console.log(selectDate);
    console.log("-------------");
  }, [selectDate]);
  const handleSelect = (date) => {
    const curDate = new Date();

    if (date < curDate) {
      alert("Invalid date");
      return;
    }
    console.log(bookingData);
    setSelectDate(date);
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selected.length < 3) {
      setSelected((current) => [date]);
    }
  };
  const onSelect = (slot) => {
    console.log(slot);
    setSelectedSlot(slot);
  };

  const handleBooking = async () => {
    const userUid = uid;
    const getUserURL = "http://localhost:3000/users/uid/" + userUid;
    console.log(getUserURL);
    const user = await axios.get(getUserURL);
    // const serviceId = params.id;
    console.log("userID");
    console.log(user.data._id);
    console.log(selectDate);
    const bookingData = {
      user: user.data._id,
      service: service._id,
      date: selectDate,
      bookedSlot: selectedSlot,
    };
    const request = await axios.post(
      `http://localhost:3000/booking`,
      bookingData
    );
    console.log(request);
    navigate(0);
  };
  const isEmpty = selectDate == null || selectedTimeSlot == null;
  return (
    <>
      <h1 className=" text-3xl  font-bold text-center">Booking</h1>

      <div className="py-2  lg:flex-row flex-col my-2 px-4 flex ">
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
              selectDate &&
              bookedSlots.map((slot, index) => {
                let disabled = false;
                console.log("Booking DATA -");
                //console.log(slot);
                bookedSlot.map((slotsBooked) => {
                  //2d array
                  console.log(slotsBooked[selectDate]);

                  slotsBooked[selectDate]?.map((slotBooked) => {
                    console.log(slotBooked);
                    console.log(slot);
                    if (slotBooked[0] == slot[0] && slotBooked[1] == slot[1])
                      disabled = true;
                    console.log("disabled = " + disabled);
                  });
                });

                return (
                  <TimeSlot
                    index={index}
                    setIsSelected={setSelectedTimeSlot}
                    isSelected={selectedTimeSlot}
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
        {isEmpty ? (
          <button
            onClick={() =>
              notifications.show({
                title: "😠😠😠😠😠😠😠 ",
                message: "Please fill all the fields",
              })
            }
            className="border-2 border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] active:bg-white active:text-[#BC6C25] hover:text-white px-6 py-2 rounded-md mb-8"
          >
            Book now
          </button>
        ) : (
          <button
            onClick={handleBooking}
            className="border-2 border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] active:bg-white active:text-[#BC6C25] hover:text-white px-6 py-2 rounded-md mb-8"
          >
            Book now
          </button>
        )}
      </div>
    </>
  );
}
