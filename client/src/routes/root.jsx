import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <p>Hello</p>
        <Outlet />
      </div>
    </>
  );
}
