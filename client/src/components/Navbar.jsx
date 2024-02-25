import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import Login from "./Login";
import Cookies from "universal-cookie";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { app } from "../firebase/firebase-config";
export default function Navbar() {
  const cookies = new Cookies(null, { path: "/" });
  const [isAuth, setAuth] = useState(cookies.get("auth") || "false");
  const [opened, { open, close }] = useDisclosure(false);
  const auth = getAuth(app);
  // ---  SIGN OUT ---
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
        cookies.set("userToken", "");
        cookies.set("userUid", "");
        cookies.set("auth", "false");
        setAuth("false");
      })
      .catch((error) => {
        // An error happened.
        console.log("Error ");
        console.log(error);
      });
  };
  console.log(isAuth);
  return (
    <div className="text-[#283618] pt-2 pb-8 sticky top-0 bg-white z-10">
      <div className="flex w-full justify-center px-16 items-center">
        <div className="w-1/3">
          <div className=" flex gap-2 w-1/3 border-b-2 border-[#e0ead5] py-1">
            <img src="icons/search_icon.png" className="w-6" alt="" />
            <input
              type="text"
              className="text-[#283618] placeholder:text-[#283618] focus:border-none focus:outline-none "
              placeholder="Search..."
            />
          </div>
        </div>
        <Link
          to={"/"}
          style={{ fontFamily: "DM Serif Display" }}
          className="text-4xl w-1/3 text-center text-[#BC6C25]"
        >
          Locomeets
        </Link>
        <Modal opened={opened} onClose={close} centered size="70%">
          {" "}
          <Login />{" "}
        </Modal>
        {isAuth == "false" ? (
          <p className="w-1/3 text-end hover:cursor-pointer" onClick={open}>
            Log In
          </p>
        ) : (
          <p
            className="w-1/3 text-end hover:cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </p>
        )}
      </div>
      <div className="flex gap-32 justify-center mt-8 text-xl font-light">
        <Link to="/services" className="hover:text-[#DDA15E]">
          Browse all
        </Link>
        <Link to="/dashboard" className="hover:text-[#DDA15E]">
          Dashboard
        </Link>
        <Link to="/list-service" className="hover:text-[#DDA15E]">
          List service
        </Link>
        <Link to="/contact" className="hover:text-[#DDA15E]">
          Contact
        </Link>
      </div>
    </div>
  );
}
