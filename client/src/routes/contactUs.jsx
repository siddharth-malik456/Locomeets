import { notifications } from "@mantine/notifications";
import React from "react";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const handleSendMessage = (e) => {
    e.preventDefault();

    notifications.show({
      title: "Message sent",
      message: "Thank you for contacting us 😊😊",
    });
    navigate("..");
  };
  return (
    <div class="bg-gray-100">
      <div class="container mx-auto py-12">
        <div class="max-w-lg mx-auto bg-white p-8 rounded shadow-md">
          <h1 class="text-3xl font-semibold text-center mb-6">Get in Touch</h1>
          <p class="text-gray-700 text-center mb-6">
            We'd love to hear from you! Fill out the form below to contact us.
          </p>
          <form
            onSubmit={handleSendMessage}
            action="#"
            method="POST"
            class="space-y-4"
          >
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="email"
                class="block p-2 text-sm font-medium text-gray-700"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
