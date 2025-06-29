import { Link, useNavigate } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { Menu } from "lucide-react";
const NavBar = () => {
  const navigate = useNavigate()
  const { logout, authUser } = useAuthStore();
  const handleLogout = ()=>{
    logout()
    navigate("/")
  }
  return (
    <div className="w-full bg-base-100 h-20 ">
      <div className="  max-w-6xl flex items-center justify-between  px-8 mx-auto h-full">
        <p className="font-semibold hover:text-secondary">
          <Link to="/">{"<User_Auth/>"}</Link>
        </p>

        {/* drawer */}
        <div className="drawer drawer-end text-right md:hidden">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-4"
              className="drawer-button btn btn-primary"
            >
              <Menu className="size-8" />
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer-4"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-48">
              {/* Sidebar content here */}
              <li className="py-2 mb-2 bg-base-300">
                {authUser && <Link to="/">Home</Link>}
              </li>
              <li className="py-2 mb-2 bg-base-300">
                <Link to="themes">Themes</Link>
              </li>
              <li className="">
                {authUser && (
                  <button
                    className="btn btn-soft btn-primary text-primary"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="space-x-6 items-center hidden md:flex">
          {authUser && (
            <p className="hover:text-secondary">
              <Link to="/">Home</Link>
            </p>
          )}
          <p className="hover:text-secondary">
            <Link to="themes">Themes</Link>
          </p>

          {authUser && (
            <button
              className="btn btn-soft btn-primary text-primary"
              onClick={handleLogout}
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
