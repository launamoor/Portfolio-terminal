import { Sun } from "lucide-react";

export default function TaskbarWeather() {
  return (
    <div className="h-3/4 aspect-square flex items-center justify-start gap-1 px-2 cursor-default hover:bg-[#222] hover:outline-1 hover:outline-[#99999940] hover:rounded-sm">
      <div>
        <Sun size={30} />
      </div>
      <div className="flex flex-col items-start justify-center text-xs">
        <div className="text-xs">20°C</div>
        <div className="text-nowrap">Mostly Sunny</div>
      </div>
    </div>
  );
}
