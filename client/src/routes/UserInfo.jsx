import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import Cookies from "universal-cookie";
import countryJSON from "../Utility/json/CountryAbbreviation.json";
import axios from "axios";

const UserInfo = () => {
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
  );
};

export default UserInfo;
