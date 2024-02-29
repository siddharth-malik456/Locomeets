import { Avatar } from "@mantine/core";
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import countryJSON from "../Utility/json/CountryAbbreviation.json";
import ReactCountryFlag from "react-country-flag";
import UserInfo from "./UserInfo";
import { Link, NavLink, Outlet } from "react-router-dom";
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
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/profile/userinfo"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-blue-300 rounded-lg border h-fit"
                  : ""
              }
            >
              <div className="bg-[#EAF8F5] pr-24 rounded-lg p-3 border hover:border-blue-500 ">
                <p>User Info</p>
              </div>
            </NavLink>
            <NavLink
              to="/profile/freelancerDashboard"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-blue-300 rounded-lg border h-fit"
                  : ""
              }
            >
              <div className="bg-[#EAF8F5] pr-24 rounded-lg p-3 border hover:border-blue-500 ">
                <p>Dashboard</p>
              </div>
            </NavLink>
            <NavLink
              to="/profile/bookings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-blue-300 rounded-lg border h-fit"
                  : ""
              }
            >
              <div className="bg-[#EAF8F5] pr-24 rounded-lg p-3 border hover:border-blue-500 ">
                <p>Bookings</p>
              </div>
            </NavLink>
          </div>
          <div className="w-[2px] ml-8 mr-16 bg-gray-100 h-96"></div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
