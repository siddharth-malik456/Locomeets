function CurrDate({ workingDays, setSelectedDate }) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const nextWorkingDays = [];
  for (let i = 0; i < 7; i++) {
    const nextDayIndex = (currentDay + i) % 7;
    if (workingDays && workingDays[nextDayIndex] === 1) {
      const nextWorkingDay = new Date(currentDate);
      nextWorkingDay.setDate(currentDate.getDate() + i);
      const formattedDate = nextWorkingDay.toLocaleDateString("en-US", {
        // weekday: "short",
        month: "short",
        day: "numeric",
      });
      nextWorkingDays.push(formattedDate);
    }
  }
  const monthIndex = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12,
  };

  const handleClick = (e, day) => {
    const date = day.split(" ");
    const newDate = date[1] + "-" + monthIndex[date[0]] + "-2024";
    setSelectedDate(newDate);
    console.log(newDate);
  };
  //  console.log(nextWorkingDays);
  return (
    <div>
      <ul className="flex flex-wrap gap-x-2">
        {nextWorkingDays.map((day) => (
          <button
            className="border-2 border-black px-2 py-1 rounded-md text-slate-800 font-semibold uppercase"
            key={day}
            onClick={(e) => {
              handleClick(e, day);
            }}
          >
            {day}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default CurrDate;
