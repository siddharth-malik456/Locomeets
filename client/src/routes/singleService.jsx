import React from "react";
import { Carousel } from "@mantine/carousel";
import ServiceImage from "../components/ServiceImage";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import Booking from "../components/Booking";

export default function SingleService({ service }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="mx-96 text-[#283618]">
      <h1 className="text-4xl font-bold text-center mb-8 mt-8">Pot making</h1>
      <div className="flex justify-between items-center px-4">
        <div className="flex gap-4 items-center mb-8">
          <img
            src="/disposable/services_image1.png"
            alt=""
            className="h-16 w-16 rounded-full"
          />
          <div>
            <p className="font-semibold text-xl">Sam</p>
            <p>
              ★ 4.9 (<span className="underline">30</span>)
            </p>
          </div>
        </div>
        <p className="font-semibold">silchar, Assam</p>
      </div>
      <div className="">
        <Carousel withIndicators height={400}>
          <Carousel.Slide>
            <ServiceImage url={"/disposable/services_image1.png"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <ServiceImage url={"/disposable/services_image2.jpg"} />
          </Carousel.Slide>
          <Carousel.Slide>
            <ServiceImage url={"/disposable/services_image3.jpg"} />
          </Carousel.Slide>
        </Carousel>
        <p className="mt-8 font-semibold text-2xl">About the experience</p>
        <p className="mt-4 font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
          inventore reiciendis odit debitis quam laudantium, cum architecto
          dicta, aperiam at quae officia adipisci, mollitia quia! Vel et ex at
          maiores? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident sed voluptas dolorem nulla a rem inventore neque at, quo
          velit voluptates. Debitis illo similique reprehenderit neque expedita
          natus quae eum! Repellendus ex mollitia atque officiis, ea iusto velit
          perspiciatis nisi fuga laboriosam error! Odit facere iure quod
          possimus exercitationem accusamus neque, beatae iste laudantium
          distinctio temporibus tempore harum. Nisi, quaerat.
        </p>
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
            <p className="text-2xl font-semibold">Sam</p>
            <p className="text-xl">★ 4.9(30)</p>
          </div>
        </div>

        <div className="flex justify-between w-1/2 mt-4 mb-8">
          <div>
            <p className="font-semibold">From</p>
            <p className="font-light">Saudi Arabia</p>
            <p className="font-semibold">Languages</p>
            <p className="font-light">English, hindi</p>
          </div>
          <div>
            <p className="font-semibold">Member since</p>
            <p className="font-light">May 2021</p>
            <p className="font-semibold">Last Booked</p>
            <p className="font-light">about 4 hours</p>
          </div>
        </div>
        <hr className="h-1 bg-[#283618] mb-2" />
        <p className="font-light mt-4">
          Hi, My name is Usama but you can call me Sam, I am a graphic designer
          who uses AI to create outstanding designs for my clients. I have more
          than 5 years of experience in this field and youc an expesct the best
          from me.
        </p>
      </div>
      <h1 className="text-4xl text-center mt-4 font-bold">REVIEWS</h1>
    </div>
  );
}
