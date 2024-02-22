import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
export default function Home() {
  const token = cookies.get("token");
  const handleClick = async () => {
    const response = await axios.get("http://localhost:3000/freelancer", {
      headers: {
        authorization: "Bearer " + token,
      },
    });
    console.log(response);
  };
  return (
    <div>
      <button onClick={handleClick}>inoast</button>
    </div>
  );
}
