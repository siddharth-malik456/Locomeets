import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="flex h-full items-center gap-x-2">
      <img src="logo.png" className="h-1/5" />
      <Link to="/" className="text-xl font-bold text-white tracking-wide">
        Locomeets
      </Link>
    </div>
  );
}

export default Logo;
