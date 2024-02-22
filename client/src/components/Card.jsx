import { Link, useNavigate } from "react-router-dom";

function Card({ props, service }) {
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
  // @services-->>  {
  //     location: { latitude: '0000', longitude: '0000' },
  //     _id: new ObjectId('65d782682b963ee2d16cfff2'),
  //     name: 'Nayan',
  //     heading: 'This is a heading',
  //     description: 'A description',
  //     images: [ [Array] ],
  //     workingDays: [
  //       1, 0, 1, 0,
  //       0, 1, 1
  //     ],
  //     price: 123,
  //     city: 'mumbai',
  //     state: 'maharastra',
  //     category: 'art',
  //     bookings: [ [Array], [Array] ],
  //     __v: 0
  //   }
  // ]
  console.log(service.images[0][0]);
  return (
    <Link
      to={`/services/${service._id}`}
      className="flex mx-auto w-[500px] justify-between bg-red-50 h-40 rounded-xl p-4 gap-x-4 border-2 border-slate-200 mt-8"
    >
      <img
        src={service.images[0][0]}
        alt={service.name}
        className="h-full w-[200px] rounded-lg"
      />
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-xl font-medium">{serviceName}</h1>
          <p>{service.description}</p>
        </div>
        <div className="flex justify-between">
          <p>Rating: {rating}/5</p>
          <button onClick={handleClick} className="font-semibold">
            View More
          </button>
        </div>
      </div>
    </Link>
  );
}

export default Card;
