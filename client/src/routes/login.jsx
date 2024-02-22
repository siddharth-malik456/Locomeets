import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { auth } from "../firebase/firebase-config.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import {
  signInWithGoogle,
  registerWithEmail,
  signInWithEmail,
} from "../firebase/signIn.js";

const cookies = new Cookies();

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authState, setAuthState] = useState(
    false || cookies.get("auth") === "true"
  );
  const [token, setToken] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setAuthState(true);
        cookies.set("auth", "true", { path: "/" });
        user.getIdToken().then((userToken) => {
          setToken(userToken);
          cookies.set("token", userToken, { path: "/" });
        });
      } else {
        setAuthState(false);
        cookies.remove("auth", { path: "/" });
        cookies.remove("token", { path: "/" });
      }
    });
    return () => unsubscribe();
  }, []);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setAuthState(false);
        cookies.remove("auth", { path: "/" });
        cookies.remove("token", { path: "/" });
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  const redirectUser = async () => {
    try {
      const response = await axios.get("http://localhost:3000/checkUser", {
        headers: {
          authorization: "Bearer " + token,
        },
      });
      const userType = response.data.user;
      if (userType === "tourist") {
        cookies.set("user", "tourist", { path: "/" });
        navigate("/");
      } else if (userType === "freelancer") {
        cookies.set("user", "freelancer", { path: "/" });
        navigate("/freelanceDashboard");
      } else {
        navigate("/register");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleEmailRegister = async () => {
    await registerWithEmail(email, password);
    redirectUser();
  };

  const handleEmailSignIn = async () => {
    await signInWithEmail(email, password);
    redirectUser();
  };

  const handleGoogleLogin = async () => {
    await signInWithGoogle();
    redirectUser();
  };
  return (
    <div className="flex justify-center items-center bg-slate-200 h-screen">
      <div className="flex rounded-md gap-8 border bg-white items-center">
        <img src="/login-main.png" alt="" className="rounded-l-md w-2/4" />
        <div className="p-12">
          <h1 className="text-3xl mb-8">Create a new account</h1>
          <label htmlFor="" className="">
            Email
          </label>
          <input
            type="text"
            placeholder="email..."
            value={email}
            className="w-full rounded-md px-2 py-1 border border-slate-300 mt-2 mb-4 active:border-black"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="">Password</label>
          <input
            type="text"
            placeholder="password..."
            value={password}
            className="w-full rounded-md px-2 py-1 border border-slate-300 mt-2 mb-8 active:border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="flex justify-between gap-4">
            <button
              onClick={handleEmailRegister}
              className="bg-[#903B4B] text-white px-4 py-2 rounded-md w-2/4"
            >
              Register
            </button>
            <button
              onClick={handleEmailSignIn}
              className="text-[#903B4B] bg-white border border-[#903B4B] px-4 py-2 rounded-md w-2/4"
            >
              Sign In
            </button>
          </div>
          <br />
          <p className="text-slate-400 text-center mb-4">OR</p>
          <button
            className="flex gap-8 border border-black px-4 py-2 w-full items-center rounded-md"
            onClick={handleGoogleLogin}
          >
            <img src="/google_logo.png" alt="" className="w-8" />
            Continue with Google
          </button>
          <br />
          <p className="text-slate-400 text-center mb-4">OR</p>
          <button
            className="flex gap-8 border border-black px-4 py-2 w-full items-center rounded-md bg-[#903B4B] text-white justify-center mt-4"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
