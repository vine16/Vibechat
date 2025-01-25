import { useState } from "react";
import ChatBox from "./ChatBox";
import SideBar from "./SideBar";

// flex: 0 1 auto; is the by default style
export default function MainContainer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="bg-blue rounded-md flex relative">
      <SideBar isDrawerOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
      <>
        {isDrawerOpen && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-40"
            onClick={() => toggleDrawer()}
          />
        )}
        <ChatBox />
      </>
    </div>
  );
}
