import React from "react";
import { useAuthStore } from "../store/useAuthStore";

const Home = () => {
  const { authUser } = useAuthStore();
  return (
    <div className="h-screen bg-base-200 flex justify-center items-center">
      <h1 className="text-4xl font-bold">Welcome {authUser.fullName}</h1>
    </div>
  );
};

export default Home;
