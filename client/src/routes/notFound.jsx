import React from "react";

export default function Notfound() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <p className="font-bold text-4xl">404 Not Found</p>
        <div className="flex justify-center">
          <button className="border-2 px-2 py-1 rounded-md border-black mt-8 hover:bg-black hover:text-white transition duration-300">
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}
