import type { TaskbarIconItem } from "@/store/useDesktopStore";
import Image from "next/image";
import clsx from "clsx";

type Props = TaskbarIconItem & {
  hovered: boolean;
  onClick: (e: React.MouseEvent) => void;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
};

export default function TaskbarIcon({
  hovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  ...item
}: Props) {
  return (
    <button
      title={item.title}
      className={clsx(
        "h-7/8 min-w-3 aspect-square rounded-full flex flex-col items-center justify-center gap-1 relative",
        hovered && "bg-[#222] outline-1 outline-[#99999940] rounded-sm",
      )}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.id === "teams" ? (
        <div className="w-[12px] h-[12px] bg-red-700 rounded-full absolute top-1.5 right-1.5"></div>
      ) : null}
      <Image src={item.src} alt={item.alt} width={32} height={32} />
      <div className="h-1 bg-[#999] rounded-full w-1/6"></div>
    </button>
  );
}
