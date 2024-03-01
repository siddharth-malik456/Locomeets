import { Carousel } from "@mantine/carousel";
import ServiceCard from "../components/ServiceCard";
import classes from "../Demo.module.css";
import Cookies from "universal-cookie";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <div className="flex justify-center image-container transition duration-1000 animate-bounce">
              <img
                src="/icons/downward_icon.png"
                alt=""
                className="w-16 mt-2 transition duration-300"
              />
            </div>
          </a>
        </div>
      </div>
      <h1
        className="font-semibold text-4xl text-center pt-40"
        id="specific-div"
      >
        HAVE YOU EVER EXPERIENCED ?
      </h1>
      <div className="flex justify-center items-center gap-8 px-60">
        <img
          src="images/homepage_experience1.png"
          alt=""
          className="w-1/2 p-16"
        />

        <div className="w-1/2 pr-16">
          <h1 className="font-semibold text-3xl mb-4">
            Rajasthani Puppet Show: A Cultural Extravaganza
          </h1>
          <p className="font-light text-xl" style={{ lineHeight: "40px" }}>
            Delve into the intricate beauty of Madhubani art, a traditional form
            of painting originating from Bihar, characterized by vibrant colors
            and intricate patterns depicting nature, mythology, and daily life.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 px-60">
        <div className="w-1/2 pl-16">
          <h1 className="font-semibold text-3xl mb-4">
            Madhubani Art: Unveiling Bihar's Timeless Heritage
          </h1>
          <p className="font-light text-xl" style={{ lineHeight: "40px" }}>
            Embark on a journey through Assam's lush tea gardens, where
            centuries-old tradition meets modern cultivation techniques,
            producing some of the finest teas in the world, offering a unique
            and aromatic experience for visitors.
          </p>
        </div>
        <img
          src="images/homepage_experience2.png"
          alt=""
          className="w-1/2 p-16"
        />
      </div>
      <div className="flex justify-center items-center gap-8 px-60">
        <img
          src="images/homepage_experience3.png"
          alt=""
          className="w-1/2 p-16"
        />
        <div className="w-1/2 pr-16">
          <h1 className="font-semibold text-3xl mb-4">
            Tea Cultivation in Assam: A Journey into India's Chai Heartland
          </h1>
          <p className="font-light text-xl" style={{ lineHeight: "40px" }}>
            Immerse yourself in the vibrant world of Rajasthani puppetry, where
            colorful puppets dance to traditional music, weaving tales of
            folklore and mythology.
          </p>
        </div>
      </div>
      <div className=" flex gap-8 text-4xl font-light mt-12">
        <p className="p-16" style={{ lineHeight: "50px" }}>
          Locomeets is your passport to authentic travel experiences. Ditch the
          tourist traps and connect directly with local artisans, producers, and
          food vendors. Immerse yourself in the heart and soul of a destination
          through:
        </p>
        <img src="images/homepage_text_img2.png" alt="" className="w-1/2" />
      </div>
      <h1 className="font-semibold text-4xl text-center mt-8">DIVE INTO</h1>
      <div className="flex mt-2">
        <div className="p-4">
          <div className="relative inline-block overflow-hidden">
            <Link className="text-2xl font-semibold" to="services/food">
              <img
                src="images/category_img1.png"
                alt=""
                className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
              />
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="relative inline-block overflow-hidden ">
            <Link
              className="text-2xl font-semibold"
              to="services/live-performance"
            >
              <img
                src="images/category_img2.png"
                alt=""
                className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
              />
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="relative inline-block overflow-hidden">
            <Link className="text-2xl font-semibold" to="services/arts">
              <img
                src="images/category_img3.png"
                alt=""
                className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
              />
            </Link>
          </div>
        </div>
        <div className="p-4">
          <div className="relative inline-block overflow-hidden">
            <Link className="text-2xl font-semibold" to="services/cultivation">
              <img
                src="images/category_img4.png"
                alt=""
                className="block w-full h-full transition-transform duration-300 transform scale-100 hover:scale-110 hover:bg-black hover:opacity-90"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-8 mb-8">
        <div className="w-1/4 flex justify-center">
          <Link className="text-2xl font-semibold" to="services/food">
            TRADITIONAL FOOD
          </Link>
        </div>
        <div className="w-1/4 flex justify-center">
          <Link
            className="text-2xl font-semibold"
            to="services/live-performance"
          >
            LIVE PERFORMANCES
          </Link>
        </div>
        <div className="w-1/4 flex justify-center">
          <Link className="text-2xl font-semibold" to="services/arts">
            MESMERIZING ART
          </Link>
        </div>
        <div className="w-1/4 flex justify-center">
          <Link
            className="text-2xl font-semibold"
            to="http://localhost:5173/services/cultivation"
          >
            ENRICHING CULTIVATION
          </Link>
        </div>
      </div>
      <hr />
      <div className="mt-4 pb-4">
        <div className="flex items-center gap-8 justify-center">
          <Link
            to={"/"}
            style={{ fontFamily: "DM Serif Display" }}
            className="text-4xl text-center text-white pl-4"
          >
            Locomeets{" "}
          </Link>
          <span className="text-xl" style={{ fontFamily: "Inter" }}>
            © Locomeets Ltd. 2024
          </span>
        </div>
      </div>
    </div>
  );
}
