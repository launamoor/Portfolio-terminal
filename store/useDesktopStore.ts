import { create } from "zustand";
import { LucideIcon, Trash2 } from "lucide-react";

type LucideIconItem = {
  id: string;
  type: "lucide";
  icon: LucideIcon;
  text: string;
};

type ImageIconItem = {
  id: string;
  type: "image";
  src: string;
  alt: string;
  text: string;
};

export type DesktopIconItem = LucideIconItem | ImageIconItem;

export type DesktopStore = {
  desktopIcons: DesktopIconItem[];
  selectedIconId: string | null;
  highlightedIconId: string | null;
  selectIcon: (id: string | null) => void;
  highlightIcon: (id: string | null) => void;
};

export const useDesktopStore = create<DesktopStore>((set) => ({
  desktopIcons: [
    {
      id: "bin",
      type: "lucide",
      icon: Trash2,
      text: "Recycle Bin",
    },
    {
      id: "vc",
      type: "image",
      src: "/assets/vc.png",
      alt: "GTA VC Icon",
      text: "Best GTA ever made",
    },
    {
      id: "cs",
      type: "image",
      src: "/assets/cs.png",
      alt: "Counter Strike Icon",
      text: "CS 1.6",
    },
    {
      id: "tibia",
      type: "image",
      src: "/assets/tibia.png",
      alt: "Tibia Icon",
      text: "Tibia",
    },
    {
      id: "winamp",
      type: "image",
      src: "/assets/winamp.png",
      alt: "Winamp Icon",
      text: "Winamp",
    },
  ],
  selectedIconId: null,
  highlightedIconId: null,
  selectIcon: (id) => set({ selectedIconId: id }),
  highlightIcon: (id) => set({ highlightedIconId: id }),
}));
