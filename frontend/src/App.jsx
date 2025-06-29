import { useEffect } from "react";
import { Navigate } from "react-router";
import { useAuthStore } from "./store/useAuthStore";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Settings from "./components/Settings";
import NavBar from "./components/NavBar";
import { Loader } from "lucide-react";
import { useThemeStore } from "./store/useThemeStore";
function App() {
  const { checkAuth, authUser, isCheckingAuth } = useAuthStore();
  const { theme } = useThemeStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("AUth:", { authUser });

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-base-200" data-theme={theme}>
      <div className="max-w-7xl mx-auto ">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!authUser ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signUp"
            element={!authUser ? <SignUp /> : <Navigate to="/" />}
          />
          <Route path="/themes" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
