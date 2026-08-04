"use client";

import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import { useDesktopStore } from "@/store/useDesktopStore";
import { toast } from "react-toastify";

export default function Desktop() {
  const {
    desktopIcons,
    selectedIconId,
    selectIcon,
    highlightIcon,
    highlightedIconId,
  } = useDesktopStore();

  const onDoubleClick = () => {
    toast("We're not here for it, are we? 😉");
  };
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af)`,
      }}
      className="h-screen relative bg-center bg-no-repeat bg-cover"
      onClick={() => {
        selectIcon(null);
        highlightIcon(null);
      }}
    >
      <div
        style={{ paddingTop: "20px", marginLeft: "20px" }}
        className="flex flex-col gap-6 max-w-[85px]"
      >
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            {...icon}
            selected={icon.id === selectedIconId}
            hovered={icon.id === highlightedIconId}
            onClick={(e) => {
              e.stopPropagation();
              highlightIcon(null);
              selectIcon(icon.id);
            }}
            onDoubleClick={onDoubleClick}
            onMouseEnter={(e) => {
              e.stopPropagation();
              if (icon.id === selectedIconId) return;
              highlightIcon(icon.id);
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              highlightIcon(null);
            }}
          />
        ))}
      </div>
      <Taskbar />
    </div>
  );
}
