import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import { useState } from "react";

const cookies = new Cookies();

function LandingNav() {
  const [loggedIn, setLoggedIn] = useState(!!cookies.get("uuid"));

  const handleLogout = () => {
    // Clear the cookie and update loggedIn state
    cookies.remove("uuid");
    setLoggedIn(false);
  };

  if (loggedIn) {
    return (
      <nav>
        <ul className="flex gap-x-5">
          <li>
            <Link
              to="/freelanceDashboard"
              className="text-lg font-semibold text-white tracking-wide underline p-3 rounded-md hover:bg-gradient-to-r to-[#9DD3FF] from-[#1065F4] "
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/userBookings"
              className="text-lg font-semibold text-white tracking-wide underline p-3 rounded-md hover:bg-gradient-to-r to-[#9DD3FF] from-[#1065F4] "
            >
              Bookings
            </Link>
          </li>
          <li>
            <Link
              to="/services/create"
              className="text-lg font-semibold text-white tracking-wide underline p-3 rounded-md hover:bg-gradient-to-r to-[#9DD3FF] from-[#1065F4] "
            >
              Create Service
            </Link>
          </li>
          <li>
            <Link
              to="/userprofile"
              className="text-lg font-semibold text-white tracking-wide underline p-3 rounded-md hover:bg-gradient-to-r to-[#9DD3FF] from-[#1065F4] "
            >
              Profile
            </Link>
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="text-lg font-semibold text-white tracking-wide underline p-3 rounded-md hover:bg-gradient-to-r to-[#9DD3FF] from-[#1065F4] "
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav>
        <ul className="flex gap-x-5">
          <li>
            <Link
              to="/login"
              className="text-lg font-semibold text-white tracking-wide underline p-3 rounded-md hover:bg-gradient-to-r to-[#9DD3FF] from-[#1065F4] "
            >
              Login/Create account
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default LandingNav;
