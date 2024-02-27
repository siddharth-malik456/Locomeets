import { Image, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import UserReview from "./UserReview";
const slideImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
];

const ImagesInRow = ({ Ratingvalue, setRatingValue, isPopUp }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImage, setSelectedImage] = useState(-1);
  const handleImageClick = (index) => {
    setSelectedImage(slideImages[index]);
    open();
  };
  return (
    <>
      <Modal
        className="w-[1000px]"
        opened={opened}
        // withCloseButton={false}
        onClose={close}
        size="55%"
        centered
      >
        <div className="flex justify-center flex-col">
          <UserReview value={Ratingvalue} setValue={setRatingValue} />
          <Image src={selectedImage} radius="md" className="w-max p-8" />
        </div>
      </Modal>
      <div
        className={` my-4 flex overflow-x-auto scroll-snap-x-mandatory  ${
          isPopUp ? "w-full" : "w-96"
        }     flex-row space-x-2`}
      >
        {slideImages.map((image, index) => {
          return (
            <Image
              onClick={() => handleImageClick(index)}
              key={index}
              className={` ${isPopUp ? "w-1/2" : "w-24"} cursor-pointer  `}
              fit="contain"
              radius="md"
              src={image}
            />
          );
        })}
      </div>
    </>
  );
};

export default ImagesInRow;
