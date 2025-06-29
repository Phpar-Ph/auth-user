import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { Camera } from "lucide-react";

const Home = () => {
  const { authUser, isUpdatingProfile, updateProfile } = useAuthStore();
  const [imagePreview, setImagePreview] = useState(null);
  const defaultImage =
    "https://dkmdplciez.ufs.sh/f/otHxc2F14jEuP8pH78zigPD34qaWoEhbQkc8xtfsOJjKuLrm";
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = async () => {
      const base64Image = reader.result;
      setImagePreview(base64Image);
      await updateProfile({ profilePic: base64Image });
    };
  };

  return (
    <div className="flex justify-center w-full">
      <div className="pt-20 flex space-y-2 flex-col justify-center items-center  min-w-1/2 p-4 rounded-xl border border-base-300 bg-base-100 shadow-lg">
      <div className="relative group  w-80 h-80  rounded-full  shadow-accent-content hover:shadow-md overflow-hidden">
        <img
          src={imagePreview || authUser.profilePic || defaultImage}
          alt="Profile"
          className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full">
          <label
            htmlFor="avatar"
            className="cursor-pointer flex items-center justify-center w-full h-full  flex-col text-secondary-content"
          >
            <Camera className="text-secondary size-14 drop-shadow-lg" />
            Click to Add Profile Picture
          </label>
          <input
            type="file"
            id="avatar"
            className="hidden"
            accept="image/*"
            onChange={handleImageUpload}
            disabled={isUpdatingProfile}
          />
        </div>
      </div>
      <h1 className="text-xl md:text-2xl font-bold">
        Welcome <span className="text-primary">{authUser.fullName}</span>
      </h1>
      <p className="text-lg md:text-xl font-bold">
        Email : <span className="text-secondary">{authUser.email}</span>
      </p>
    </div>
    </div>
  );
};

export default Home;
