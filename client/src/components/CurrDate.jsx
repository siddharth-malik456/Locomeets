function CurrDate({ workingDays }) {
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
  return (
    <div>
      <ul className="flex flex-wrap gap-x-2">
        {nextWorkingDays.map((day) => (
          <button
            className="border-2 border-black px-2 py-1 rounded-md text-slate-800 font-semibold uppercase"
            key={day}
          >
            {day}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default CurrDate;
