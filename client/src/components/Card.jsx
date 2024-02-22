import { useNavigate } from "react-router-dom";

function Card(props) {
  //   const { _id, imgLink, serviceName, desc, rating, setProdID } = props;
  const { _id, imgLink, serviceName, desc, rating, setProdID } = {
    imgLink: "/public/bronzeBeading.png",
    serviceName: "Bronze Beading",
    desc: "Bronze sculptures and processes",
    rating: 4,
    ...props,
  };
  const navigate = useNavigate();
  function handleClick() {
    setProdID(_id);
    navigate("/serviceView");
  }
  return (
    <div className="flex justify-between bg-red-50 h-40 rounded-xl p-4 gap-x-4 border-2 border-slate-200 mt-8">
      <img src={imgLink} alt={serviceName} className="h-full rounded-lg" />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-medium">{serviceName}</h1>
          <p>{desc}</p>
        </div>
        <div className="flex justify-between">
          <p>Rating: {rating}/5</p>
          <button onClick={handleClick} className="font-semibold">
            View More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
