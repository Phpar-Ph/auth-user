import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";

const NavBar = () => {
  const { logout, authUser } = useAuthStore();
  return (
    <div className="w-full h-20 flex items-center justify-between ">
      <p className="font-semibold">{"<Use_Auth/>"}</p>
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
  );
};

export default NavBar;
