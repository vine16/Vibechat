import { useState } from "react";
import SideDrawer from "./Drawer";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

export default function SideBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="flex-[0.3] border-blue-400 border-2 relative">
      <DensityMediumIcon className="cursor-pointer" onClick={toggleDrawer} />
      <SideDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
}
