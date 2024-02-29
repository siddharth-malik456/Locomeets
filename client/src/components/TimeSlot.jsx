import React, { useState } from "react";

export default function TimeSlot({ time, onSelect, disabled }) {
  const [isSelected, setIsSelected] = useState(false);
  const handleSlotClick = () => {
    console.log(disabled);
    setIsSelected(!isSelected);
    onSelect(time);
  };
  return (
    <div>
      <button
        onClick={handleSlotClick}
        className={`border-2 text-sm border-[#283618] text-[#283618] hover:bg-[#283618] active:bg-white active:text-[#283618] hover:text-white px-2 py-1 rounded-md mt-4 ${
          isSelected && "bg-[#283618] text-white "
        } ${disabled && "bg-slate-500 "}`}
      >
        {time && time[0] + "-" + time[1]}
      </button>
    </div>
  );
}
