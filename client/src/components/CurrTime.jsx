import { useState } from "react";

function CurrTime({ bookings, selected, setSelected }) {
  function handleClick(e, time) {
    setSelected(time);
  }
  return (
    <div>
      <ul className="flex flex-wrap gap-x-2">
        {bookings?.map((time) => {
          return (
            <button
              onClick={(e) => {
                handleClick(e, time);
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
