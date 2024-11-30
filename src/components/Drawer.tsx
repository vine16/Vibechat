import { useRef } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface SideDrawerProps {
  isOpen: boolean;
  toggleDrawer: () => void;
}

const SideDrawer: React.FC<SideDrawerProps> = ({ isOpen, toggleDrawer }) => {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(drawerRef, () => {
    if (isOpen) {
      toggleDrawer();
    }
  });

  return (
    <div
      className={`absolute top-0 left-0 w-40 h-full bg-gray-800 text-white transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      ref={drawerRef}
    >
      <div className="p-4">
        <h2 className="text-xl">Side Drawer</h2>
        <ul>
          <li>Menu Item 1</li>
          <li>Menu Item 2</li>
          <li>Menu Item 3</li>
        </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
