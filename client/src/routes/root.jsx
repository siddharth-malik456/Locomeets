import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Header />
        <Outlet />
      </div>
    </>
  );
}
