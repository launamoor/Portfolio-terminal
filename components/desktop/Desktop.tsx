"use client";

import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import { useDesktopStore } from "@/store/useDesktopStore";

export default function Desktop() {
  const { desktopIcons, selectedIconId, selectIcon } = useDesktopStore();
  return (
    <div
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1485470733090-0aae1788d5af)`,
      }}
      className="h-screen relative bg-center bg-no-repeat bg-cover"
      onClick={() => selectIcon(null)}
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
            onClick={(e) => {
              e.stopPropagation();
              selectIcon(icon.id);
            }}
          />
        ))}
      </div>
      <Taskbar />
    </div>
  );
}
