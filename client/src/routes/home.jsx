import { useState } from "react";
import Services from "../components/Services";

function Home() {
  const [productID, setProductID] = useState(null);
  return (
    <div>
      <div className="bg-[#903B4B] h-[74vh]">
        <img src="/public/welcomeImg.png" alt="welcomeImg" className="w-full" />
      </div>
      <Services setProductID={setProductID} />
    </div>
  );
}

export default Home;
