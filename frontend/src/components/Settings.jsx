import { useThemeStore } from "../store/useThemeStore";
import { Send } from "lucide-react";
import { THEMES } from "../constants/index";
import { Camera } from "lucide-react";

const User = {
  name: "Juan Cruz",
  defaultImage:
    "https://dkmdplciez.ufs.sh/f/otHxc2F14jEuP8pH78zigPD34qaWoEhbQkc8xtfsOJjKuLrm",
  email: "JuanDelaCruz@123gmail.com",
};

const Settings = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="min-h-screen container mx-auto px-4 pt-10 max-w-5xl">
      <div className="space-y-6 pb-20">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-semibold">Theme</h2>
          <p className="text-sm text-base-content/70">
            Choose a theme for your chat interface
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
          {THEMES.map((t) => (
            <button
              key={t}
              className={`
                group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors
                ${theme === t ? "bg-primary" : "hover:bg-base-200/50"}
              `}
              onClick={() => setTheme(t)}
            >
              <div
                className="relative h-8 w-full rounded-md overflow-hidden"
                data-theme={t}
              >
                <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                  <div className="rounded bg-primary"></div>
                  <div className="rounded bg-secondary"></div>
                  <div className="rounded bg-accent"></div>
                  <div className="rounded bg-neutral"></div>
                </div>
              </div>
              <span className="text-[11px] font-medium truncate w-full text-center">
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </span>
            </button>
          ))}
        </div>

        {/* Preview Section */}
        <h3 className="text-lg font-semibold mb-3">Preview</h3>
        <div className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg">
          <div className="p-4 bg-base-200">
            <div className="flex flex-col gap-8 justify-center items-center">
              <div className="relative group  w-80 h-80  rounded-full  shadow-accent-content hover:shadow-md overflow-hidden">
                <img
                  src={User.defaultImage}
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
                </div>
              </div>
              <h1 className="text-4xl font-bold mt-4">
                Welcome <span className="text-primary">{User.name}</span>
              </h1>
              <p className="text-4xl font-bold">
                Email :{" "}
                <span className="text-secondary">{User.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
