import Image from "next/image";
import type { DesktopIconItem } from "@/store/useDesktopStore";
import clsx from "clsx";

type Props = DesktopIconItem & {
  selected: boolean;
  hovered: boolean;
  onClick: (e: React.MouseEvent) => void;
  onDoubleClick: (e: React.MouseEvent) => void;
  onMouseEnter: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
};

export default function DesktopIcon({
  selected,
  hovered,
  onClick,
  onDoubleClick,
  onMouseEnter,
  onMouseLeave,
  ...item
}: Props) {
  return (
    <div
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ padding: "4px 0 2px 0" }}
      className={clsx(
        "flex flex-col items-center justify-center text-sm gap-2 select-none",
        hovered && "bg-blue-500/10 outline outline-1 outline-blue-400/50",
        selected && "bg-blue-500/30 outline outline-1 outline-blue-400",
      )}
    >
      <div>
        {item.type === "lucide" ? (
          <item.icon size={48} />
        ) : (
          <Image src={item.src} alt={item.alt} width={48} height={48} />
        )}
      </div>
      <div className="select-none text-center">{item.text}</div>
    </div>
  );
}
