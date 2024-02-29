import { Avatar } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import countryJSON from "../Utility/json/CountryAbbreviation.json";
import ReactCountryFlag from "react-country-flag";
const Profile = () => {
  const cookies = new Cookies(null, { path: "/" });
  const auth = cookies.get("auth");
  const uid = cookies.get("userUid");
  const [userData, setUserData] = useState();
  useEffect(() => {
    const func = async () => {
      if (!auth) return;
      const res = await axios.get(`http://localhost:3000/users/uid/${uid}`);
      const data = res.data;

      setUserData(data);
    };
    func();
  }, []);
  return (
    <div className="flex justify-center">
      <div className="">
        <div className="flex items-center  ">
          <Avatar size="xl" className="border-4  border-[#26B89380] ">
            {userData?.firstName[0].toUpperCase()}
          </Avatar>
          <div className="ml-10 text-xl">
            <div>{`${userData?.firstName} ${userData?.lastName}`}</div>
            <div className=" text-gray-300">
              {userData?.isTourist ? "Tourist" : "Freelancer"}
            </div>
          </div>
        </div>
        <div className="flex mt-20  h-max mr-8  ">
          <div className="">
            <div className="bg-[#EAF8F5] pr-24 rounded-lg p-3 border hover:border-blue-300 ">
              <p>User Info</p>
            </div>
          </div>
          <div className="w-[2px] ml-8 mr-16 bg-gray-100 h-96"></div>
          <div>
            <div className="text-lg text-gray-300 py-8 uppercase">personal</div>
            <div className="flex flex-col lg:flex-row ">
              <div name="left side  " className="space-y-4">
                <div className="flex space-x-4">
                  <div className="space-y-2">
                    <p className="font-semibold ">First Name</p>
                    <div className="p-4 border border-gray-300 rounded-lg min-w-48 lg:min-w-80">
                      <p>{userData?.firstName}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold ">Last Name</p>
                    <div className="p-4 border border-gray-300 rounded-lg  min-w-48 lg:min-w-80">
                      <p>{userData?.lastName}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold ">Nationality</p>
                  <div className="p-4 border border-gray-300 rounded-lg  min-w-48 lg:min-w-80">
                    <div className="flex flex-row space-x-2 align-middle">
                      <ReactCountryFlag
                        className="  self-center  align-middle"
                        countryCode={countryJSON[userData?.nationality]}
                        svg
                      />
                      <p className="uppercase">{userData?.nationality}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold ">Languages </p>
                    <div className="p-4 border border-gray-300 rounded-lg  min-w-48 lg:min-w-80">
                      <p>Hindi , English</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                name="right"
                className="lg:mt-0 mt-4 flex flex-col space-y-4   lg:ml-4  "
              >
                <div className="space-y-2">
                  <p className="font-semibold ">Email</p>
                  <div className="p-4 border border-gray-300 rounded-lg  min-w-48 lg:min-w-80">
                    <p>{userData?.email}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold ">Phone number</p>
                  <div className="p-4 border border-gray-300 rounded-lg  ">
                    <p>{userData?.phoneNumber}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-semibold ">Bio</p>
              <div className="p-4 border border-gray-300 min-h-44 rounded-lg  ">
                <textarea
                  value={"This is the description"}
                  disabled
                  className="w-full min-h-44 bg-white"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
