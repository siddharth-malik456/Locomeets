import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { auth } from "../firebase/firebase-config.js";
import {
  signInWithGoogle,
  registerWithEmail,
  signInWithEmail,
} from "../firebase/signIn.js";

const cookies = new Cookies();

export default function Login() {
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

  const handleEmailRegister = () => {
    registerWithEmail(email, password);
  };

  const handleEmailSignIn = () => {
    signInWithEmail(email, password);
  };

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <input
        type="text"
        placeholder="email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {authState ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
          <br />
        </div>
      ) : (
        <div>
          <button onClick={handleEmailRegister}>Register</button>
          <br />
          <button onClick={handleEmailSignIn}>Sign In</button>
          <br />
          <button onClick={handleGoogleLogin}>Log in with google</button>
        </div>
      )}
    </div>
  );
}
