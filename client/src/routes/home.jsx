import { Carousel } from "@mantine/carousel";
import ServiceCard from "../components/ServiceCard";
import classes from "../Demo.module.css";
import Cookies from "universal-cookie";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

export default function Home() {
  const [textColor, setTextColor] = useState("red");
  return (
    <div className="bg-black text-white">
      <div className="">
        <img src="images/homepage_main2.png" alt="" className="w-full" />
        <div
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "white",
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full"
        >
          <TypeAnimation
            sequence={[
              "Connecting cultures, one souvenir at a time",
              1200,
              "Support local artisans, discover unique treasures",
              1200,
              "Unleash the artist within, explore the world, one craft at a time",
              1200,
              "",
            ]}
            speed={75}
            repeat={Infinity}
          />
          <br />
          <button className="border-4 px-4 py-2 mt-8  mb-4 font-semibold border-white text-2xl hover:bg-white hover:text-black transition duration-300 active:text-white active:bg-transparent">
            View services
          </button>
          <a href="#specific-div" className="scrool-arrow">
            <div className="flex justify-center image-container transition duration-500 animate-bounce">
              <img
                src="/icons/downward_icon.png"
                alt=""
                className="w-16 mt-2 transition duration-300"
              />
            </div>
          </a>
        </div>
      </div>
      <div id="specific-div" className=" flex gap-8 text-4xl font-light mt-12">
        <p className="p-16" style={{ lineHeight: "50px" }}>
          Locomeets is your passport to authentic travel experiences. Ditch the
          tourist traps and connect directly with local artisans, producers, and
          food vendors. Immerse yourself in the heart and soul of a destination
          through:
        </p>
        <img src="images/homepage_text_img2.png" alt="" className="w-1/2" />
      </div>
      <h1 className="font-semibold text-4xl text-center mt-8">EXPERIENCE</h1>
      <div className="flex mt-2">
        <div className="p-4">
          <div className="relative inline-block overflow-hidden">
            <img
              src="images/category_img1.png"
              alt=""
              className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="relative inline-block overflow-hidden ">
            <img
              src="images/category_img2.png"
              alt=""
              className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="relative inline-block overflow-hidden">
            <img
              src="images/category_img3.png"
              alt=""
              className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
            />
          </div>
        </div>
        <div className="p-4">
          <div className="relative inline-block overflow-hidden">
            <img
              src="images/category_img4.png"
              alt=""
              className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/4 flex justify-center">
          <p className="text-2xl font-semibold">TRADITIONAL FOOD</p>
        </div>
        <div className="w-1/4 flex justify-center">
          <p className="text-2xl font-semibold">LIVE PERFORMANCES</p>
        </div>
        <div className="w-1/4 flex justify-center">
          <p className="text-2xl font-semibold">MESMERIZING ART</p>
        </div>
        <div className="w-1/4 flex justify-center">
          <p className="text-2xl font-semibold">ENRICHING CULTIVATION</p>
        </div>
      </div>
      <div>
        <h1>Have you ever experienced</h1>
        <div>
          <img src="" alt="" />
          <p></p>
        </div>
      </div>
    </div>
  );
}
