import { useState } from "react";
import IsClient from "../components/IsClient";
import { auth } from "../firebase/firebase-config.js";
import IsFreelancer from "../components/IsFreelancer";

export default function Register() {
  const [isClient, setIsClient] = useState(true);
  const handleClick = () => {
    console.log(isClient);
    setIsClient((prevState) => !prevState);
  };
  return (
    <div>
      <p>isClient</p>
      <button onClick={handleClick}>hello</button>
      {isClient ? <IsClient /> : <IsFreelancer />}
    </div>
  );
}
