import { useState, useEffect } from "react";
import { Carousel } from "@mantine/carousel";
import ServiceImage from "../components/ServiceImage";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import Booking from "../components/Booking";

import ReviewCompnentTest from "../components/reviewCompnentTest";

import axios from "axios";
import { useParams } from "react-router-dom";

export default function SingleService() {
  const params = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/services/${params.id}`
        );
        setService(response.data[0]);
        console.log(response.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, []);


  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="mx-96 text-[#283618]">
      <h1 className="text-4xl font-bold text-center mb-8 mt-8">
        {service?.heading}
      </h1>
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-4 items-center mb-8">
          <img
            src="/disposable/services_image1.png"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <div>
            <p className="font-semibold text-xl">
              {service?.author?.firstName}
            </p>
            <p>
              ★ 4.9 (<span className="underline">30</span>)
            </p>
          </div>
        </div>
        <p className="font-semibold">{service?.city + ", " + service?.state}</p>
      </div>
      <div className="">
        <Carousel withIndicators height={400}>
          {service?.images?.map((image) => {
            return (
              <Carousel.Slide>
                <ServiceImage url={image} />
              </Carousel.Slide>
            );
          })}
        </Carousel>
        <p className="mt-8 font-semibold text-2xl">About the experience</p>
        <p className="mt-4 font-light">{service?.description}</p>
        <Modal centered opened={opened} onClose={close} size="70%">
          <Booking />
        </Modal>
        <div className="flex justify-center">
          <button
            onClick={open}
            className="border-2 border-[#BC6C25] text-[#BC6C25] hover:bg-[#BC6C25] active:bg-white active:text-[#BC6C25] hover:text-white px-6 py-2 rounded-md mt-4"
          >
            Book now
          </button>
        </div>
        <p className="mt-8 mb-4 font-semibold text-2xl">About the seller</p>
        <div className="flex items-center gap-8">
          <img
            src="/disposable/services_image1.png"
            alt=""
            className="h-32 w-32 rounded-full"
          />
          <div>
            <p className="text-2xl font-semibold">
              {service?.author?.firstName + " " + service?.author?.lastName}
            </p>
            <p className="text-xl">★ 4.9(30)</p>
          </div>
        </div>

        <div className="flex justify-between w-1/2 mt-4 mb-8">
          <div>
            <p className="font-semibold">From</p>
            <p className="font-light">{service?.author?.nationality}</p>
          </div>
          <div>
            <p className="font-semibold">Languages Known</p>
            <p className="font-light">
              {service?.author?.languagesKnown.map((language, index) => {
                return (
                  <span>
                    {index + 1 != service?.author?.languagesKnown.length
                      ? language + ", "
                      : language}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
        <hr className="h-1 bg-[#283618] mb-2" />
        <p className="font-light mt-4">{service?.author?.bio}</p>
      </div>
      <h1 className="text-4xl text-center mt-4 font-bold">REVIEWS</h1>
      <ReviewCompnentTest />
    </div>
  );
}
