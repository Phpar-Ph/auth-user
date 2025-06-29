import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

const NavBar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <div className="w-full bg-base-100 h-20 ">
      <div className="  max-w-7xl flex items-center justify-between  px-8 mx-auto h-full">
        <p className="font-semibold">
          <Link to="/">{"<User_Auth/>"}</Link>
        </p>
        <div className="flex space-x-6 items-center">
          {authUser && (
            <p className="">
              <Link to="/">Home</Link>
            </p>
          )}
          <p className="">
            <Link to="themes">Themes</Link>
          </p>

          {authUser && (
            <button
              className="btn btn-soft btn-primary text-primary"
              onClick={logout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
