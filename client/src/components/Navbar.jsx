import { Link, useLocation } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import nav_img from "../../public/icons/search_icon.png";
import CreateService from "../components/CreateService";
import Login from "./Login";
import Cookies from "universal-cookie";
import { getAuth, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import { app } from "../firebase/firebase-config";
import axios from "axios";

import "./stylesheets/Animations.css";
export default function Navbar() {
  let location = useLocation();
  const cookies = new Cookies(null, { path: "/" });
  const isTourist = cookies.get("isTourist") || "";
  const [user, setUser] = useState();
  const [isAuth, setAuth] = useState(cookies.get("auth") || "false");
  const [loginOpened, { open: openLogin, close: closeLogin }] =
    useDisclosure(false);
  const [serviceOpened, { open: openService, close: closeService }] =
    useDisclosure(false);
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
  useEffect(() => {
    const fetchUser = async () => {
      if (isAuth == "true" || isAuth == true) {
        const uid = cookies.get("userUid");
        const user = await axios.get(`http://localhost:3000/users/uid/${uid}`);
        if (user.data.isTourist) {
          cookies.set("isTourist", "true");
        } else {
          cookies.set("isTourist", "false");
        }
        setUser(user.data);
      }
    };
    fetchUser();
  }, [isAuth]);
  return (
    <div
      className={`text-[#ffffff] pt-4 pb-4 sticky top-0 px-10 bg-black z-10`}
    >
      <div className="flex w-full justify-center items-center">
        <div className="w-1/3">
          <div className=" flex gap-2 w-1/3 border-b-2 border-white py-1">
            <img src={nav_img} className="w-6" alt="" />
            <input
              type="text"
              className="text-white placeholder:text-white focus:border-none focus:outline-none bg-transparent"
              placeholder="Search..."
            />
          </div>
        </div>
        <Link
          to={"/"}
          style={{ fontFamily: "DM Serif Display" }}
          className="text-4xl w-1/3 text-center text-white"
        >
          Loco
          <span className="text-[#DC6801] animate-charcter">meets</span>
        </Link>
        <Modal opened={loginOpened} onClose={closeLogin} centered size="70%">
          {" "}
          <Login />{" "}
        </Modal>
        {isAuth == "false" ? (
          <p
            className="w-1/3 text-end hover:cursor-pointer"
            onClick={openLogin}
          >
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
        <Link to="/services/all" className="hello">
          Browse all
        </Link>
        {isAuth == "false" ? (
          <Link
            onClick={() =>
              notifications.show({
                title: "Login",
                message: "Login to continue",
              })
            }
            className="hover:text-[#DDA15E] hello"
          >
            Profile
          </Link>
        ) : (
          <Link to="/profile/userinfo" className="hover:text-[#DDA15E] hello">
            Profile
          </Link>
        )}
        {isAuth == "false" || isTourist == true ? (
          <Link
            onClick={() =>
              notifications.show({
                title: "Login",
                message: "Login as freelancer to continue listing service",
              })
            }
            className="hover:text-[#DDA15E] hello"
          >
            List service
          </Link>
        ) : (
          <Link to="/createService" className="hover:text-[#DDA15E] hello">
            List service
          </Link>
        )}
        <Link to="/contact" className="hover:text-[#DDA15E] hello">
          Contact
        </Link>
      </div>
    </div>
  );
}
