import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "sonner";
export const useAuthStore = create((set) => ({
  isLogin: false,
  isLoggingIn: false,
  isSigningUp: false,
  authUser: null,
  isCheckingAuth: true,
  isSignUp: false,
  onlineUsers: [],
  isUpdatingProfile: false,
  checkAuth: async (suppressError = false) => {
    set({ isCheckingAuth: true });
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data.user });
    } catch (err) {
      set({ authUser: null });
       if (!suppressError) {
      toast.error("Authentication failed",err);
    }
    } finally {
      set({ isCheckingAuth: false });
    }
  },
  signup: async (data) => {
    set({ isSignUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      });
      toast.success("Sigup Succesfully");
      set({ authUser: res.data });
    } catch (err) {
      toast.error("Error sign up: ", err);
    } finally {
      set({ isSignUp: false });
    }
  },
  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logout succesfully");
    } catch (err) {
      toast.error("Error logging out", err);
    }
  },
  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", {
        email: data.email,
        password: data.password,
      });
      toast.success("Sign In succesfully");
      set({ authUser: res.data });
    } catch (err) {
      toast.error("Error logging in", err);
    } finally {
      set({ isLoggingIn: false });
    }
  },
  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      toast.success("Profile updated succesfully");
    } catch (err) {
      toast.error("Error uploading profile", err);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },
}));
