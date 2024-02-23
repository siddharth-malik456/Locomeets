import axios from "axios";
import { useEffect, useState } from "react";

function CurrTime({ SelectedDate, id, bookings, selected, setSelected }) {
  function handleClick(e, time) {
    setSelected(time);
  }
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    const d = { id: id };

    axios
      .get("http://localhost:3000/booking/date/" + SelectedDate)
      .then((data) => {
        console.log(data.data);
        if (!data.data) return;
        data.data.map((element) => {
          // console.log(element.service);
          if (element.service == id) {
            console.log("found");
            console.log(element);
            setBooked([...booked, element.bookedSlot]);
            console.log(booked);
          }
        });
      });
  }, [SelectedDate]);
  return (
    <div>
      <ul className="flex flex-wrap gap-x-2">
        {bookings?.map((time) => {
          return (
            <button
              onClick={(e) => {
                let isBooked = false;
                console.log("found");
                booked.map((book) => {
                  if (book[0] == time[0] && book[1] == time[1]) {
                    isBooked = true;
                  }
                });
                if (!isBooked) {
                  handleClick(e, time);
                }
              }}
              className={`border-2 border-black px-2 py-1 rounded-md text-slate-800 font-semibold uppercase ${
                selected[0] == time[0] ? "bg-blue-400" : ""
              }  `}
              key={time}
            >
              {time[0]}:00 - {time[1]}:00
            </button>
          );
        })}
      </ul>
    </div>
  );
  ``;
}

export default CurrTime;
