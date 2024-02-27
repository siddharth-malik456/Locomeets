import { FileInput, Rating } from "@mantine/core";
import React, { useState } from "react";
import UserReview from "./UserReview";
import ImagesInRow from "./ImagesInRow";
import UploadImage from "../../Utility/clodinaryImageUpload";

const ReviewEditor = () => {
  const [formData, setFormData] = useState({
    heading: "",
    description: "",
    images: [],
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setFormData({
      ...formData,
      images: [...formData.images, ...files],
    });
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then((previews) => {
      setPreviewImages([...previewImages, ...previews]);
    });
    //  const imageUrls = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      images: [...formData.images, ...files],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    try {
      const ImagePromises = formData.images.map(async (image) => {
        return UploadImage(image);
      });
      const ImagesUrls = await Promise.all(ImagePromises);
      console.log("-------");
      console.log(ImagesUrls);
      console.log(formData);
      // Reset form data
      setFormData({
        heading: "",
        description: "",
        images: [],
      });
    } catch (error) {}
  };
  const userData = {
    profilePicture: "",
    userFirstName: "Nayan",
    userLastName: "Ansh Singh",
    nationality: "India",
  };

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <form onSubmit={handleSubmit}>
        <UserReview review={userData} isReader={false} />
        <Rating
          value={value}
          size="lg"
          className="my-4"
          color="rgba(0, 0, 0, 1)"
          onChange={setValue}
        />
        <div className="mb-4">
          <label
            htmlFor="heading"
            className="block text-sm font-medium text-gray-700"
          >
            Heading
          </label>
          <input
            type="text"
            id="heading"
            name="heading"
            value={formData.heading}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Images
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mt-1  p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />

          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            for="file_input"
          >
            Upload file
          </label>
        </div>
        <ImagesInRow review={{ userData, images: previewImages }} />
        <button
          type="submit"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewEditor;
