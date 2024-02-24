import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex justify-around">
      <img src="images/login_main.png" alt="" className="w-1/2" />
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
              className="bg-[#903B4B] text-white px-4 py-2 rounded-md w-2/4"
            >
              Register
            </button>
            <button
              // onClick={handleEmailSignIn}
              className="text-[#903B4B] bg-white border border-[#903B4B] px-4 py-2 rounded-md w-2/4"
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
            <img src="logos/google_logo.png" alt="" className="w-8" />
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
