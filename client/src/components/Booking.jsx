import dayjs from "dayjs";
import { useState } from "react";
import { Calendar } from "@mantine/dates";
import TimeSlot from "./TimeSlot";

export default function Booking() {
  const [selected, setSelected] = useState([]);
  const handleSelect = (date) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, "date"));
    if (isSelected) {
      setSelected((current) =>
        current.filter((d) => !dayjs(d).isSame(date, "date"))
      );
    } else if (selected.length < 1) {
      setSelected((current) => [...current, date]);
    }
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
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
            <TimeSlot />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="border-2 border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] active:bg-white active:text-[#BC6C25] hover:text-white px-6 py-2 rounded-md mb-8">
          Book now
        </button>
      </div>
    </>
  );
}
