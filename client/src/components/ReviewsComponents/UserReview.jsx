import { Avatar, Rating } from "@mantine/core";
import React from "react";
import ReactCountryFlag from "react-country-flag";
import countryJSON from "../../Utility/json/CountryAbbreviation.json";
function getTimeAgo(d) {
  const currentDate = new Date();
  const date = new Date(d);
  // Check if the provided date is today
  console.log("----234567890ytrszxchjo");
  console.log(typeof date);
  if (date.toDateString() === currentDate.toDateString()) {
    return "Today";
  }

  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    if (months > 0) {
      return `${years} year${years > 1 ? "s" : ""} ${months % 12} month${
        months % 12 !== 1 ? "s" : ""
      } ago`;
    }
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
}
function getFlagUnicode(countryCode) {
  // Convert country code to uppercase
  countryCode = countryCode.toUpperCase();

  // Check if the input is a valid country code (2 uppercase letters)
  if (/^[A-Z]{2}$/.test(countryCode)) {
    // Calculate the code points for regional indicators
    const firstLetter = countryCode.charCodeAt(0) - 65 + 0x1f1e6;
    const secondLetter = countryCode.charCodeAt(1) - 65 + 0x1f1e6;

    // Convert code points to Unicode characters
    const flagUnicode =
      String.fromCodePoint(firstLetter) + String.fromCodePoint(secondLetter);

    return flagUnicode;
  } else {
    return "Invalid country code";
  }
}

const UserReview = ({ review, isReader }) => {
  console.log("1234567890-");
  console.log(review);
  return (
    <div className="text-lg flex flex-row space-x-4 ">
      <Avatar
        color="blue"
        src={review?.profilePicture ? review.profilePicture : ""}
        radius="xl"
        size="lg"
      >
        {review?.profilePicture ? "" : review?.userFirstName[0]}
      </Avatar>
      <div>
        <h2>{review?.userFirstName + " " + review?.userLastName}</h2>

        <div className="flex flex-row space-x-2 align-middle ">
          <ReactCountryFlag
            className="  self-center  align-middle"
            countryCode={countryJSON[review?.nationality]}
            svg
          />
          <p className="uppercase">{review?.nationality}</p>
        </div>
        {isReader && (
          <div name="rating" className="flex flex-row space-x-2">
            <Rating
              value={review?.rating}
              className="self-center "
              //    onChange={setValue}
              color="rgba(0, 0, 0, 1)"
              readOnly
            />
            <p>{review?.rating}</p>
            <p className="text-gray-400">|</p>
            <p className="text-gray-400">{getTimeAgo(review?.date)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserReview;
