import ChatBox from "./ChatBox";
import SideBar from "./SideBar";

// flex: 0 1 auto; is the by default style
export default function MainContainer() {
  return (
    <div className="w-[90vw] h-[90vh] bg-white rounded-md flex">
      <SideBar />
      <ChatBox />
    </div>
  );
}
