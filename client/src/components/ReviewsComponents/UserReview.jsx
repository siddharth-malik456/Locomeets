import { Avatar, Rating } from "@mantine/core";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const UserReview = ({ value, setValue }) => {
  return (
    <div className="text-lg flex flex-row space-x-4 ">
      <Avatar color="blue" radius="xl" size="lg">
        N
      </Avatar>
      <div>
        <h2>Nayan</h2>
        <div className="flex flex-row space-x-2 align-middle ">
          <ReactCountryFlag
            className="  self-center  align-middle"
            countryCode="IN"
            svg
          />
          <p className="uppercase">India</p>
        </div>
        <div name="rating" className="flex flex-row space-x-2">
          <Rating
            value={value}
            className="self-center "
            onChange={setValue}
            color="rgba(0, 0, 0, 1)"
            readOnly
          />
          <p>{value}</p>
          <p className="text-gray-400">|</p>
          <p className="text-gray-400">2 months ago</p>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
