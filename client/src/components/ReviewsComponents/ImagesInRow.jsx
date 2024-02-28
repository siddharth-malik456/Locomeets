import { Image, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import UserReview from "./UserReview";

const ImagesInRow = ({ review, isPopUp }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImage, setSelectedImage] = useState(-1);
  const slideImages = review.images;
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
          <UserReview review={review} />
          <Image src={selectedImage} radius="md" className="w-max p-8" />
        </div>
      </Modal>
      <div
        className={` my-4 flex overflow-x-auto scroll-snap-x-mandatory md:h-24 lg:h-40  ${
          isPopUp ? "w-full" : ""
        }     flex-row space-x-2`}
      >
        {slideImages.map((image, index) => {
          return (
            <Image
              onClick={() => handleImageClick(index)}
              key={index}
              className={`  cursor-pointer  `}
              fit="contain"
              radius="md"
              size="lg"
              src={image}
            />
          );
        })}
      </div>
    </>
  );
};

export default ImagesInRow;
