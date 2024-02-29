import React, { useState } from "react";

export default function TimeSlot({
  index,
  time,
  onSelect,
  disabled,
  isSelected,
  setIsSelected,
}) {
  const handleSlotClick = () => {
    if (!disabled) {
      setIsSelected(index);
      onSelect(time);
    } else {
      alert("Slot already booked");
    }
  };
  return (
    <div key={index}>
      <button
        onClick={handleSlotClick}
        className={`border-2 text-sm border-[#283618] text-[#283618] hover:bg-[#283618] active:bg-white active:text-[#283618] hover:text-white px-2 py-1 rounded-md mt-4 ${
          isSelected == index && "bg-[#283618] text-white "
        } ${disabled && "bg-slate-500 text-white "}`}
      >
        {time && time[0] + "-" + time[1]}
      </button>
    </div>
  );
}
