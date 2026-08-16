import Image from "next/image";
import logo from "@/public/assets/terminal.png";
import { X, Square, Minus } from "lucide-react";
import TerminalActiveLine from "./TerminalActiveLine";

export default function Terminal() {
  return (
    <div className="min-h-[50vh] min-w-[50vw] bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden border border-[#222] z-20">
      <div className="flex justify-between px-4 pt-2 bg-[#222]">
        <div className="flex items-center text-sm gap-2 pl-6 bg-black rounded-t-lg pt-1">
          <Image src={logo} height={24} width={24} alt="Terminal Icon" />
          <div>Terminal</div>
          <button className="ml-8 pr-4">
            <X size={16} />
          </button>
        </div>
        <div className="flex pb-2 gap-2">
          <button>
            <Minus size={16} />
          </button>
          <button>
            <Square size={16} />
          </button>
          <button>
            <X size={16} />
          </button>
        </div>
      </div>
      <div className="p-2 font-mono">
        <div className="mb-4">
          BJ Terminal <br /> Type 'help' for available commands.
        </div>
        <TerminalActiveLine />
      </div>
    </div>
  );
}
