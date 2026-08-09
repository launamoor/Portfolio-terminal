"use client";

import Taskbar from "./Taskbar";
import DesktopIcon from "./DesktopIcon";
import { useDesktopStore } from "@/store/useDesktopStore";
import { toast } from "react-toastify";
import Calendar from "./Calendar";

export default function Desktop() {
  const {
    desktopIcons,
    selectedIconId,
    selectIcon,
    highlightIcon,
    highlightedIconId,
    hideCalendar,
    calendarOpened,
  } = useDesktopStore();

  const customToastId: string = "toast-desktop"; // prevents toast duplication

  const onDoubleClick = () => {
    toast("We're not here for it, are we? 😉", { toastId: customToastId });
  };
  return (
    <div
      style={{
        backgroundImage: `url(/assets/wallpaper.jpg)`,
      }}
      className="h-screen relative bg-center bg-no-repeat bg-cover overflow-hidden"
      id="desktop"
      onClick={(e) => {
        selectIcon(null);
        highlightIcon(null);
        if (calendarOpened && (e.target as HTMLElement).id === "desktop")
          hideCalendar();
      }}
    >
      <div
        style={{ paddingTop: "20px", marginLeft: "20px" }}
        className="flex flex-col gap-6 max-w-21.25" // max-w-[85px] - eslint complaints
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
      <Calendar />
      <Taskbar />
    </div>
  );
}
