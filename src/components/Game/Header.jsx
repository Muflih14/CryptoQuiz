import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <div>
      <div className="flex items-center justify-between bg-gray-900 text-white py-4 px-8">
        <div>
          <Link to="/" className="text-xl font-bold">
            Logo
          </Link>
        </div>
        <div>
          <Link to="/" className="btn mr-2">
            Play
          </Link>
          <Link to="/profile" className="btn mr-2">
            Profile
          </Link>
          <Link to="/leaderboard" className="btn">
            Leaderboard
          </Link>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Navbar;
