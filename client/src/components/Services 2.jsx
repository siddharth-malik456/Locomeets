import CardContainer from "./CardContainer";

function Services({ location, setLocation }) {
  function handleLocate() {
    // implement this function later
  }
  function handleLocationSubmit(e) {
    e.preventDefault();
    setLocation(e.target.value);
  }
  return (
    <div className="mt-[-2rem]">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Where are you headed"
          className="rounded-3xl bg-slate-100 px-8 py-4 w-3/6 border-2 border-slate-300"
          name="location"
          value={location}
        />
        <div className="flex gap-x-1 ml-[-15rem]">
          <button
            onClick={handleLocationSubmit}
            className="rounded-3xl bg-slate-100 px-6 py-2 border-2 border-slate-400"
          >
            Search
          </button>
          <button
            onClick={handleLocate}
            className="rounded-full bg-slate-100 px-6 py-2 border-2 border-slate-400"
          >
            Locate me
          </button>
        </div>
      </div>
      <CardContainer />
    </div>
  );
}

export default Services;