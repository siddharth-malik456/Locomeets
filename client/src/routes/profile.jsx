import { Avatar } from "@mantine/core";
import React from "react";

const Profile = () => {
  return (
    <div>
      <div className="flex items-center  ">
        <Avatar size="xl" className="border-4  border-[#26B89380] ">
          N
        </Avatar>
        <div className="ml-10 text-xl">
          <div>Nayan Ansh Singh</div>
          <div>Tourist</div>
        </div>
      </div>
      <div className="flex mt-20  h-max mr-8  ">
        <div className="">
          <div className="bg-[#EAF8F5] pr-24 rounded-lg p-3 border hover:border-blue-300 ">
            <p>User Info</p>
          </div>
        </div>
        <div className="w-[2px] ml-8 mr-16 bg-gray-100 h-96"></div>
        <div>
          <div className="text-lg text-gray-300 py-8">personal</div>
          <div className="flex flex-col lg:flex-row ">
            <div name="left side  " className="space-y-4">
              <div className="flex space-x-4">
                <div className="space-y-2">
                  <p className="font-semibold ">First Name</p>
                  <div className="p-4 border border-gray-300 rounded-lg min-w-48 lg:min-w-80">
                    <p>Nayan</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold ">Last Name</p>
                  <div className="p-4 border border-gray-300 rounded-lg  min-w-48 lg:min-w-80">
                    <p>Ansh Singh</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold ">Nationality</p>
                <div className="p-4 border border-gray-300 rounded-lg  min-w-48 lg:min-w-80">
                  <p>India</p>
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
                  <p>nayanansh@gmail.com</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="font-semibold ">Phone number</p>
                <div className="p-4 border border-gray-300 rounded-lg  ">
                  <p>7549XXXXXX</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-semibold ">Bio</p>
            <div className="p-4 border border-gray-300 min-h-44 rounded-lg  ">
              <textarea className="w-full min-h-44">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut
                magna nec nisi blandit pulvinar et cursus ex. Etiam ex ante,
                consequat non tempor quis, pretium ac ligula. Sed sed augue in
                magna condimentum mattis quis non nisi. Praesent sodales, turpis
                vitae congue tristique, nisl felis egestas purus, ac malesuada
                elit dui vitae nisl. Donec efficitur, nibh at venenatis semper,
                nulla velit ullamcorper tellus, quis facilisis dui dui eu ante.
                In eget velit augue. Duis non mauris ut mauris rhoncus
                scelerisque ac nec ligula. Suspendisse et sagittis enim.
                Vestibulum ut commodo elit, et lobortis dolor. Nulla lacus
                massa, imperdiet mattis dui nec, convallis porta metus. Orci
                varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Curabitur id tincidunt nisi, at
                efficitur felis. Sed dictum gravida fermentum. Nullam et enim
                sollicitudin tortor suscipit placerat non ac sem. Aliquam
                interdum dignissim varius. Sed tempus, tortor eget feugiat
                bibendum, dui leo.
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
