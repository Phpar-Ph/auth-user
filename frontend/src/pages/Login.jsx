import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { Loader } from "lucide-react";

import { useState } from "react";
const Login = () => {
  const { login, isLoggingIn } = useAuthStore();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="pt-40 flex justify-center items-center px-4">
      <div className="rounded-2xl w-96 mx-auto  p-4 bg-base-100">
        <h2 className="font-bold text-4xl text-center pb-4">Login</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <EmailInput
            email={formData.email}
            onChangeData={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <PasswordInput
            password={formData.password}
            onChangePassword={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button disabled={isLoggingIn} className="btn btn-primary w-full">
            {isLoggingIn ? (
              <>
                <Loader className="size-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <div className="text-sm text-center py-4">
          <p>
            Dont have an account?{" "}
            {
              <Link to="/signUp" className="hover:underline hover:text-secondary">
                Sign Up
              </Link>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
