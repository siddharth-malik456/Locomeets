import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <Navbar />
      <div id="detail" className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </>
  );
}
