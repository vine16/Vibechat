import { useRef } from "react";
import SideDrawer from "./Drawer";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import ChatPreview from "./ChatPreview";

interface SideBarProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}
export default function SideBar({ isDrawerOpen, toggleDrawer }: SideBarProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="overflow-hidden  border-green-400 border-2 flex-shrink-0 relative">
      <div>
        <SideDrawer isOpen={isDrawerOpen} toggleDrawer={toggleDrawer} />
        <div className="flex justify-start px-4 gap-5 items-center h-[52px] border-2">
          <IconButton onClick={toggleDrawer}>
            <DensityMediumIcon className="cursor-pointer" />
          </IconButton>
          <div className="flex grow rounded-full bg-[#F5F5F5] h-[39px] items-center">
            <div className=" h-full w-14 flex justify-center items-center text-gray-400">
              <SearchIcon
                className="cursor-pointer"
                onClick={() => inputRef.current?.focus()}
              />
            </div>
            <input
              type="text"
              placeholder="Search"
              className=" bg-[#F5F5F5] w-full h-full outline-none rounded-full"
              ref={inputRef}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[2px]">
        <ChatPreview
          noOfUnreadMessages={1}
          name={"Vinay Kumar"}
          lastMessage={"Hello"}
          time={"12:00"}
          image={"/vinay.jpg"}
        />
        <ChatPreview
          noOfUnreadMessages={1}
          name={"Vinay Kumar"}
          lastMessage={"Hello"}
          time={"12:00"}
          image={"/vinay.jpg"}
        />
        <ChatPreview
          noOfUnreadMessages={1}
          name={"Vinay Kumar"}
          lastMessage={"Hello"}
          time={"12:00"}
          image={"/vinay.jpg"}
        />
        <ChatPreview
          noOfUnreadMessages={1}
          name={"Vinay Kumar"}
          lastMessage={"Hello"}
          time={"12:00"}
          image={"/vinay.jpg"}
        />
        <ChatPreview
          noOfUnreadMessages={1}
          name={"Vinay Kumar"}
          lastMessage={"Hello"}
          time={"12:00"}
          image={"/vinay.jpg"}
        />
      </div>
    </div>
  );
}
