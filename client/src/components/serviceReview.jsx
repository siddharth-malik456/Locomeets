import React, { useState } from "react";
import { Avatar, Modal, Rating } from "@mantine/core";
import ReactCountryFlag from "react-country-flag";
import ImagesInRow from "./ReviewsComponents/ImagesInRow";
import UserReview from "./ReviewsComponents/UserReview";
import { useDisclosure } from "@mantine/hooks";
const trimReview = (userReview) => {
  const words = userReview.trim().split(/\s+/);

  const trimmedText = words.slice(0, 75).join(" ");
  return trimmedText;
};
const ServiceReview = ({ review }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [Ratingvalue, setRatingValue] = useState(4);

  const [reviewTrimed, setReviewTrimed] = useState(
    trimReview(review.description)
  );

  return (
    <>
      {/* MENTINE MODAL */}
      <Modal opened={opened} onClose={close} size="calc(100vw - 3rem)">
        <div className="p-8 ">
          <div name="userInfo" className="flex flex-col space-x-4">
            <UserReview review={review} />
            <div name="description_and_rating" className="mt-8">
              <p onClick={open} className="cursor-pointer">
                {review.description}
              </p>
              <ImagesInRow review={review} isPopUp={true} />
            </div>
          </div>
        </div>
      </Modal>
      {/* ------- */}
      <div className="p-8 ">
        <div name="userInfo" className="flex flex-col space-x-4">
          <UserReview review={review} />
          <div name="description_and_rating" className="mt-8">
            <p onClick={open} className="cursor-pointer">
              {reviewTrimed} <span className="text-blue-500">Read more...</span>{" "}
            </p>
            <ImagesInRow review={review} isPopUp={false} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceReview;
