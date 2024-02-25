import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaClipboardList,
  FaRegUserCircle,
  FaHome,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  const onLogout = async () => {
    const response = await axios.post(
      "https://employee-presence-tracking-system-api.onrender.com/api/users/logout",
      user
    );

    if (response.data) {
      dispatch(logout());
    }
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="flex flex-row flex-1 w-full h-20 border-b-[1px] border-white items-center">
      <img
        className="object-cover p-4"
        href="/"
        src="https://see.fontimg.com/api/renderfont4/nRy6J/eyJyIjoiZnMiLCJoIjo1MywidyI6MTI1MCwiZnMiOjQyLCJmZ2MiOiIjRjFGMUYxIiwiYmdjIjoiIzAwMDAwMCIsInQiOjF9/TG9nSW4mTG9nT3V0/rispek.png"
        alt="logo"
        width="150"
      />
      <div className="justify-left mr-auto">
        <Link className="flex flex-row space-x-2 p-6 items-center" to="/">
          <FaHome /> <span>Home</span>
        </Link>
      </div>
      <div className="hidden md:flex">
        {user ? (
          <>
            <p className="flex flex-row space-x-2 p-6 items-center text-white">
              <FaRegUserCircle />
              <span>Welcome {user.name}</span>
            </p>
            <Link
              className="flex flex-row space-x-2 p-6 items-center"
              to="/dashboard"
            >
              <FaClipboardList /> Dashboard
            </Link>
            <button
              className="flex flex-row space-x-2 p-6 items-center text-white"
              onClick={onLogout}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <div className="flex flex-row items-center">
            <Link
              className="flex flex-row space-x-2 p-6 items-center"
              to="/login"
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link
              className="flex flex-row space-x-2 p-6 items-center"
              to="/register"
            >
              <FaUser />
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
      <div onClick={handleNav} className="flex p-6 text-white md:hidden">
        {Nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          Nav
            ? "flex flex-col fixed mt-20 right-0 top-0 w-[30%] border-r border-r-gray-900 bg-black ease-out-in duration-300 z-10"
            : "fixed right-[-100%]"
        }
      >
        {user ? (
          <>
            <p className="flex flex-col space-x-2 p-6 items-center text-white">
              <FaRegUserCircle />
              <span>Welcome {user.name}</span>
            </p>
            <Link
              className="flex flex-row space-x-2 p-6 items-center"
              to="/dashboard"
            >
              <FaClipboardList /> Dashboard
            </Link>
            <button
              className="flex flex-row space-x-2 p-6 items-center text-white"
              onClick={onLogout}
            >
              <FaSignOutAlt />
              <span>Logout</span>
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center z-1">
            <Link
              className="flex flex-row space-x-2 p-6 items-center"
              to="/login"
            >
              <FaSignInAlt />
              <span>Login</span>
            </Link>
            <Link
              className="flex flex-row space-x-2 p-6 items-center"
              to="/register"
            >
              <FaUser />
              <span>Register</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
