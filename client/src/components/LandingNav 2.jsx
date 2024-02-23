import { Link } from "react-router-dom";

function LandingNav() {
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
        <li>
          <Link
            to="/businessLogin"
            className="text-lg font-semibold text-white tracking-wide underline"
          >
            List your business
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default LandingNav;
