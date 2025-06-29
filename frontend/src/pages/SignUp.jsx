import React from "react";
import UserNameInput from "../components/UserNameInput";
import EmailInput from "../components/EmailInput";
import PasswordInput from "../components/PasswordInput";
import { Link } from "react-router";
import { useAuthStore } from "../store/useAuthStore";
import { useState } from "react";
import { Loader } from "lucide-react";

const SignUp = () => {
  const { signup, isSignUp } = useAuthStore();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signup(formData);
  };

  return (
    <div className="h-screen flex  justify-center items-center">
      <div className="w-96 mx-auto  p-4 bg-base-100 rounded-2xl">
        <h2 className="font-bold text-4xl text-center pb-4">Sign Up</h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <UserNameInput
            UserName={formData.fullName}
            onChangeUserName={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
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
          <button disabled={isSignUp} className="btn btn-primary w-full">
            {isSignUp ? (
              <>
                <Loader className="size-5 animate-spin" />
                Loading...
              </>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
        <div className="text-sm text-center py-4">
          <p className="">
            Already have an account?{" "}
            {
              <Link to="/login" className="hover:underline">
                Sign In
              </Link>
            }
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
