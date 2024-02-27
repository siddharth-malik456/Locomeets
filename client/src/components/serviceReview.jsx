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
const ServiceReview = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [Ratingvalue, setRatingValue] = useState(4);
  const review =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec tortor vel libero varius viverra vitae eget metus. Pellentesque nibh felis, egestas et tortor eget, dictum eleifend orci. Sed commodo vel sapien id bibendum. Nullam laoreet turpis eget odio ornare interdum. Nullam placerat dolor ut nisl efficitur, convallis volutpat diam cursus. Maecenas ac neque enim. Vivamus eleifend, ex posuere placerat feugiat, diam dolor malesuada orci, ac suscipit ex magna in ante. Proin rutrum accumsan ante, sed efficitur ante dignissim vel. Suspendisse cursus enim nisi, non rutrum felis feugiat non. Nam rhoncus vitae nisl ut lacinia. In ut mollis augue. Vestibulum pretium ligula nec erat lobortis suscipit. Aliquam laoreet tellus vitae finibus bibendum. Aenean bibendum maximus est vel dapibus. Cras id euismod ipsum, sed varius ex. Aenean ut magna id arcu malesuada ultricies at quis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean sed.";
  const [reviewTrimed, setReviewTrimed] = useState(trimReview(review));

  return (
    <>
      {/* MENTINE MODAL */}
      <Modal opened={opened} onClose={close} size="calc(100vw - 3rem)">
        <div className="p-8 ">
          <div name="userInfo" className="flex flex-col space-x-4">
            <UserReview value={Ratingvalue} setValue={setRatingValue} />
            <div name="description_and_rating" className="mt-8">
              <p onClick={open} className="cursor-pointer">
                {review}
              </p>
              <ImagesInRow
                Ratingvalue={Ratingvalue}
                setRatingValue={setRatingValue}
                isPopUp={true}
              />
            </div>
          </div>
        </div>
      </Modal>
      {/* ------- */}
      <div className="p-8 ">
        <div name="userInfo" className="flex flex-col space-x-4">
          <UserReview value={Ratingvalue} setValue={setRatingValue} />
          <div name="description_and_rating" className="mt-8">
            <p onClick={open} className="cursor-pointer">
              {reviewTrimed} <span className="text-blue-500">Read more...</span>{" "}
            </p>
            <ImagesInRow
              Ratingvalue={Ratingvalue}
              setRatingValue={setRatingValue}
              isPopUp={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceReview;
