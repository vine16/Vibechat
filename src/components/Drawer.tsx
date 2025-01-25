import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

interface SideDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

// "-translate-x-full"; move in -x direction full
const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, toggleDrawer }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(drawerRef, () => {
    if (isOpen) {
      toggleDrawer();
    }
  });

  return (
    <div
      className={`absolute top-0 left-0 w-52 h-full bg-gray-800 text-white z-50 transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={drawerRef}
    >
      <div>
        <div className="p-5 border-b-2 border-gray-400">
          <img
            src="/profile-image.jpg"
            alt="profile-image"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="mt-2 font-sans">Sumit Rawal</p>
          </div>
        </div>
        <div>
          <ul className="flex flex-col justify-start">
            <li className="cursor-pointer hover:bg-[#18202C]">
              <div className="flex gap-2 p-2">
                <PersonAddIcon />
                <p>Create Group</p>
              </div>
            </li>
            <li className="cursor-pointer hover:bg-[#18202C]">
              <div className="flex gap-2 p-2">
                <GroupAddIcon />
                <p>Join Group</p>
              </div>
            </li>
            <li className="cursor-pointer hover:bg-[#18202C]">
              <div className="flex gap-2 p-2">
                <AddCircleIcon />
                <p>Create Channel</p>
              </div>
            </li>
            <li className="cursor-pointer hover:bg-[#18202C]">
              <div className="flex gap-2 p-2">
                <DarkModeIcon />
                <p>Dark Mode</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
