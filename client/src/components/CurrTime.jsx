function CurrTime({ bookings }) {
  function handleClick() {
    // implement this function later
  }
  return (
    <div>
      <ul className="flex flex-wrap gap-x-2">
        {bookings?.map((time) => (
          <button
            onClick={handleClick}
            className="border-2 border-black px-2 py-1 rounded-md text-slate-800 font-semibold uppercase"
            key={time}
          >
            {time[0]}:00 - {time[1]}:00
          </button>
        ))}
      </ul>
    </div>
  );
  ``;
}

export default CurrTime;
