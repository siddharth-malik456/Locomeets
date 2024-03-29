import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase-config";
import FirebaseAuthErrorHandler from "../Utility/FirebaseAuthErrorHandler";
import Cookies from "universal-cookie";
import login_img from "../../public/images/login_main.png";
import google_img from "../../public/logos/google_logo.png";

export default function Login() {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const cookies = new Cookies(null, { path: "/" });
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // --- HANDLE NEW USER ---
  const handleNewUser = (userName, userEmail, userPassword, authMethod) => {
    navigate("/Register", {
      state: {
        name: userName,
        email: userEmail,
        password: userPassword,
        authMethod: authMethod,
      },
    });
  };
  // --- HANDLE OLD USER ---
  const handleOldUser = () => {
    navigate(0);
  };
  // --- Check AUTH CHANGE ---
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        window.localStorage.setItem("auth", "true");

        user.getIdToken().then((token) => {
          cookies.set("userToken", token);
          cookies.set("userUid", uid);
          cookies.set("auth", "true");
        });
      } else {
        // window.localStorage.setItem("auth", "false");
        cookies.set("userToken", "");
        cookies.set("userUid", "");
        cookies.set("auth", "false");

        // ...
      }
    });
  }, []);

  // --- GOOGLE LOGIN ---
  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("triggerd");
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const tokens = credential.accessToken;

        const user = result.user;

        const additionalInfo = getAdditionalUserInfo(result);
        if (additionalInfo.isNewUser) {
          handleNewUser(
            additionalInfo.profile.name,
            additionalInfo.profile.email,
            null,
            "google"
          );
        } else {
          console.log("welcome back " + additionalInfo.profile.name);
          handleOldUser();
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  // --- EMAIL & PASSWORD SIGN IN ---
  const handleEmailSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // handle old user
        handleOldUser();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(FirebaseAuthErrorHandler.handleFirebaseError(errorCode));
        if (errorCode == "auth/invalid-credential") {
          handleNewUser(null, email, password, "email");
        }
      });
  };
  // --- HANDLE EMAIL REGISTER ---
  const handleEmailRegister = () => {
    navigate("/register");
  };
  return (
    <div className="flex justify-around">
      <img src={login_img} alt="" className="w-1/2" />
      <div className="p-12 flex justify-center ">
        <div>
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
            type="password"
            placeholder="password..."
            value={password}
            className="w-full rounded-md px-2 py-1 border border-slate-300 mt-2 mb-8 active:border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="flex justify-between gap-4">
            <button
              onClick={handleEmailRegister}
              className="bg-[#283618] text-white px-4 py-2 rounded-md w-2/4 border border-[#283618] hover:bg-white hover:border-[#283618] hover:text-[#283618] active:bg-[#283618] active:text-white"
            >
              Register
            </button>
            <button
              className="text-[#283618] border  border-[#283618] bg-white hover:bg-[#283618] hover:border-[#283618] hover:text-white active:bg-white active:text-[#283618] px-4 py-2 rounded-md w-2/4"
              onClick={handleEmailSignIn}
            >
              Sign In
            </button>
          </div>
          <br />
          <p className="text-slate-400 text-center mb-4">OR</p>
          <button
            className="flex gap-8 border border-black px-4 py-2 w-full items-center rounded-md"
            onClick={loginWithGoogle}
          >
            <img src={google_img} alt="" className="w-8" />
            Continue with Google
          </button>
          <br />
        </div>
      </div>
    </div>
  );
}
