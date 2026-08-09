import TaskbarIcon from "./TaskbarIcon";
import { useDesktopStore } from "@/store/useDesktopStore";
import { toast } from "react-toastify";
import TaskbarWeather from "./TaskbarWeather";
import TaskbarDateTime from "./TaskbarDateTime";

export const TASKBAR_HEIGHT = 56;

function StartButton() {
  return (
    <button className="h-3/4 min-w-3 aspect-square rounded-full flex items-center justify-center bg-[#222] hover:bg-[#333] active:bg-[#444] transition-all duration-100 ease-in">
      <div className="h-full min-w-3 aspect-square rounded-full bg-radial from-[#292929] to-[#191919] hover:opacity-50 transition-all duration-100 ease-in"></div>
    </button>
  );
}

function SearchBar() {
  return (
    <input
      className="h-3/4 w-62.5 bg-[#222] bg-radial from-[#292929] to-[#191919] p-2 text-sm rounded-4xl text-center"
      placeholder={"Search 🔎"}
      type="text"
      disabled
    />
  );
}

export default function Taskbar() {
  const { taskbarIcons, selectedIconId, highlightedIconId, highlightIcon } =
    useDesktopStore();

  const customToastId: string = "toast-taskbar";

  const handleOnClick = () => {
    toast("We're not here for it, are we? 😉", { toastId: customToastId });
  };
  return (
    <div
      style={{ height: TASKBAR_HEIGHT }}
      className="absolute bottom-0 left-0 bg-[#00000030] w-full backdrop-blur-lg border-t border-[#222]"
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center justify-center gap-4 h-full ml-4">
          <StartButton />
          <SearchBar />
          <div className="flex items-center justify-center gap-1 h-full">
            {taskbarIcons.map((icon) => (
              <TaskbarIcon
                key={icon.id}
                hovered={icon.id === highlightedIconId}
                onMouseEnter={(e) => {
                  e.stopPropagation();
                  if (icon.id === selectedIconId) return;
                  highlightIcon(icon.id);
                }}
                onMouseLeave={(e) => {
                  e.stopPropagation();
                  highlightIcon(null);
                }}
                onClick={handleOnClick}
                {...icon}
              />
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1 h-full mr-4">
          <TaskbarWeather />
          <TaskbarDateTime />
        </div>
      </div>
    </div>
  );
}
