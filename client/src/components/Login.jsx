import React, { useState } from "react";
import login_img from "../../public/images/login_main.png";
import google_img from "../../public/logos/google_logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            type="text"
            placeholder="password..."
            value={password}
            className="w-full rounded-md px-2 py-1 border border-slate-300 mt-2 mb-8 active:border-black"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="flex justify-between gap-4">
            <button
              // onClick={handleEmailRegister}
              className="bg-[#283618] text-white px-4 py-2 rounded-md w-2/4 border border-[#283618] hover:bg-white hover:border-[#283618] hover:text-[#283618] active:bg-[#283618] active:text-white"
            >
              Register
            </button>
            <button
              // onClick={handleEmailSignIn}
              className="text-[#283618] border  border-[#283618] bg-white hover:bg-[#283618] hover:border-[#283618] hover:text-white active:bg-white active:text-[#283618] px-4 py-2 rounded-md w-2/4"
            >
              Sign In
            </button>
          </div>
          <br />
          <p className="text-slate-400 text-center mb-4">OR</p>
          <button
            className="flex gap-8 border border-black px-4 py-2 w-full items-center rounded-md"
            // onClick={handleGoogleLogin}
          >
            <img src={google_img} alt="" className="w-8" />
            Continue with Google
          </button>
          <br />
          <p className="text-slate-400 text-center mb-4">OR</p>
          <button
            className="flex gap-8 px-4 py-2 w-full items-center border border-[#283618] rounded-md bg-[#283618] hover:bg-white hover:border-[#283618] hover:text-[#283618] active:bg-[#283618] active:text-white text-white justify-center mt-4"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
