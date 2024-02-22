import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const baseURL = "http://localhost:3000/";

const Services = ({ params }) => {
  const [services, setServices] = useState(null);
  const routeParams = useParams();
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
  useEffect(() => {
    axios
      .get(baseURL + `services/${routeParams.service_id}`)
      .then((response) => {
        console.log(response.data);
        setServices(response.data);
      });
    return;
  }, []);
  return <div>data</div>;
};

export default Services;
